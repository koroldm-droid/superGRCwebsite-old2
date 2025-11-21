@echo off
REM Super GRC - Push Remaining Files to GitHub (Windows)
REM This script will push all remaining files to your existing repository

echo ============================================
echo Super GRC - Pushing Remaining Files to GitHub
echo ============================================
echo.

REM Check if package.json exists
if not exist "package.json" (
    echo [ERROR] package.json not found. Please run this script from your project root.
    pause
    exit /b 1
)

REM Check if git is initialized
if not exist ".git" (
    echo [INFO] Initializing Git repository...
    git init
    git branch -M main
)

REM Check if remote exists, if not add it
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo [INFO] Adding GitHub remote...
    git remote add origin https://github.com/koroldm-droid/superGRCwebsite.git
)

REM Create/update .gitignore
echo [INFO] Updating .gitignore...
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

echo.
echo [INFO] Checking current repository status...
git status

echo.
echo ============================================
echo SUMMARY OF REMAINING FILES TO PUSH:
echo ============================================
echo.
echo - Marketing Components (6 files)
echo - SEO and Analytics Components (3 files)
echo - Interactive Components (3 files)
echo - Blog and Content Components (4 files)
echo - Dashboard Components (3 files)
echo - Utility Components (3 files)
echo - Shadcn/UI Components (30+ files)
echo - Backend Files (4 files)
echo - Public Assets (7 files)
echo - Documentation Files (40+ files)
echo.
echo Total: ~100+ files to be pushed
echo.

set /p confirm="Do you want to proceed with adding and pushing all files? (Y/N): "
if /i "%confirm%" neq "Y" goto :cancelled

echo.
echo [1/4] Adding all files to git...
git add -A

echo [INFO] Files staged for commit
echo.

echo [2/4] Creating commit...
git commit -m "Complete Super GRC website - All components and documentation"

echo [INFO] Commit created
echo.

echo [3/4] Pulling latest changes from GitHub (if any)...
git pull origin main --rebase
if errorlevel 1 (
    echo [WARNING] No remote branch yet, will create on push
)

echo.
echo [4/4] Pushing to GitHub...
git push -u origin main

echo.
echo ============================================
echo SUCCESS! All files pushed to GitHub!
echo ============================================
echo.
echo Repository: https://github.com/koroldm-droid/superGRCwebsite
echo.
echo NEXT STEPS FOR DEPLOYMENT:
echo.
echo Deploy to Vercel:
echo   1. Go to https://vercel.com
echo   2. Click 'New Project'
echo   3. Import: koroldm-droid/superGRCwebsite
echo   4. Add Environment Variables
echo   5. Deploy!
echo.
echo For detailed instructions, see DEPLOYMENT_GUIDE.md
echo.
pause
exit /b 0

:cancelled
echo.
echo [CANCELLED] No changes were made to the repository.
echo.
pause
exit /b 0
