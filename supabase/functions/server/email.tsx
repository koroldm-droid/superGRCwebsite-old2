// Email utility using Resend API
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const RESEND_API_URL = 'https://api.resend.com/emails';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from = 'Super GRC <demo@supergrc.com>' }: EmailOptions) {
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    throw new Error('Email service not configured');
  }

  // Check if API key looks valid (should start with 're_')
  if (!RESEND_API_KEY.startsWith('re_')) {
    console.error('RESEND_API_KEY appears to be invalid - should start with "re_"');
    throw new Error('Invalid API key format');
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      
      // Provide helpful error messages based on status code
      if (response.status === 401) {
        throw new Error('Invalid Resend API key. Please verify your API key at https://resend.com/api-keys');
      } else if (response.status === 403) {
        throw new Error(`Domain not verified. Resend sandbox mode only allows sending to verified email addresses. To send to any email, verify your domain at https://resend.com/domains - Error: ${data.message}`);
      } else if (response.status === 422) {
        throw new Error(`Email validation error: ${data.message || 'Check email addresses and content'}`);
      } else {
        throw new Error(`Failed to send email: ${data.message || 'Unknown error'}`);
      }
    }

    console.log(`Email sent successfully to ${to}:`, data.id);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Generate confirmation email HTML for the user
export function generateUserConfirmationEmail(name: string, company: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #151719;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #151719 0%, #2a2d31 100%);
            padding: 40px 30px;
            border-radius: 12px 12px 0 0;
            text-align: center;
          }
          .logo {
            color: #CFE928;
            font-size: 32px;
            font-weight: bold;
            margin: 0;
          }
          .content {
            background: #ffffff;
            padding: 40px 30px;
            border-left: 1px solid #E6E6E6;
            border-right: 1px solid #E6E6E6;
          }
          .footer {
            background: #E6E6E6;
            padding: 30px;
            border-radius: 0 0 12px 12px;
            text-align: center;
            font-size: 14px;
            color: #151719;
            opacity: 0.7;
          }
          .button {
            display: inline-block;
            background: #CFE928;
            color: #151719;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 20px 0;
          }
          .highlight {
            color: #CFE928;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="logo">Super GRC</h1>
          <p style="color: #9FCFD3; margin: 10px 0 0 0; font-size: 16px;">Governance. Risk. Compliance.</p>
        </div>
        
        <div class="content">
          <h2 style="color: #151719; margin-top: 0;">Thank You for Your Interest!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for requesting a demo of <span class="highlight">Super GRC</span>! We're excited to show you how our comprehensive platform can transform your governance, risk, and compliance operations.</p>
          
          <p><strong>What happens next?</strong></p>
          <ul style="color: #151719;">
            <li>Our team will review your request</li>
            <li>We'll reach out within 1-2 business days</li>
            <li>We'll schedule a personalized demo tailored to ${company}'s needs</li>
          </ul>
          
          <p>In the meantime, feel free to explore our website to learn more about our 12+ feature areas covering everything from asset discovery to third-party risk management.</p>
          
          <p>If you have any immediate questions, don't hesitate to reply to this email.</p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The Super GRC Team</strong><br>
            <span style="color: #9FCFD3; font-style: italic;">Created by and for Cybersecurity Practitioners</span>
          </p>
        </div>
        
        <div class="footer">
          <p style="margin: 0;">© ${new Date().getFullYear()} Super GRC. All rights reserved.</p>
          <p style="margin: 10px 0 0 0;">This email was sent because you requested a demo at supergrc.com</p>
        </div>
      </body>
    </html>
  `;
}

// Generate admin notification email
export function generateAdminNotificationEmail(formData: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  submittedAt: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #151719;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #CFE928;
            padding: 20px 30px;
            border-radius: 12px 12px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #E6E6E6;
            border-top: none;
            border-radius: 0 0 12px 12px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #151719;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #151719;
            background: #E6E6E6;
            padding: 10px 15px;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2 style="margin: 0; color: #151719;">🎯 New Demo Request</h2>
        </div>
        
        <div class="content">
          <p style="color: #9FCFD3; margin-top: 0;"><strong>Submitted:</strong> ${new Date(formData.submittedAt).toLocaleString()}</p>
          
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
          </div>
          
          <div class="field">
            <span class="label">Company:</span>
            <div class="value">${formData.company}</div>
          </div>
          
          ${formData.phone ? `
          <div class="field">
            <span class="label">Phone:</span>
            <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
          </div>
          ` : ''}
          
          ${formData.message ? `
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${formData.message}</div>
          </div>
          ` : '<p style="color: #151719; opacity: 0.5;"><em>No additional message provided</em></p>'}
          
          <hr style="border: none; border-top: 1px solid #E6E6E6; margin: 30px 0;">
          
          <p style="margin-bottom: 0; color: #151719; opacity: 0.7; font-size: 14px;">
            Follow up with this prospect to schedule their personalized demo.
          </p>
        </div>
      </body>
    </html>
  `;
}