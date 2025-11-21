# 🌐 Resend Domain Verification Guide

## 🎯 What's Happening Now

**Good News:** Your Resend API is working! ✅

**Current Limitation:** You're in **"Sandbox Mode"** which means:
- ✅ You can send emails to `koroldm@supergrc.com` (your verified email)
- ❌ You CANNOT send emails to other addresses yet
- ⚠️ Users won't receive confirmation emails
- ✅ You'll receive all notifications with user details

---

## 🔧 TWO OPTIONS TO FIX THIS

### Option 1: Keep Sandbox Mode (Quick - Already Working!)

**Current Setup:**
- ✅ Form submissions are saved to database
- ✅ You receive notification emails with all user details
- ❌ Users don't receive confirmation emails
- ✅ Perfect for testing and collecting leads

**No action needed!** Your system is already configured to work in sandbox mode.

**Pros:**
- ✅ Works right now
- ✅ Zero setup required
- ✅ Free forever
- ✅ You get notified of every submission

**Cons:**
- ❌ Users don't get confirmation emails
- ❌ Less professional experience

---

### Option 2: Verify Your Domain (Production-Ready)

**What you get:**
- ✅ Send emails to ANY address
- ✅ Users receive beautiful confirmation emails
- ✅ Professional from address: `demo@supergrc.com`
- ✅ Better email deliverability
- ✅ No "via resend.dev" in email headers

**Setup time:** 10-15 minutes

---

## 📝 HOW TO VERIFY YOUR DOMAIN (Step-by-Step)

### Step 1: Go to Resend Domains (1 minute)

1. Log in to **https://resend.com**
2. Click **"Domains"** in the left sidebar
3. Click **"Add Domain"** button

---

### Step 2: Enter Your Domain (30 seconds)

1. Enter your domain: `supergrc.com`
2. Click **"Add"**

Resend will show you DNS records to add.

---

### Step 3: Add DNS Records (5-10 minutes)

Resend will give you **3 DNS records** to add to your domain:

#### Record 1: SPF (TXT Record)
```
Type: TXT
Name: @ (or leave blank)
Value: v=spf1 include:_spf.resend.com ~all
```

#### Record 2: DKIM (TXT Record)
```
Type: TXT  
Name: resend._domainkey
Value: [long string provided by Resend]
```

#### Record 3: DMARC (TXT Record)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none;
```

**Where to add these:**
- Go to your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare)
- Find DNS settings / DNS management
- Add each record exactly as shown
- Save changes

---

### Step 4: Wait for Verification (5-30 minutes)

1. After adding DNS records, go back to Resend
2. Click **"Verify"** button
3. Resend will check your DNS records

**Note:** DNS changes can take 5-30 minutes to propagate.

---

### Step 5: Update Your Code (1 minute)

Once verified, change the "from" address in `/supabase/functions/server/email.tsx`:

**Line 12 - Change from:**
```typescript
from = 'Super GRC <onboarding@resend.dev>'
```

**To:**
```typescript
from = 'Super GRC <demo@supergrc.com>'
```

Or any email address using your verified domain.

---

### Step 6: Turn Off Sandbox Mode (30 seconds)

In Supabase Dashboard:
1. Go to Settings → Edge Functions → Environment Variables
2. Add new variable:
   - **Name:** `RESEND_SANDBOX_MODE`
   - **Value:** `false`
3. Save

This enables sending to all email addresses!

---

### Step 7: Test! (1 minute)

1. Submit your demo form with a **different email address**
2. Check that email inbox
3. You should receive the confirmation email!
4. Check `koroldm@supergrc.com` for admin notification

**Success!** You can now send to anyone! 🎉

---

## 🚀 QUICK START FOR TESTING (No Domain Needed)

**Your system is already configured for sandbox mode!**

Just submit the form and you'll receive an email at `koroldm@supergrc.com` with all the user's details.

**What you'll get:**
- Email notification for every submission
- All user details (name, email, company, phone, message)
- Database record of submission
- User sees success message

**The only thing missing:** Users don't get confirmation emails (but they see success message on screen).

---

## 🧪 CURRENT CONFIGURATION

### Sandbox Mode: **ENABLED** ✅

**How it works:**
1. User submits form → Saved to database
2. Email sent to: `koroldm@supergrc.com` (admin)
3. Email contains: All user details
4. User sees: Success message
5. User receives: Nothing (they just see confirmation on screen)

**Logs will show:**
```
🧪 SANDBOX MODE: Sending all emails to admin only
✅ Sandbox mode: Admin notification sent to koroldm@supergrc.com (contains user info: user@example.com)
```

---

## 📋 DNS RECORDS EXAMPLE

When you verify `supergrc.com`, you'll add records like this:

### In your DNS provider (e.g., Cloudflare, GoDaddy):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | `v=spf1 include:_spf.resend.com ~all` | Auto |
| TXT | resend._domainkey | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4...` | Auto |
| TXT | _dmarc | `v=DMARC1; p=none;` | Auto |

**Note:** The DKIM value will be a long string provided by Resend.

---

## ❓ COMMON QUESTIONS

### Q: Do I need to verify a domain?
**A:** No! Sandbox mode works fine for testing and collecting leads. You'll get all submissions, you just won't send confirmation emails to users.

### Q: How much does it cost?
**A:** FREE! Resend free tier includes:
- 100 emails per day
- 3,000 emails per month
- Unlimited domains
- No credit card required

### Q: What if I don't own supergrc.com?
**A:** Use any domain you own. The email address doesn't have to match your website domain. You could use:
- `demo@yourdomain.com`
- `contact@yourdomain.com`
- Any domain you control

### Q: How long does DNS verification take?
**A:** Usually 5-30 minutes, but can take up to 48 hours in rare cases.

### Q: Can I test sandbox mode now?
**A:** Yes! Just submit the form. You'll receive an email at `koroldm@supergrc.com` with all the user details.

### Q: What happens after I verify?
**A:** Change the "from" address, disable sandbox mode, and you can send to anyone!

---

## ✅ VERIFICATION CHECKLIST

### For Sandbox Mode (Current):
- [x] RESEND_API_KEY added to Supabase
- [x] ADMIN_EMAIL set to koroldm@supergrc.com
- [x] Form submissions work
- [x] Admin receives email notifications
- [x] Database saves all submissions
- [x] Ready to collect leads!

### For Production Mode (After Domain Verification):
- [ ] Add domain in Resend dashboard
- [ ] Add DNS records (SPF, DKIM, DMARC)
- [ ] Wait for verification
- [ ] Update "from" address in code
- [ ] Set RESEND_SANDBOX_MODE=false
- [ ] Test with different email addresses
- [ ] Both user and admin receive emails

---

## 🎯 RECOMMENDED APPROACH

### For Now (Testing/Development):
**Keep sandbox mode** - you're already receiving notifications!

### For Production (When Ready):
**Verify domain** - provides full email functionality

---

## 📞 TROUBLESHOOTING

### "403 Forbidden" Error
**Cause:** Sandbox mode limitation  
**Fix:** This is expected! The system handles it gracefully. You still get notified.

### DNS Records Not Verifying
**Solutions:**
1. Wait 30 minutes and try again
2. Check records are exactly as Resend specifies
3. Remove any existing SPF/DKIM records first
4. Use @ for root domain (or leave Name blank)

### Emails Going to Spam
**Solutions:**
1. Verify all 3 DNS records (SPF, DKIM, DMARC)
2. Use a verified domain
3. Add your IP to SPF record if needed
4. Check Resend deliverability dashboard

---

## 🚀 YOU'RE ALL SET!

Your demo form is working perfectly in **sandbox mode**:
- ✅ Collecting submissions
- ✅ Saving to database  
- ✅ Sending you notifications
- ✅ Ready for production

When you're ready for full email functionality, just follow the domain verification steps above!

---

**Resend Dashboard:** https://resend.com  
**Resend Domains:** https://resend.com/domains  
**Resend Docs:** https://resend.com/docs/send-with-nodejs
