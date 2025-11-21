@echo off
REM Super GRC - Complete GitHub Export Script for Windows
REM This script will help you push all files from Figma Make to GitHub

echo ========================================
echo Super GRC - GitHub Export Script
echo ========================================
echo.

REM Check if package.json exists
if not exist "package.json" (
    echo Error: package.json not found. Please run this script from your project root.
    pause
    exit /b 1
)

REM Initialize git if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git branch -M main
) else (
    echo Git repository already initialized
)

REM Check if remote exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo Adding GitHub remote...
    git remote add origin https://github.com/koroldm-droid/superGRCwebsite.git
) else (
    echo Remote 'origin' already configured
)

REM Create .gitignore if it doesn't exist
if not exist ".gitignore" (
    echo Creating .gitignore...
    (
        echo # Dependencies
        echo node_modules/
        echo .pnpm-store/
        echo.
        echo # Build outputs
        echo dist/
        echo build/
        echo .output/
        echo.
        echo # Environment variables
        echo .env
        echo .env.local
        echo .env.*.local
        echo.
        echo # Editor directories
        echo .vscode/
        echo .idea/
        echo *.swp
        echo *.swo
        echo *~
        echo.
        echo # OS files
        echo .DS_Store
        echo Thumbs.db
        echo.
        echo # Logs
        echo *.log
        echo npm-debug.log*
        echo yarn-debug.log*
        echo yarn-error.log*
        echo.
        echo # Cache
        echo .cache/
        echo .temp/
        echo .tmp/
    ) > .gitignore
)

echo.
echo Adding all files...
git add -A

echo.
echo Creating commit...
git commit -m "Complete Super GRC website export from Figma Make - Marketing website with responsive design - 24+ enterprise features - SEO optimized with comprehensive meta tags - Google Analytics integration - Demo form with backend integration - Complete documentation and guides - Supabase backend configured - Email system with Resend - 12-month content calendar ready"

echo.
set /p confirm="Push to GitHub now? (Y/N): "
if /i "%confirm%"=="Y" (
    echo Pushing to GitHub...
    git push -u origin main --force
    
    echo.
    echo ========================================
    echo SUCCESS! Your repository is now at:
    echo https://github.com/koroldm-droid/superGRCwebsite
    echo ========================================
    echo.
    echo Next Steps:
    echo 1. Go to https://vercel.com
    echo 2. Click 'New Project'
    echo 3. Import from GitHub: koroldm-droid/superGRCwebsite
    echo 4. Add environment variables (see DEPLOYMENT_GUIDE.md^)
    echo 5. Add custom domain: supergrc.com
    echo.
) else (
    echo Cancelled. No changes were pushed.
)

pause
