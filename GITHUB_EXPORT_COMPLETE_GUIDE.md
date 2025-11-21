# 🚀 Complete GitHub Export Guide for Super GRC

## Overview
This guide will help you export all files from Figma Make to your GitHub repository at `https://github.com/koroldm-droid/superGRCwebsite`.

---

## 📦 What You Have

Your Figma Make project contains **100+ files** including:

### Core Files
- ✅ `App.tsx` - Main application component
- ✅ `main.tsx` - Application entry point
- ✅ `index.html` - HTML template
- ✅ `package.json` - Dependencies
- ✅ `vite.config.ts` - Build configuration
- ✅ `tsconfig.json` - TypeScript configuration

### Components (20+ files)
- Marketing components (Hero, Features, Products, About, Nav, Demo Form)
- Blog components (BlogList, BlogPost)
- Dashboard components
- UI library (80+ Shadcn components)
- Utility components (SEOHead, GoogleAnalytics, ImageWithFallback)

### Backend
- Supabase edge functions configured
- Email integration with Resend
- KV store for data persistence

### Documentation (35+ files)
- Complete deployment guides
- SEO optimization documentation
- Content strategy with 12-month calendar
- Email setup guides
- Verification checklists

### Assets & Config
- Brand fonts (Pragmatica)
- SVG icons and logos
- Favicon suite
- robots.txt, sitemap.xml
- SEO configuration

---

## 🎯 Export Methods

### Method 1: Figma Make Direct Download (EASIEST)

1. **Look for Export/Download in Figma Make:**
   - Check the main menu (☰)
   - Look for File → Export or Download
   - Check Settings → Project → Export
   - Look for a "Download ZIP" or "Export Project" button

2. **If you find it:**
   - Download the ZIP file
   - Extract to a local folder
   - Jump to "Push to GitHub" section below

### Method 2: Copy Files Manually from Figma Make

If no direct export is available:

1. **In Figma Make**, you can see your file tree on the left
2. **Create a local project folder** on your computer:
   ```bash
   mkdir supergrc-export
   cd supergrc-export
   ```

3. **Copy files from Figma Make one by one** OR use the script method below

### Method 3: Use Export Scripts (RECOMMENDED)

I've created two export scripts for you:

- **Mac/Linux**: `EXPORT_TO_GITHUB.sh`
- **Windows**: `EXPORT_TO_GITHUB.bat`

**If Figma Make allows script execution**, these will automate the entire process.

---

## 📤 Push to GitHub - Step by Step

### Prerequisites

1. **Install Git** (if not already installed):
   - **Mac**: `brew install git`
   - **Windows**: Download from https://git-scm.com/
   - **Linux**: `sudo apt-get install git`

2. **Configure Git** (first time only):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### Option A: Using the Export Script

**For Mac/Linux:**
```bash
# Navigate to your project folder
cd /path/to/supergrc-export

# Make script executable
chmod +x EXPORT_TO_GITHUB.sh

# Run the script
./EXPORT_TO_GITHUB.sh
```

**For Windows:**
```cmd
# Navigate to your project folder
cd C:\path\to\supergrc-export

# Run the script
EXPORT_TO_GITHUB.bat
```

The script will:
- ✅ Initialize Git repository
- ✅ Add GitHub remote
- ✅ Create .gitignore
- ✅ Add all files
- ✅ Create commit
- ✅ Push to GitHub

### Option B: Manual Git Commands

```bash
# Navigate to your project folder
cd /path/to/supergrc-export

# Initialize Git repository
git init
git branch -M main

# Add GitHub remote
git remote add origin https://github.com/koroldm-droid/superGRCwebsite.git

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
EOF

# Add all files
git add -A

# Create commit
git commit -m "Complete Super GRC website export from Figma Make"

# Push to GitHub (force push to overwrite existing repo)
git push -u origin main --force
```

---

## 🔍 Verify Your GitHub Repository

After pushing, verify at https://github.com/koroldm-droid/superGRCwebsite:

### Expected File Structure:
```
superGRCwebsite/
├── components/
│   ├── ui/           (80+ files)
│   ├── figma/
│   ├── MarketingHero.tsx
│   ├── MarketingFeatures.tsx
│   ├── DemoForm.tsx
│   └── ... (20+ more)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon files
├── supabase/
│   └── functions/
│       └── server/
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
├── package.json
├── vite.config.ts
└── 35+ .md documentation files
```

### Check for:
- ✅ All components are present
- ✅ Package.json has all dependencies
- ✅ Documentation files (.md) are included
- ✅ No sensitive data (.env files should NOT be there)

---

## 🚀 Next Step: Deploy to Vercel

Once your files are in GitHub:

### 1. Go to Vercel
https://vercel.com/new

### 2. Import GitHub Repository
- Click "Import Git Repository"
- Select: `koroldm-droid/superGRCwebsite`
- Framework Preset: **Vite** (should auto-detect)

### 3. Configure Project
- Root Directory: `./` (default)
- Build Command: `npm run build` (auto-detected)
- Output Directory: `dist` (auto-detected)

### 4. Add Environment Variables

Click "Environment Variables" and add:

```
SUPABASE_URL=https://stceirckhmixmmhuhswu.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0Y2VpcmNraG1peG1taHVoc3d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTU3ODYsImV4cCI6MjA3ODk3MTc4Nn0.pVki9xLI8ddAnHj15t-EfugdmPzhz2kkGVSVr3T79WY
SUPABASE_SERVICE_ROLE_KEY=[Your service role key]
RESEND_API_KEY=[Your Resend API key]
```

### 5. Deploy!
Click **"Deploy"** button

### 6. Add Custom Domain
After deployment:
- Go to Project Settings → Domains
- Add: `supergrc.com` and `www.supergrc.com`
- Update DNS records as instructed by Vercel

---

## 🆘 Troubleshooting

### Issue: "Permission denied" when pushing to GitHub

**Solution:**
```bash
# Use HTTPS with personal access token
git remote set-url origin https://YOUR_TOKEN@github.com/koroldm-droid/superGRCwebsite.git

# OR use SSH
git remote set-url origin git@github.com:koroldm-droid/superGRCwebsite.git
```

**Create Personal Access Token:**
1. Go to GitHub.com → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token with `repo` scope

### Issue: "Repository not empty" error

**Solution:**
```bash
# Force push to overwrite
git push -u origin main --force
```

### Issue: Large files causing push failure

**Solution:**
```bash
# Check file sizes
find . -type f -size +50M

# If found, add to .gitignore and remove from git
git rm --cached path/to/large/file
echo "path/to/large/file" >> .gitignore
git commit -m "Remove large files"
git push -u origin main --force
```

---

## ✅ Verification Checklist

After export and push:

- [ ] GitHub repository shows all files
- [ ] No .env or sensitive files in repo
- [ ] All components are present
- [ ] Package.json has correct dependencies
- [ ] Documentation files are included
- [ ] Can clone repository locally
- [ ] Ready to connect to Vercel

---

## 📞 Support

If you encounter issues:

1. **Check Git status**: `git status`
2. **Check remote**: `git remote -v`
3. **Check commit log**: `git log --oneline`
4. **Force push if needed**: `git push -u origin main --force`

---

## 🎉 Success!

Once completed, you'll have:
- ✅ Complete codebase in GitHub
- ✅ Version control for all changes
- ✅ Ready for Vercel deployment
- ✅ Automatic deployments on future commits
- ✅ Backup of all your work

**Your site will be live at supergrc.com through Vercel!**
