# 🚀 VERCEL DEPLOYMENT INSTRUCTIONS

## ✅ PREPARED FILES

I've created all the necessary configuration files for Vercel deployment:

- ✅ `package.json` - Dependencies and build scripts
- ✅ `vite.config.ts` - Vite bundler configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `main.tsx` - React entry point
- ✅ `vercel.json` - Vercel-specific configuration
- ✅ `.gitignore` - Git ignore rules

---

## 🎯 DEPLOYMENT OPTIONS

### **OPTION A: Deploy via GitHub** (RECOMMENDED)

This is the professional approach with automatic deployments.

#### **Step 1: Create GitHub Repository**

1. Go to: https://github.com
2. Click **"Sign up"** (if you don't have an account) or **"Sign in"**
3. Click the **"+"** icon (top-right) → **"New repository"**
4. Fill in:
   - **Repository name:** `supergrc`
   - **Description:** Super GRC - Risk Management Platform
   - **Visibility:** Private (recommended)
   - **DON'T** check "Initialize this repository with a README"
5. Click **"Create repository"**

#### **Step 2: Get Your Code from Figma Make**

Since you're working in Figma Make, you need to download all the files:

**Method A: If Figma Make has a "Download All Files" or "Export Project" button:**
- Look in: File menu, Settings, or Publish panel
- Download as ZIP
- Unzip to a folder on your computer

**Method B: If no export button:**
- You'll need to manually copy each file from Figma Make
- I can provide you with a complete file list to download

#### **Step 3: Push Code to GitHub**

Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
# Navigate to your project folder
cd /path/to/supergrc-code

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Super GRC platform"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/supergrc.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If you need GitHub credentials:**
- GitHub may ask for authentication
- Use a Personal Access Token (not password)
- Generate at: https://github.com/settings/tokens

#### **Step 4: Connect to Vercel**

1. Go to: https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Click **"Import Project"**
6. Select your `supergrc` repository
7. Vercel will auto-detect Vite configuration
8. Click **"Deploy"**

**Wait 2-3 minutes** for the first deployment.

#### **Step 5: Add Environment Variables**

After deployment, you need to add your Supabase keys:

1. In Vercel dashboard → Your project → **Settings** → **Environment Variables**
2. Add these variables (get values from Figma Make):

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_DB_URL=your-db-url
RESEND_API_KEY=your-resend-key
RESEND_SANDBOX_MODE=false
```

3. Click **"Save"**
4. Go to **Deployments** → Click **"..."** → **"Redeploy"**

---

### **OPTION B: Deploy Manually via Vercel CLI**

If you prefer command-line:

#### **Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

#### **Step 2: Login**

```bash
vercel login
```

Enter your email and verify.

#### **Step 3: Deploy**

```bash
cd /path/to/supergrc-code
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No**
- Project name? **supergrc**
- In which directory? **./**
- Override settings? **No**

#### **Step 4: Production Deploy**

```bash
vercel --prod
```

#### **Step 5: Add Environment Variables**

```bash
vercel env add SUPABASE_URL production
vercel env add SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add SUPABASE_DB_URL production
vercel env add RESEND_API_KEY production
vercel env add RESEND_SANDBOX_MODE production
```

---

## 🌐 CONNECT YOUR DOMAIN (supergrc.com)

After successful deployment:

### **Step 1: Add Domain in Vercel**

1. In Vercel dashboard → Your project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `supergrc.com`
4. Click **"Add"**
5. Also add: `www.supergrc.com`
6. Click **"Add"**

### **Step 2: Get DNS Records from Vercel**

Vercel will show you the DNS records you need to add:

**For apex domain (supergrc.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For www subdomain (www.supergrc.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### **Step 3: Update DNS in Squarespace**

1. Log in to **Squarespace**
2. Go to **Settings** → **Domains**
3. Click on **supergrc.com**
4. Click **"DNS Settings"** or **"Advanced DNS"**
5. **IMPORTANT: Delete existing A and CNAME records** for @ and www
6. **Add new records** from Vercel:
   
   **A Record:**
   - Type: A
   - Host: @
   - Points To: 76.76.21.21
   - TTL: 3600 (or 1 hour)

   **CNAME Record:**
   - Type: CNAME
   - Host: www
   - Points To: cname.vercel-dns.com
   - TTL: 3600 (or 1 hour)

7. **Save** changes
8. **Wait 1-24 hours** for DNS propagation (usually 1-2 hours)

### **Step 4: Verify Domain**

After DNS propagates:

1. Visit: https://www.supergrc.com
2. Should show your site (hosted on Vercel)
3. Check HTTPS is working (automatic with Vercel)
4. **Right-click** → **View Page Source**
5. Search for `robots` (Ctrl+F)
6. Should see: `<meta name="robots" content="index, follow">` ✅
7. Should NOT see: `<meta name="robots" content="noindex">` ❌

---

## 🔍 VERIFY INDEXING IN GOOGLE

### **Step 1: Test Live URL**

1. Go to: https://search.google.com/search-console
2. Select your property: **supergrc.com**
3. Click **"URL Inspection"** (top)
4. Enter: `https://www.supergrc.com`
5. Click **"Test Live URL"**
6. Should show: **"Indexing allowed? YES"** ✅

### **Step 2: Request Indexing**

1. Click **"Request Indexing"**
2. Wait for confirmation (1-2 minutes)
3. Click **"OK"**

### **Step 3: Monitor**

- Google will index within 24-48 hours
- Check **Coverage** report in Search Console
- Your pages should start appearing in: **Indexed pages**

---

## 📊 WHAT YOU'LL GET WITH VERCEL

- ✅ **No more noindex** - Full control over meta tags
- ✅ **Automatic HTTPS** - Free SSL certificate
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Automatic deployments** - Push to GitHub = auto-deploy
- ✅ **Preview deployments** - Test before going live
- ✅ **Analytics** - Built-in traffic analytics
- ✅ **Zero configuration** - Works out of the box

---

## 🆘 SUPABASE INTEGRATION

### **IMPORTANT: Your Supabase Backend Stays the Same!**

- ✅ Edge Functions remain at Supabase
- ✅ Database stays at Supabase
- ✅ Auth stays at Supabase
- ✅ Storage stays at Supabase

### **What Changes:**

- Only your **frontend** moves to Vercel
- API calls to Supabase continue working
- Just add environment variables in Vercel dashboard

### **Where to Find Your Supabase Keys:**

If you need them, they should be in Figma Make's environment variables or settings.

You can also find them in Supabase dashboard:
1. Go to: https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - Project URL (SUPABASE_URL)
   - anon/public key (SUPABASE_ANON_KEY)
   - service_role key (SUPABASE_SERVICE_ROLE_KEY)

---

## 🎯 NEXT STEPS

**Tell me which option you'd like to pursue:**

1. **Option A: GitHub + Vercel** (recommended)
   - I'll guide you through each step
   - Best for long-term management

2. **Option B: Vercel CLI** (faster)
   - Direct deployment from terminal
   - Good if you're comfortable with command line

3. **Need help exporting from Figma Make?**
   - I'll provide a complete file list
   - You can manually download each file

**What would you like to do next?** 🚀
