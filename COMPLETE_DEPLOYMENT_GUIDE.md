# 🚀 Complete Deployment Guide - Super GRC

## I'm sorry for the confusion today. Here's everything you need in one place.

---

## 📦 PART 1: EXPORT FROM FIGMA MAKE TO YOUR MAC

### Step 1: Export from Figma Make

1. In Figma Make, click the **"Export"** button (top right)
2. Download the ZIP file to your Mac (likely goes to `~/Downloads`)
3. Unzip the file

### Step 2: Copy Files to Your Local Repository

```bash
# Navigate to your local repo
cd ~/Documents/supergrc

# Delete the problematic files first
rm -f vite.config.js

# Copy all files from the extracted Figma Make folder
# Replace /path/to/extracted/folder with actual path (probably ~/Downloads/supergrc)
cp -R /path/to/extracted/folder/* ~/Documents/supergrc/

# Or manually drag and drop all files from the extracted folder to ~/Documents/supergrc
# Choose "Replace" when prompted
```

### Step 3: Critical Fix - Edit vite.config.ts

```bash
# Open vite.config.ts in your text editor
code ~/Documents/supergrc/vite.config.ts
```

**Make sure it looks EXACTLY like this (no extra words at the top):**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
```

**❌ WRONG (if you see this, delete the first line):**
```typescript
typescript  // ← DELETE THIS LINE IF IT EXISTS!
import { defineConfig } from 'vite';
```

Save and close the file.

### Step 4: Push to GitHub

```bash
cd ~/Documents/supergrc

# Check what changed
git status

# Add all files
git add .

# Commit with message
git commit -m "Update from Figma Make - fix vite config and remove duplicates"

# Push to GitHub
git push origin main
```

**If you get "pull required" error:**

```bash
git pull origin main --rebase
git push origin main
```

### Step 5: Verify Vercel Auto-Deployment

After pushing to GitHub:
1. Vercel automatically detects the push
2. Starts building your site
3. Check build progress at: https://vercel.com/dashboard
4. Once complete, check: https://super-gr-cwebsite-vgsr.vercel.app/

---

## 🌐 PART 2: DOMAIN VERIFICATION IN VERCEL

### Step 1: Add Your Domain in Vercel

1. Go to: **https://vercel.com/dashboard**
2. Click on your project: **superGRCwebsite**
3. Click **"Settings"** tab at the top
4. Click **"Domains"** in the left sidebar
5. You'll see a section "Add a domain"
6. Type: **supergrc.com**
7. Click **"Add"**
8. Vercel will show you DNS configuration instructions

### Step 2: Add www Subdomain (Recommended)

1. Still in the Domains section
2. Click **"Add"** again
3. Type: **www.supergrc.com**
4. Click **"Add"**

### Step 3: Get Your DNS Records from Vercel

Vercel will show you something like this:

**For supergrc.com:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For www.supergrc.com:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## 🔧 PART 3: CONFIGURE DNS AT YOUR DOMAIN REGISTRAR

### Option A: If you're using GoDaddy

1. Go to: **https://dcc.godaddy.com/manage/supergrc.com/dns**
2. Log in if needed
3. Scroll to **DNS Records** section
4. Click **"Add"** or **"Add New Record"**

**Add A Record:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `1 Hour` (default)
- Click **Save**

**Add CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `1 Hour`
- Click **Save**

### Option B: If you're using Namecheap

1. Go to: **https://ap.www.namecheap.com/domains/list/**
2. Find **supergrc.com**, click **"Manage"**
3. Click **"Advanced DNS"** tab
4. Click **"Add New Record"**

**Add A Record:**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21`
- TTL: `Automatic`
- Click green checkmark

**Add CNAME Record:**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: `Automatic`
- Click green checkmark

### Option C: If you're using Cloudflare

1. Go to: **https://dash.cloudflare.com**
2. Click on **supergrc.com** domain
3. Click **"DNS"** in the left menu
4. Click **"Add record"**

**Add A Record:**
- Type: `A`
- Name: `@` (or leave empty, it means root)
- IPv4 address: `76.76.21.21`
- Proxy status: `DNS only` (gray cloud, NOT orange)
- TTL: `Auto`
- Click **Save**

**Add CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Target: `cname.vercel-dns.com`
- Proxy status: `DNS only` (gray cloud)
- TTL: `Auto`
- Click **Save**

### Option D: If you're using Another Registrar

Tell me which registrar you use and I'll add specific instructions.

Common ones:
- Google Domains (now Squarespace)
- Hover
- DreamHost
- Bluehost
- Network Solutions

---

## ⏱️ PART 4: WAIT FOR DNS PROPAGATION

### Timeline

- **Minimum**: 5-15 minutes
- **Average**: 30-60 minutes
- **Maximum**: 24-48 hours (rare)

### Check DNS Propagation Status

1. Go to: **https://dnschecker.org**
2. Enter: **supergrc.com**
3. Select: **A** (for A record)
4. Click **Search**
5. You should see `76.76.21.21` appearing green in multiple locations

Repeat for:
- **www.supergrc.com** (CNAME should show `cname.vercel-dns.com`)

### Vercel Verification

1. Go back to Vercel: **https://vercel.com/dashboard**
2. Go to your project → **Settings** → **Domains**
3. Wait for the domains to show **✅ Valid Configuration**
4. If it's been 1+ hour and still shows "Invalid", click **"Refresh"**

---

## 🎯 PART 5: SET PRIMARY DOMAIN IN VERCEL

Once the domains show ✅ Valid:

1. In Vercel → **Settings** → **Domains**
2. Find **supergrc.com** in the list
3. Click the **⋯** (three dots menu) on the right
4. Click **"Set as Primary"**
5. Click **"Set as Primary Domain"** to confirm

**What this does:**
- `super-gr-cwebsite-vgsr.vercel.app` → redirects to `supergrc.com`
- `www.supergrc.com` → redirects to `supergrc.com`
- All traffic goes to your custom domain

---

## 📋 PART 6: VERIFY EVERYTHING WORKS

### Test Your Website

```bash
# Open in browser
open https://supergrc.com
open https://www.supergrc.com
```

### Check These Things:

- ✅ Site loads with your custom domain
- ✅ HTTPS/SSL certificate is active (🔒 padlock icon)
- ✅ All images load correctly
- ✅ Navigation works
- ✅ Form submission works
- ✅ Mobile responsive design works

### Check SSL Certificate

Vercel automatically provisions SSL certificates. It takes 5-10 minutes after DNS verification.

1. Visit **https://supergrc.com**
2. Click the 🔒 padlock icon in browser
3. Click **"Certificate"**
4. Should show: Issued by **Let's Encrypt** or **Vercel**

---

## 🔄 ONGOING WORKFLOW: FIGMA MAKE → GIT → VERCEL

### Every Time You Make Changes in Figma Make:

**Step 1: Export from Figma Make**
```
Click "Export" → Download ZIP
```

**Step 2: Copy to Local Repo**
```bash
cd ~/Documents/supergrc
# Copy files from extracted ZIP
cp -R /path/to/extracted/folder/* .
```

**Step 3: Commit and Push**
```bash
git add .
git commit -m "Update: [describe what you changed]"
git push origin main
```

**Step 4: Vercel Auto-Deploys**
- Vercel detects the GitHub push
- Automatically builds and deploys
- Live at supergrc.com in 1-3 minutes

---

## 🚨 TROUBLESHOOTING

### Issue: "typescript is not defined" error in Vercel

**Solution:**
```bash
cd ~/Documents/supergrc
code vite.config.ts
# Delete any "typescript" text at the top of the file
# Save, then:
git add vite.config.ts
git commit -m "Fix: Remove typescript keyword"
git push origin main
```

### Issue: DNS not propagating

**Solution:**
1. Wait 1 hour
2. Check https://dnschecker.org
3. Verify DNS records in your registrar
4. Make sure A record value is EXACTLY: `76.76.21.21`
5. Make sure CNAME value is EXACTLY: `cname.vercel-dns.com`

### Issue: Git push rejected

**Solution:**
```bash
git pull origin main --rebase
# If conflicts, resolve them manually
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### Issue: Vercel build fails

**Solution:**
1. Go to Vercel dashboard
2. Click on failed deployment
3. Click "View Build Logs"
4. Read the error message
5. Fix the issue in your code
6. Push to GitHub again

### Issue: Site shows old version

**Solution:**
```bash
# Hard refresh in browser:
# Mac: Cmd + Shift + R
# Windows: Ctrl + Shift + R

# Or clear cache and reload
```

---

## 📞 NEED HELP?

### Tell me:
1. **What registrar are you using?** (GoDaddy, Namecheap, etc.)
2. **What error message do you see?** (screenshot helps)
3. **What step are you stuck on?**

### Useful Links:
- **Your Vercel Dashboard**: https://vercel.com/dashboard
- **Your GitHub Repo**: https://github.com/yourusername/superGRCwebsite
- **DNS Checker**: https://dnschecker.org
- **Your Live Site (after setup)**: https://supergrc.com

---

## ✅ SUCCESS CHECKLIST

- [ ] Exported files from Figma Make
- [ ] Copied files to ~/Documents/supergrc
- [ ] Fixed vite.config.ts (removed "typescript" keyword)
- [ ] Pushed to GitHub successfully
- [ ] Added supergrc.com domain in Vercel
- [ ] Added www.supergrc.com domain in Vercel
- [ ] Configured A record in DNS
- [ ] Configured CNAME record in DNS
- [ ] Waited for DNS propagation (30-60 min)
- [ ] Verified domains show ✅ in Vercel
- [ ] Set supergrc.com as primary domain
- [ ] SSL certificate active (https://)
- [ ] Website loads at https://supergrc.com

---

**I apologize again for the confusion today. This guide has everything you need. Take your time, follow each step, and you'll have supergrc.com live and working. Good luck! 🚀**
