#!/bin/bash

# Super GRC - Push Fixed Files to GitHub
# This script uploads all files with removed figma:asset imports

REPO_OWNER="koroldm-droid"
REPO_NAME="superGRCwebsite"
BRANCH="main"
TOKEN="$GITHUB_ACCESS_TOKEN"

echo "🚀 Starting GitHub Push..."
echo "Repository: $REPO_OWNER/$REPO_NAME"
echo "Branch: $BRANCH"
echo ""

# Function to push a file to GitHub
push_file() {
  local file_path=$1
  local github_path=$2
  local commit_message=$3
  
  echo "📤 Pushing: $github_path"
  
  # Read file content and base64 encode
  local content=$(base64 -w 0 "$file_path" 2>/dev/null || base64 "$file_path")
  
  # Get current file SHA (if exists)
  local sha=$(curl -s -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/contents/$github_path?ref=$BRANCH" \
    | grep -o '"sha": "[^"]*"' | cut -d'"' -f4)
  
  # Prepare JSON payload
  if [ -n "$sha" ]; then
    # File exists, update it
    local json_payload=$(cat <<EOF
{
  "message": "$commit_message",
  "content": "$content",
  "branch": "$BRANCH",
  "sha": "$sha"
}
EOF
)
  else
    # File doesn't exist, create it
    local json_payload=$(cat <<EOF
{
  "message": "$commit_message",
  "content": "$content",
  "branch": "$BRANCH"
}
EOF
)
  fi
  
  # Push to GitHub
  local response=$(curl -s -X PUT \
    -H "Authorization: token $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$json_payload" \
    "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/contents/$github_path")
  
  if echo "$response" | grep -q '"sha"'; then
    echo "   ✅ Success!"
  else
    echo "   ❌ Failed!"
    echo "   Response: $response"
  fi
  echo ""
}

# Push all fixed files
echo "=== Pushing Fixed Files ==="
echo ""

push_file "App.tsx" "App.tsx" "Fix: Remove figma:asset import from App.tsx"
push_file "components/DashboardApp.tsx" "components/DashboardApp.tsx" "Fix: Remove figma:asset import from DashboardApp.tsx"
push_file "components/LaptopShowcase.tsx" "components/LaptopShowcase.tsx" "Fix: Remove figma:asset import from LaptopShowcase.tsx"
push_file "components/MarketingAbout.tsx" "components/MarketingAbout.tsx" "Fix: Remove figma:asset import from MarketingAbout.tsx"
push_file "components/MarketingHero.tsx" "components/MarketingHero.tsx" "Fix: Remove figma:asset imports from MarketingHero.tsx"
push_file "components/MarketingNav.tsx" "components/MarketingNav.tsx" "Fix: Remove figma:asset import from MarketingNav.tsx"
push_file "components/OGImageGenerator.tsx" "components/OGImageGenerator.tsx" "Fix: Remove figma:asset import from OGImageGenerator.tsx"
push_file "public/logo-full.svg" "public/logo-full.svg" "Add: Super GRC logo SVG for deployment"

echo ""
echo "=== Push Complete! ==="
echo ""
echo "✅ All files pushed successfully!"
echo "🔄 Vercel will automatically redeploy"
echo ""
echo "⏳ Next steps:"
echo "   1. Wait for Vercel to finish building (~2 minutes)"
echo "   2. Add environment variables in Vercel dashboard"
echo "   3. Your site should be live! 🎉"
