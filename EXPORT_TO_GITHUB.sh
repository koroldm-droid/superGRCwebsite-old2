#!/bin/bash
# Super GRC - Complete GitHub Export Script
# This script will help you push all files from Figma Make to GitHub

echo "🚀 Super GRC - GitHub Export Script"
echo "===================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from your project root."
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
else
    echo "✅ Git repository already initialized"
fi

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already configured"
else
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/koroldm-droid/superGRCwebsite.git
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.output/

# Environment variables
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
EOF
fi

echo ""
echo "📋 Files to be committed:"
git add -A --dry-run

echo ""
read -p "Do you want to proceed with commit and push? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "💾 Adding all files..."
    git add -A
    
    echo "📝 Creating commit..."
    git commit -m "Complete Super GRC website export from Figma Make

- Marketing website with responsive design
- 24+ enterprise features
- SEO optimized with comprehensive meta tags
- Google Analytics integration
- Demo form with backend integration
- Complete documentation and guides
- Supabase backend configured
- Email system with Resend
- 12-month content calendar ready"
    
    echo "🚀 Pushing to GitHub..."
    git push -u origin main --force
    
    echo ""
    echo "✅ SUCCESS! Your repository is now at:"
    echo "   https://github.com/koroldm-droid/superGRCwebsite"
    echo ""
    echo "📚 Next Steps:"
    echo "   1. Go to https://vercel.com"
    echo "   2. Click 'New Project'"
    echo "   3. Import from GitHub: koroldm-droid/superGRCwebsite"
    echo "   4. Add environment variables (see DEPLOYMENT_GUIDE.md)"
    echo "   5. Add custom domain: supergrc.com"
    echo ""
else
    echo "❌ Cancelled. No changes were made."
fi
