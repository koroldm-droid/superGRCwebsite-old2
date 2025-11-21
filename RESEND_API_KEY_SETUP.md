# 🔑 How to Fix "API key is invalid" Error

## The Problem
You're seeing this error: **"API key is invalid"**

This means your RESEND_API_KEY is either:
1. Not set correctly
2. Not a valid Resend API key
3. Missing or incomplete

---

## ✅ SOLUTION: Get a Valid Resend API Key

### Step 1: Create a Resend Account (2 minutes)

1. Go to **https://resend.com**
2. Click **"Sign Up"**
3. Enter your email address
4. Verify your email (check inbox)
5. Complete registration

**Important:** It's FREE - no credit card required!

---

### Step 2: Create an API Key (1 minute)

1. After logging in, you'll see the Resend Dashboard
2. Click **"API Keys"** in the left sidebar
3. Click the **"Create API Key"** button
4. Fill in the form:
   - **Name:** `Super GRC Production`
   - **Permission:** `Sending access` (default)
   - **Domain:** Leave as `All Domains` (or select specific domain)
5. Click **"Create"**

---

### Step 3: Copy Your API Key

**CRITICAL:** After clicking Create, you'll see your API key **ONE TIME ONLY**.

The key will look like this:
```
re_abc123XYZ456_RandomCharactersHere789
```

**Key characteristics:**
✅ Starts with `re_`  
✅ Contains letters, numbers, and underscores  
✅ Usually 30-50 characters long  

**Copy this entire key!** You won't be able to see it again.

---

### Step 4: Add to Supabase (1 minute)

#### Option A: Via Supabase Dashboard (Recommended)

1. Go to your **Supabase Dashboard**: https://supabase.com/dashboard
2. Select your project: `stceirckhmixmmhuhswu`
3. Click **Settings** (⚙️ icon, bottom left)
4. Click **Edge Functions** in the left submenu
5. Find the **"Secrets"** or **"Environment Variables"** section
6. Look for **RESEND_API_KEY** (it should already exist)
7. **Click to edit** the value
8. **Paste your Resend API key** (the entire thing, starting with `re_`)
9. Click **Save**

#### Option B: Check if it's already there

If you already added it, verify:
1. Go to Supabase → Settings → Edge Functions → Secrets
2. Find **RESEND_API_KEY**
3. Check if the value is there (you'll see `***` masking it)
4. If it looks wrong, delete it and add a new one

---

### Step 5: Restart Edge Functions (If Needed)

Some Supabase versions require you to restart after changing environment variables:

1. Go to **Edge Functions** in Supabase Dashboard
2. Find your function: `make-server-101a5808`
3. Look for **"Redeploy"** or **"Restart"** button
4. Click it

**Or just wait 30 seconds** - changes usually apply automatically.

---

### Step 6: Test! (30 seconds)

1. Go to your Super GRC website
2. Fill out the demo form with **your real email**
3. Click Submit
4. **Check your email inbox** (within 10 seconds)

**Success indicators:**
✅ Form shows green success message  
✅ You receive confirmation email  
✅ Admin receives notification email  
✅ No errors in browser console  

---

## 🔍 Verify Your API Key Format

Your Resend API key should look like this:

```
re_AbCdEfGh123456_IjKlMnOp789012QrStUv
```

**Valid format checklist:**
- [x] Starts with `re_` 
- [x] Contains only letters, numbers, underscores
- [x] No spaces
- [x] No quotes
- [x] No special characters (except underscore)
- [x] Length: ~30-50 characters

---

## ❌ Common Mistakes

### Mistake 1: Including quotes
**Wrong:** `"re_abc123..."`  
**Right:** `re_abc123...`

### Mistake 2: Missing characters
**Wrong:** `re_abc123...` (copied only part of it)  
**Right:** Copy the ENTIRE key

### Mistake 3: Extra spaces
**Wrong:** `re_abc123... ` (space at end)  
**Right:** `re_abc123...` (no spaces)

### Mistake 4: Wrong environment variable name
**Wrong:** `RESEND_KEY` or `RESEND_API`  
**Right:** `RESEND_API_KEY` (exact name)

### Mistake 5: Using test mode key
Some services have test vs production keys. Resend doesn't - all keys work for sending.

---

## 🧪 How to Test if Your Key Works

### Quick Test in Browser:

Visit this URL to check your server logs:
```
https://stceirckhmixmmhuhswu.supabase.co/functions/v1/make-server-101a5808/health
```

Should return: `{"status":"ok"}`

### Then submit a demo form and check logs:

1. Supabase Dashboard → Edge Functions → Logs
2. Look for these messages:

**If API key is wrong:**
```
❌ Resend API error: { statusCode: 401, name: "validation_error" }
❌ Failed to send confirmation email to user: Error: Invalid Resend API key
```

**If API key is correct:**
```
✅ Confirmation email sent to user@email.com
✅ Admin notification sent to admin@supergrc.com
```

---

## 📞 Still Having Issues?

### Double-check these:

1. **Is RESEND_API_KEY set?**
   - Supabase → Settings → Edge Functions → Secrets
   - Should see: `RESEND_API_KEY` with value masked as `***`

2. **Does your key start with `re_`?**
   - If not, it's not a valid Resend API key
   - Go back to Resend and create a new one

3. **Did you copy the entire key?**
   - Keys are usually 30-50 characters
   - Copy from `re_` all the way to the end

4. **Did you save it in Supabase?**
   - Make sure you clicked "Save" or "Update"
   - Give it 30 seconds to apply

5. **Did you restart Edge Functions?**
   - Some changes need a restart
   - Redeploy the function or wait a minute

---

## 🎯 What Should Happen After Fixing

Once you have a valid API key set:

1. **User submits form** → Form saves to database
2. **User gets email** → Beautiful confirmation email (within 10 seconds)
3. **Admin gets email** → Notification with all details (within 10 seconds)
4. **No errors in logs** → Everything runs smoothly

---

## 📧 How to Verify Emails Were Sent

### In Resend Dashboard:
1. Go to https://resend.com/emails
2. You'll see a list of all sent emails
3. Check delivery status, timestamps, recipients
4. See opens, clicks, bounces

### In Your Email:
1. **Check inbox** for confirmation email
2. **Check spam folder** if not in inbox
3. Subject line: `Thank you for your interest in Super GRC!`
4. From: `Super GRC <onboarding@resend.dev>`

---

## ✅ Success Checklist

Once everything is working, you should have:

- [x] Resend account created
- [x] Valid API key generated (starts with `re_`)
- [x] API key added to Supabase RESEND_API_KEY
- [x] Edge Functions restarted (if needed)
- [x] Test form submission successful
- [x] User confirmation email received
- [x] Admin notification email received
- [x] No errors in server logs
- [x] Emails appearing in Resend dashboard

---

## 🚀 You're All Set!

Once you complete these steps, your Super GRC demo form will:
- ✅ Save all submissions to database
- ✅ Send beautiful confirmation emails to users
- ✅ Send detailed notifications to you
- ✅ Work reliably for all future submissions

---

**Need the actual Resend website?**
👉 https://resend.com

**Need your Supabase dashboard?**
👉 https://supabase.com/dashboard

**Questions?** Check the server logs in Supabase for detailed error messages.
