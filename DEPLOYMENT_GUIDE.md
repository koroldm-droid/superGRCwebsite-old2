# 🚀 Super GRC - Netlify Deployment Guide

This guide will walk you through deploying your Super GRC website to Netlify step-by-step.

## ✅ Pre-Deployment Checklist

Your project is ready to deploy! Here's what's been configured:

- ✅ `netlify.toml` - Configuration file for build settings and redirects
- ✅ All components using Pragmatica/Pragmatica Bold fonts
- ✅ Brand colors (Electric Lime, Soft Cyan) applied throughout
- ✅ Demo form with contact functionality
- ✅ Responsive design for mobile and desktop
- ✅ 12 compliance framework badges
- ✅ 24+ feature showcase with filtering

## 📦 Step 1: Download Your Project from Figma Make

1. In Figma Make, click the **download/export button**
2. Save the entire project folder to your computer
3. Unzip if necessary

## 🌐 Step 2: Deploy to Netlify (Choose One Method)

### Method A: Drag & Drop (Fastest - 2 minutes)

**Perfect for first-time deployment or if you don't use Git**

1. **Go to https://app.netlify.com/**
2. **Sign up for free** (use GitHub, GitLab, Bitbucket, or email)
3. **Click "Add new site" → "Deploy manually"**
4. **Drag your entire project folder** onto the upload area
5. **Wait 30-60 seconds** for deployment
6. **Your site is live!** You'll get a URL like `random-name-123.netlify.app`

**Pros:**
- Extremely fast and simple
- No technical knowledge needed
- Works immediately

**Cons:**
- Manual re-upload needed for updates
- No version history

---

### Method B: GitHub Integration (Best for Ongoing Updates)

**Perfect if you plan to make updates or work with a team**

#### Step 2B.1: Set Up Git & GitHub

1. **Create a GitHub account** at https://github.com if you don't have one

2. **Install Git** on your computer:
   - **Windows**: Download from https://git-scm.com/download/win
   - **Mac**: Open Terminal and type `git --version` (it will install automatically)
   - **Linux**: `sudo apt-get install git`

3. **Create a new repository on GitHub**:
   - Click the **"+"** icon → **"New repository"**
   - Name it: `supergrc-website`
   - Keep it **Public** or **Private** (your choice)
   - **Don't** add README, .gitignore, or license
   - Click **"Create repository"**

#### Step 2B.2: Push Your Code to GitHub

Open **Terminal** (Mac/Linux) or **Command Prompt** (Windows), navigate to your project folder:

```bash
# Navigate to your project folder
cd /path/to/your/supergrc-project

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Super GRC website"

# Set main branch
git branch -M main

# Add GitHub repository (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/supergrc-website.git

# Push to GitHub
git push -u origin main
```

#### Step 2B.3: Connect Netlify to GitHub

1. **Go to https://app.netlify.com/**
2. **Sign up/Login** (use your GitHub account for easy connection)
3. **Click "Add new site" → "Import an existing project"**
4. **Choose "Deploy with GitHub"**
5. **Authorize Netlify** to access your GitHub account
6. **Select your repository** (`supergrc-website`)
7. **Build settings** (should auto-fill from `netlify.toml`):
   - Build command: `echo 'Build managed by Figma Make'`
   - Publish directory: `dist`
8. **Click "Deploy site"**
9. **Wait 1-2 minutes** for the first deployment

**Your site is now live!**

#### Benefits of GitHub Integration:

- **Automatic deployments** - Push to GitHub, auto-updates on Netlify
- **Version history** - Rollback to any previous version
- **Preview deployments** - Test changes before going live
- **Team collaboration** - Multiple people can work on the site

---

### Method C: Netlify CLI (For Developers)

**Perfect if you're comfortable with command line**

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Deploy to production
netlify deploy --prod

# Follow the prompts to select/create a site
```

---

## 🌍 Step 3: Custom Domain Setup

After deployment, you'll have a URL like `random-name-123.netlify.app`. To use your own domain:

### If You Have a Domain (e.g., supergrc.com):

1. **In Netlify**, go to **Site settings** → **Domain management**
2. **Click "Add custom domain"**
3. **Enter your domain**: `supergrc.com`
4. **Click "Verify"**
5. **Update DNS settings** (Netlify will show you exactly what to do):
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Netlify provides
   - Wait 24-48 hours for DNS propagation

### If You Don't Have a Domain Yet:

1. **Buy a domain** from:
   - Namecheap (recommended, ~$10-15/year)
   - Google Domains
   - GoDaddy
   - Hover
2. **Follow the steps above** to connect it to Netlify

### Free Netlify Subdomain:

You can also customize your free Netlify subdomain:

1. **Site settings** → **Domain management**
2. **Click "Options" → "Edit site name"**
3. **Change** `random-name-123` to `supergrc` → `supergrc.netlify.app`

---

## 🔒 Step 4: Enable HTTPS (SSL Certificate)

**Good news: This is automatic!**

Netlify provides **free SSL certificates** for all sites, including custom domains. Your site will automatically be secured with HTTPS.

---

## 📧 Step 5: Set Up Form Submissions

Your demo form is ready, but to receive submissions:

### Option 1: Netlify Forms (Built-in, Free for 100/month)

1. **Update the form** in `/components/DemoForm.tsx`:
   - Add `netlify` attribute to form tag
   - Add `data-netlify="true"`

2. **Example**:
```tsx
<form onSubmit={handleSubmit} netlify data-netlify="true" name="demo-request">
```

3. **View submissions** in Netlify dashboard → **Forms**

### Option 2: Connect to Email Service

Use services like:
- **FormSpree** (https://formspree.io)
- **Getform** (https://getform.io)
- **EmailJS** (https://www.emailjs.com)

Add their endpoint to your form's `action` attribute.

---

## 🔄 Step 6: Making Updates

### If Using Drag & Drop:

1. **Make changes** in Figma Make
2. **Download** the updated project
3. **Go to Netlify** → **Deploys** tab
4. **Drag and drop** the new folder
5. **New version goes live** in 30-60 seconds

### If Using GitHub:

1. **Make changes** in Figma Make
2. **Download** and replace local files
3. **Commit and push**:
```bash
git add .
git commit -m "Update features section"
git push
```
4. **Netlify auto-deploys** in 1-2 minutes

---

## 📊 Step 7: Monitor Your Site

### Netlify Dashboard Features:

- **Analytics** - Visitor stats (upgrade needed for detailed analytics)
- **Deploy log** - See all deployments and status
- **Functions** - Add serverless functions if needed
- **Forms** - View form submissions
- **Build settings** - Modify configuration

### Recommended Free Analytics:

- **Google Analytics** (https://analytics.google.com)
- **Plausible** (privacy-focused alternative)
- **Simple Analytics**

---

## ✅ Post-Deployment Checklist

After your site is live:

- [ ] Visit your live URL and test all pages
- [ ] Test the demo form submission
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify all images load correctly
- [ ] Test category filtering on Features page
- [ ] Check compliance badges in hero section
- [ ] Verify all "Request Demo" buttons link to form
- [ ] Test all three product tier "Learn More" buttons
- [ ] Check footer links

---

## 🆘 Troubleshooting

### Issue: "Page Not Found" on refresh

**Solution**: The `netlify.toml` file handles this. Make sure it's in your root directory.

### Issue: Images not loading

**Solution**: Check that all image imports are correct and images are in the project folder.

### Issue: Form not working

**Solution**: 
1. Add `netlify` and `data-netlify="true"` attributes to form
2. Or connect to a third-party form service

### Issue: Build failed

**Solution**: Check the deploy log in Netlify dashboard for specific error messages.

### Issue: Fonts not displaying

**Solution**: Ensure font files are included in the project and properly referenced in `/styles/globals.css`.

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com/
- **Netlify Community**: https://answers.netlify.com/
- **Netlify Support**: https://www.netlify.com/support/

---

## 🎉 Congratulations!

Your Super GRC website is now live on Netlify with:

- ✅ Fast global CDN
- ✅ Free HTTPS/SSL
- ✅ Automatic deployments (if using GitHub)
- ✅ 99.9% uptime
- ✅ Free hosting (100GB bandwidth/month on free tier)

**Your professional GRC platform is ready to attract customers!**

---

## 💰 Pricing Note

Netlify's **free tier includes**:
- Unlimited sites
- 100GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Custom domains
- Form submissions (100/month)

This is **more than enough** for most small-to-medium business websites. You can upgrade later if needed.
