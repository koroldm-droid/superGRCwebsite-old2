# 🚨 HOW TO ENABLE INDEXING IN FIGMA MAKE

## ✅ **CONFIRMED PROBLEM:**

Your `<head>` section contains:
```html
<meta id="meta-yw3oin" name="robots" content="noindex">
```

**This is injected by Figma Make** and is blocking Google from indexing your site at www.supergrc.com.

---

## 🔍 **WHERE TO FIND THE INDEXING SETTING:**

### **Option 1: In the Publish Panel**

1. **Click** the **"Publish"** button (top-right corner of Figma Make)
2. **Look for a settings icon ⚙️** or **"Settings"** link in the publish panel
3. **Expand "Advanced Settings"** or **"SEO Settings"** if available
4. **Look for:**
   - ✅ "Allow search engine indexing" (CHECK this)
   - ✅ "Make site public" (CHECK this)
   - ❌ "Block search engines" (UNCHECK this)
   - ✅ "Production mode" (SELECT this, not "Preview")

### **Option 2: In Project Settings**

1. **Click** the **menu icon** (three dots ⋯) in Figma Make
2. **Select** "Project Settings" or "Site Settings"
3. **Look for "SEO" tab** or **"Visibility" section**
4. **Find the indexing toggle** and enable it

### **Option 3: In the Top Menu Bar**

1. **Look for a "Settings"** menu in the top navigation
2. **Click** "SEO Settings" or "Publishing Settings"
3. **Enable** "Allow search engines to index this site"

### **Option 4: In Domain Settings**

1. **Click** where you configured www.supergrc.com domain
2. **Look for "Domain Settings"** or **"Custom Domain Settings"**
3. **Check for** "Search Engine Visibility" toggle
4. **Make sure it's enabled**

---

## 📸 **WHAT THE SETTING MIGHT LOOK LIKE:**

### **Example 1: Toggle Switch**
```
🔘 Allow search engine indexing
   ↑ (Switch this ON)
```

### **Example 2: Checkbox**
```
☐ Block search engines from indexing this site
   ↑ (Make sure this is UNCHECKED)
```

### **Example 3: Dropdown**
```
Site Visibility: [Private ▼]
                  ↑ Change to "Public"
```

### **Example 4: Radio Buttons**
```
○ Preview (not indexed)
● Production (indexed by search engines)  ← Select this
```

---

## 🎯 **STEP-BY-STEP INSTRUCTIONS:**

### **STEP 1: Find the Setting**
1. Open Figma Make
2. Go to your Super GRC project
3. **Systematically check:**
   - Publish panel
   - Project settings (⚙️ icon)
   - Top menu bar
   - Domain/deployment settings

4. **Take screenshots** of every settings panel you find
5. **Send them to me** if you can't find the indexing option

### **STEP 2: Enable Indexing**
Once you find it:
1. ✅ **Enable** "Allow search engine indexing"
2. ✅ **Set to** "Production" mode
3. ✅ **Set to** "Public" visibility
4. ✅ **Save** the changes

### **STEP 3: Re-Publish**
1. Click **"Publish"** or **"Deploy"**
2. Wait **5 minutes** for changes to go live
3. **Clear your browser cache** (Ctrl+Shift+Delete)

### **STEP 4: Verify the Fix**
1. Go to https://www.supergrc.com
2. **Right-click** → **"View Page Source"**
3. Search for `robots` (Ctrl+F)
4. **You should see:**
   ```html
   <meta name="robots" content="index, follow">
   ```
5. **You should NOT see:**
   ```html
   <meta name="robots" content="noindex">  ❌
   ```

### **STEP 5: Test in Google**
1. Go to: https://search.google.com/search-console
2. **URL Inspection** → Enter: `https://www.supergrc.com`
3. Click **"Test Live URL"**
4. **Should say:** "Indexing allowed? YES" ✅

### **STEP 6: Request Indexing**
1. Click **"Request Indexing"**
2. Wait for confirmation
3. **Done!** Google will index within 24-48 hours 🎉

---

## ⚠️ **IF YOU CAN'T FIND THE SETTING:**

### **Possibility 1: Figma Make Doesn't Offer This Feature**

If Figma Make doesn't have a way to enable indexing for published sites, you have two options:

**Option A: Contact Figma Support**
- Ask: "How do I enable search engine indexing for my published site at www.supergrc.com?"
- Mention: "Google Search Console shows `noindex` in the meta tags"
- Request: "I need to remove the noindex meta tag"

**Option B: Export & Deploy Elsewhere (RECOMMENDED)**
- Export your code from Figma Make
- Deploy to Vercel, Netlify, or another hosting platform
- These platforms give you full control over meta tags
- See detailed instructions below

---

## 🚀 **PLAN B: EXPORT & DEPLOY TO VERCEL**

### **Why This is Better:**
1. ✅ **Full control** over all settings
2. ✅ **No noindex** injection
3. ✅ **Better performance** (edge network)
4. ✅ **Free tier** available
5. ✅ **Easy domain connection**
6. ✅ **Automatic HTTPS**
7. ✅ **Built-in CI/CD**

### **How to Export from Figma Make:**

**Step 1: Find the Export Option**
Look for:
- **"Download Code"** button
- **"Export Project"** option
- **"Download ZIP"** link
- Usually in: Publish panel, File menu, or Settings

**Step 2: Download**
- Click the export/download button
- Save the ZIP file to your computer
- Unzip it to a folder (e.g., `supergrc-code`)

**Step 3: Verify the Files**
The folder should contain:
- `index.html` (I created this with proper meta tags)
- `App.tsx` (your main React component)
- `/components/` folder
- `/public/` folder (with sitemap.xml, robots.txt, etc.)
- `package.json`
- Other React/Vite files

---

### **How to Deploy to Vercel:**

#### **METHOD 1: Vercel Web UI (Easiest)**

**1. Create Vercel Account:**
- Go to: https://vercel.com
- Click **"Sign Up"**
- Use GitHub, GitLab, or Email

**2. Deploy via Web:**
- Click **"New Project"**
- Click **"Import Third-Party Git Repository"** or **"Deploy from Local"**
- **Drag and drop** your `supergrc-code` folder
- OR click **"Continue with GitHub"** and push code there first

**3. Configure:**
- **Project Name:** supergrc
- **Framework Preset:** Vite (or React if Vite not available)
- **Root Directory:** ./
- **Build Command:** `npm run build` or `vite build`
- **Output Directory:** `dist` or `build`
- Click **"Deploy"**

**4. Wait for Deploy:**
- Takes 1-2 minutes
- You'll get a URL like: `https://supergrc.vercel.app`
- **Test it** - make sure site works

**5. Connect Custom Domain:**
- In Vercel dashboard → **Settings** → **Domains**
- Click **"Add Domain"**
- Enter: `supergrc.com`
- Click **"Add"**
- Enter: `www.supergrc.com`
- Click **"Add"**

**6. Update DNS in Squarespace:**

Vercel will show you DNS records to add:

**For apex domain (supergrc.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain (www.supergrc.com):**
```
Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**In Squarespace:**
1. Log in to Squarespace
2. Go to **Settings** → **Domains** → **supergrc.com**
3. Click **"DNS Settings"** or **"Advanced DNS"**
4. **Delete existing A and CNAME records** for @ and www
5. **Add the new records** from Vercel
6. **Save**
7. **Wait 1-24 hours** for DNS propagation

**7. Verify:**
- After DNS propagates, visit https://www.supergrc.com
- Should show your site (now hosted on Vercel)
- View Page Source → Should see proper meta tags (no noindex!)

---

#### **METHOD 2: Vercel CLI (For Developers)**

**1. Install Vercel CLI:**
```bash
npm install -g vercel
```

**2. Navigate to Project:**
```bash
cd /path/to/supergrc-code
```

**3. Login:**
```bash
vercel login
```
- Enter your email
- Click the link in the email to verify

**4. Deploy:**
```bash
vercel
```

Follow the prompts:
```
? Set up and deploy? Yes
? Which scope? (Your account)
? Link to existing project? No
? What's your project's name? supergrc
? In which directory is your code located? ./
? Want to override settings? No
```

**5. Production Deploy:**
```bash
vercel --prod
```

**6. Add Domain:**
```bash
vercel domains add supergrc.com
vercel domains add www.supergrc.com
```

**7. Update DNS** (same as Method 1 above)

---

### **How to Deploy to Netlify (Alternative):**

**1. Create Account:**
- Go to: https://netlify.com
- Sign up with GitHub or Email

**2. Deploy via Web:**
- Click **"Add new site"** → **"Deploy manually"**
- **Drag and drop** your `supergrc-code` folder
- OR connect to GitHub repository

**3. Configure:**
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Click **"Deploy"**

**4. Add Custom Domain:**
- Go to **Domain settings**
- Click **"Add custom domain"**
- Enter: `supergrc.com`
- Follow DNS instructions (similar to Vercel)

---

## 📋 **DECISION TREE - WHAT TO DO:**

```
Can you find indexing toggle in Figma Make?
│
├─ YES → Enable it → Re-publish → DONE! ✅
│
└─ NO → Two options:
    │
    ├─ Contact Figma Support → Ask about indexing
    │
    └─ Export & Deploy to Vercel/Netlify (RECOMMENDED)
        │
        └─ Takes 30 minutes → Full control ✅
```

---

## ✅ **WHAT TO TELL ME:**

**Please respond with:**

1. **Did you find an indexing/SEO setting in Figma Make?**
   - YES → Where was it? (Screenshot if possible)
   - NO → I couldn't find it anywhere

2. **If YES, what does the setting say?**
   - Copy the exact text
   - Screenshot if possible
   - Tell me what options are available

3. **Are you willing to export and deploy to Vercel?**
   - YES → I'll walk you through it step-by-step
   - NO → I'll help you contact Figma support
   - MAYBE → I'll explain more about why it's better

4. **Do you have access to Squarespace DNS settings?**
   - YES → Good, we'll need that to update DNS
   - NO → We'll figure out how to get access

---

## 🎯 **EXPECTED OUTCOMES:**

### **Outcome 1: Found Setting in Figma Make** ✅
- Enable indexing toggle
- Re-publish
- **Timeline:** 5 minutes
- **Result:** Site indexable immediately

### **Outcome 2: Export to Vercel** 🚀
- Export code from Figma Make
- Deploy to Vercel
- Connect domain
- **Timeline:** 30-60 minutes + DNS propagation
- **Result:** Full control, better performance, indexable

### **Outcome 3: Contact Figma Support** 📞
- Ask about indexing
- **Timeline:** 1-3 days for response
- **Result:** Depends on their answer

---

## 🔗 **USEFUL LINKS:**

- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Google Search Console:** https://search.google.com/search-console

---

## 💬 **NEXT STEP:**

**Please do ONE of these:**

1. ✅ **Search for indexing setting** in Figma Make (15 minutes)
   - Check Publish panel
   - Check Settings
   - Check every menu option
   - Take screenshots of what you find

2. ✅ **Export and send me confirmation** (if you want to deploy to Vercel)
   - I'll guide you through every step
   - This is the BEST long-term solution

3. ✅ **Ask Figma Support** (if you prefer)
   - I can help you draft the email

**Tell me which option you want to pursue!** 🚀
