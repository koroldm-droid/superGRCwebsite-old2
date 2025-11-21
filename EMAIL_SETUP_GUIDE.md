# Super GRC Email Setup Guide

## ✅ What's Configured

Your Super GRC demo form now has full email functionality powered by **Resend** (free tier).

### When someone submits the demo form:
1. ✅ Form data is saved to your Supabase database
2. ✅ User receives a beautiful confirmation email
3. ✅ Admin receives a notification email with all submission details

---

## 🔑 Get Your FREE Resend API Key

### Step 1: Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Click "Sign Up" (it's FREE - 3,000 emails/month, 100/day)
3. Create your account

### Step 2: Get your API Key
1. After signing in, go to **API Keys** in the dashboard
2. Click **"Create API Key"**
3. Give it a name like "Super GRC Production"
4. Select permissions: **"Sending access"**
5. Click **Create**
6. **Copy the API key** (starts with `re_...`)

### Step 3: Add the API Key
1. You already have the secret field set up in your environment
2. Paste your Resend API key into the **RESEND_API_KEY** field
3. Click Save

---

## 📧 Configure Your Sender Email

### Default Sender
Currently using: `Super GRC <onboarding@resend.dev>`

### Use Your Own Domain (Recommended for Production)
1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Add your domain (e.g., `supergrc.com`)
4. Follow DNS verification steps
5. Once verified, update the sender in `/supabase/functions/server/email.tsx`:
   ```typescript
   from = 'Super GRC <noreply@supergrc.com>'
   ```

---

## 📬 Set Admin Notification Email

By default, admin notifications go to: `admin@supergrc.com`

### To change this:
1. Go to Supabase Dashboard → Project Settings → Edge Functions
2. Add environment variable:
   - Name: `ADMIN_EMAIL`
   - Value: `your-real-email@example.com`
3. Save

Or you can hardcode it in `/supabase/functions/server/index.tsx` line 11:
```typescript
const ADMIN_EMAIL = 'youremail@company.com';
```

---

## 🎨 Email Templates

Two beautiful email templates are included:

### 1. User Confirmation Email
- Super GRC branded header with Electric Lime (#CFE928)
- Professional thank you message
- Next steps outlined
- Clean, modern design

### 2. Admin Notification Email  
- Instant alert about new demo request
- All form details in organized format
- Clickable email and phone links
- Timestamp included

Both templates are in `/supabase/functions/server/email.tsx` and can be customized!

---

## 🧪 Testing

### Test the form:
1. Go to your Super GRC website
2. Scroll to "Request a Demo" section
3. Fill out the form
4. Click Submit

### You should see:
- ✅ Success message on the website
- ✅ Confirmation email in the user's inbox
- ✅ Notification email sent to admin

### Check logs:
Visit: `https://{your-project-id}.supabase.co/functions/v1/make-server-101a5808/demo/submissions`
(Shows all submissions in JSON format)

---

## 💡 Pro Tips

1. **Resend Free Tier Limits:**
   - 3,000 emails/month
   - 100 emails/day
   - Perfect for a marketing site getting demo requests

2. **Email Deliverability:**
   - Use your own domain for better deliverability
   - The default `onboarding@resend.dev` works but some email providers may flag it

3. **Customize Templates:**
   - Edit `/supabase/functions/server/email.tsx`
   - Change colors, text, layout
   - Keep it branded with your Electric Lime (#CFE928) color!

4. **Monitor Usage:**
   - Check Resend dashboard for email stats
   - See delivery rates, opens, bounces

---

## ❓ Troubleshooting

**Emails not sending?**
- Check that RESEND_API_KEY is set correctly
- Verify the API key in Resend dashboard is active
- Check server logs for error messages

**Admin not getting emails?**
- Verify ADMIN_EMAIL environment variable
- Check spam folder
- Confirm email address is valid

**User confirmation emails missing?**
- Check user's spam folder
- Verify email address format is correct
- Check Resend dashboard for delivery status

---

## 📊 View All Submissions

Access the admin endpoint to see all demo requests:

```
GET https://{your-project-id}.supabase.co/functions/v1/make-server-101a5808/demo/submissions
```

Returns JSON with all submissions sorted by date (newest first).

---

**That's it! Your Super GRC demo form is now fully functional with professional email notifications. 🚀**
