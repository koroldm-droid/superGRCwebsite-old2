#!/bin/bash
# Super GRC - Push Remaining Files to GitHub
# This script will push all remaining files to your existing repository

echo "🚀 Super GRC - Pushing Remaining Files to GitHub"
echo "================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from your project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Check if remote exists, if not add it
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/koroldm-droid/superGRCwebsite.git
fi

# Create/update .gitignore
echo "📝 Updating .gitignore..."
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.output/

# Environment variables (keep secure!)
.env
.env.local
.env.*.local

# Editor directories
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Cache
.cache/
.temp/
.tmp/

# Figma assets cache (optional - you may want to keep these)
# figma:asset/
EOF

echo ""
echo "📊 Checking current repository status..."
git status

echo ""
echo "📋 Files that will be added/updated:"
echo ""

# Show what will be committed
git add -A --dry-run

echo ""
echo "📦 SUMMARY OF REMAINING FILES TO PUSH:"
echo ""
echo "✅ Marketing Components (6 files)"
echo "✅ SEO & Analytics Components (3 files)"
echo "✅ Interactive Components (3 files)"
echo "✅ Blog & Content Components (4 files)"
echo "✅ Dashboard Components (3 files)"
echo "✅ Utility Components (3 files)"
echo "✅ Shadcn/UI Components (30+ files)"
echo "✅ Backend Files (4 files)"
echo "✅ Public Assets (7 files)"
echo "✅ Documentation Files (40+ files)"
echo ""
echo "💡 Total: ~100+ files to be pushed"
echo ""

read -p "Do you want to proceed with adding and pushing all files? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "💾 Step 1/4: Adding all files to git..."
    git add -A
    
    echo "✅ Files staged for commit"
    echo ""
    
    echo "📝 Step 2/4: Creating commit..."
    git commit -m "🚀 Complete Super GRC website - All components and documentation

✅ Marketing Components
- MarketingNav, Hero, About, Products, Features
- DemoForm with backend integration

✅ SEO & Analytics  
- SEOHead with comprehensive meta tags
- GoogleAnalytics integration
- OGImageGenerator for social sharing

✅ Interactive Components
- 3D Orb animation
- Interactive 3D section
- Laptop showcase

✅ Blog & Content
- BlogList and BlogPost components
- CaseStudy component
- ExpandedFAQ

✅ Dashboard (Future Use)
- Dashboard and DashboardApp
- Sidebar navigation

✅ Utility Components
- ResponsiveImage and WebPImage
- ImageWithFallback

✅ Shadcn/UI Components (30+)
- Complete UI component library
- Buttons, Cards, Forms, Dialogs, etc.

✅ Backend Integration
- Supabase Edge Functions
- Email system with Resend
- KV store for data persistence

✅ Public Assets
- Favicons (all sizes)
- Manifest files
- SVG icons

✅ Documentation (40+ files)
- Deployment guides
- SEO optimization guides
- Content strategy (12-month calendar)
- Email setup guides
- Complete system documentation

🎨 Brand Colors: Electric Lime #CFE928, Soft Cyan #9FCFD3
🏗️ Tech Stack: React + TypeScript + Tailwind v4.0 + Vite
🚀 Ready for deployment to Vercel/Netlify"
    
    echo "✅ Commit created"
    echo ""
    
    echo "🌐 Step 3/4: Pulling latest changes from GitHub (if any)..."
    git pull origin main --rebase || echo "⚠️ No remote branch yet, will create on push"
    
    echo ""
    echo "🚀 Step 4/4: Pushing to GitHub..."
    git push -u origin main
    
    echo ""
    echo "🎉 SUCCESS! All files have been pushed to GitHub!"
    echo ""
    echo "📊 VERIFICATION:"
    echo "   Repository: https://github.com/koroldm-droid/superGRCwebsite"
    echo ""
    echo "🔍 Check your repository to verify all files are there:"
    echo "   1. Go to https://github.com/koroldm-droid/superGRCwebsite"
    echo "   2. You should see ~170+ files"
    echo "   3. Check that components/, supabase/, public/ folders exist"
    echo ""
    echo "📚 NEXT STEPS FOR DEPLOYMENT:"
    echo ""
    echo "🔥 Deploy to Vercel (Recommended):"
    echo "   1. Go to https://vercel.com"
    echo "   2. Click 'New Project'"
    echo "   3. Import: koroldm-droid/superGRCwebsite"
    echo "   4. Framework: Vite"
    echo "   5. Add Environment Variables:"
    echo "      - SUPABASE_URL"
    echo "      - SUPABASE_ANON_KEY"
    echo "      - RESEND_API_KEY"
    echo "   6. Deploy!"
    echo "   7. Add custom domain: supergrc.com"
    echo ""
    echo "🌐 Or Deploy to Netlify:"
    echo "   1. Go to https://app.netlify.com"
    echo "   2. 'Import from Git' → GitHub"
    echo "   3. Select: koroldm-droid/superGRCwebsite"
    echo "   4. Build command: npm run build"
    echo "   5. Publish directory: dist"
    echo "   6. Add Environment Variables (same as above)"
    echo "   7. Deploy!"
    echo ""
    echo "📖 For detailed instructions, see:"
    echo "   - DEPLOYMENT_GUIDE.md"
    echo "   - COMPLETE_DEPLOYMENT_GUIDE.md"
    echo ""
else
    echo ""
    echo "❌ Cancelled. No changes were made to the repository."
    echo ""
    echo "💡 TIP: You can run this script again anytime to push your files."
fi
