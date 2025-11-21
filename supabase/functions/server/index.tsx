import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { sendEmail, generateUserConfirmationEmail, generateAdminNotificationEmail } from "./email.tsx";

const app = new Hono();

// Admin email for notifications - using your custom domain
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'info@supergrc.com';

// Sandbox mode - set to false once domain is verified
const SANDBOX_MODE = Deno.env.get('RESEND_SANDBOX_MODE') !== 'false'; // true by default

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-101a5808/health", (c) => {
  return c.json({ status: "ok" });
});

// Demo form submission endpoint
app.post("/make-server-101a5808/demo", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return c.json({ error: "Missing required fields: name, email, and company are required" }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Create submission object
    const submission = {
      name,
      email,
      company,
      phone: phone || '',
      message: message || '',
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    // Generate unique key for this submission
    const submissionKey = `demo_submission:${Date.now()}:${email}`;

    // Save to key-value store
    await kv.set(submissionKey, submission);

    console.log(`Demo form submission received from ${email} (${company})`);

    // In sandbox mode, send all emails to admin for testing
    if (SANDBOX_MODE) {
      console.log('🧪 SANDBOX MODE: Sending all emails to admin only');
      
      try {
        // Send admin notification with user's info
        const adminEmailHtml = generateAdminNotificationEmail(submission);
        await sendEmail({
          to: ADMIN_EMAIL,
          subject: `🎯 New Demo Request from ${company}`,
          html: adminEmailHtml
        });
        console.log(`✅ Sandbox mode: Admin notification sent to ${ADMIN_EMAIL} (contains user info: ${email})`);
      } catch (emailError) {
        console.error('Failed to send admin notification email:', emailError);
        console.log('⚠️ Note: Resend requires domain verification to send to other addresses. Visit https://resend.com/domains');
      }
    } else {
      // Production mode - send emails to both user and admin
      // Send confirmation email to the user
      try {
        const userEmailHtml = generateUserConfirmationEmail(name, company);
        await sendEmail({
          to: email,
          subject: "Thank you for your interest in Super GRC!",
          html: userEmailHtml
        });
        console.log(`Confirmation email sent to ${email}`);
      } catch (emailError) {
        console.error('Failed to send confirmation email to user:', emailError);
        // Continue even if email fails - submission is still saved
      }

      // Send notification email to the admin
      try {
        const adminEmailHtml = generateAdminNotificationEmail(submission);
        await sendEmail({
          to: ADMIN_EMAIL,
          subject: `🎯 New Demo Request from ${company}`,
          html: adminEmailHtml
        });
        console.log(`Admin notification sent to ${ADMIN_EMAIL}`);
      } catch (emailError) {
        console.error('Failed to send admin notification email:', emailError);
        // Continue even if email fails - submission is still saved
      }
    }

    // Return success response
    return c.json({ 
      success: true, 
      message: "Thank you for your interest! Our team will contact you shortly.",
      submissionId: submissionKey
    });

  } catch (error) {
    console.error('Error processing demo form submission:', error);
    return c.json({ 
      error: "An error occurred while processing your request. Please try again or contact us directly.",
      details: error.message 
    }, 500);
  }
});

// Get all demo submissions (for admin viewing)
app.get("/make-server-101a5808/demo/submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix('demo_submission:');
    
    // Sort submissions safely, handling potential undefined values
    const sortedSubmissions = submissions.sort((a, b) => {
      const dateA = a?.value?.submittedAt ? new Date(a.value.submittedAt).getTime() : 0;
      const dateB = b?.value?.submittedAt ? new Date(b.value.submittedAt).getTime() : 0;
      return dateB - dateA;
    });
    
    return c.json({ 
      success: true, 
      count: submissions.length,
      submissions: sortedSubmissions
    });
  } catch (error) {
    console.error('Error fetching demo submissions:', error);
    return c.json({ 
      error: "Failed to fetch submissions",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);