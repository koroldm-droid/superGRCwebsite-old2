# 🔧 Vercel Deployment Error - Quick Fix

## ❌ Error You're Seeing:

```
npm error 404 Not Found - GET https://registry.npmjs.org/@jsr%2fsupabase__supabase-js
npm error 404  '@jsr/supabase__supabase-js@^2.49.8' is not in this registry.
```

## 🔍 Root Cause:

The `package.json` file in your GitHub repository has an incorrect Supabase dependency. It's using `@jsr/supabase__supabase-js` (JSR registry) instead of `@supabase/supabase-js` (npm registry).

## ✅ Solution:

### Option 1: Fix via GitHub Web Interface (Fastest)

1. **Go to your repository:**
   https://github.com/koroldm-droid/superGRCwebsite

2. **Navigate to `package.json`:**
   - Click on `package.json` file
   - Click the **pencil icon** (Edit this file)

3. **Find and replace the incorrect line:**
   
   **FIND (around line 54):**
   ```json
   "@jsr/supabase__supabase-js": "^2.49.8"
   ```
   
   **REPLACE WITH:**
   ```json
   "@supabase/supabase-js": "^2.45.0"
   ```

4. **Commit the change:**
   - Scroll to bottom
   - Commit message: "Fix: Update Supabase dependency for npm compatibility"
   - Click "Commit changes"

5. **Redeploy on Vercel:**
   - Go to Vercel dashboard
   - Click "Redeploy" (it should auto-deploy after the commit)

---

### Option 2: Fix via Git Command Line

If you have the repository cloned locally:

1. **Edit `package.json`:**
   ```bash
   cd /path/to/superGRCwebsite
   ```

2. **Open package.json and change:**
   ```json
   "@jsr/supabase__supabase-js": "^2.49.8"
   ```
   **to:**
   ```json
   "@supabase/supabase-js": "^2.45.0"
   ```

3. **Commit and push:**
   ```bash
   git add package.json
   git commit -m "Fix: Update Supabase dependency for npm compatibility"
   git push origin main
   ```

4. **Vercel will auto-deploy** the new commit

---

### Option 3: Use Correct package.json (from this file)

Copy the correct `package.json` content below and replace the entire file on GitHub:

```json
{
  "name": "supergrc",
  "version": "1.0.0",
  "description": "Super GRC - Full Scope Cybersecurity Risk Management & Compliance Platform",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "lucide-react": "^0.445.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-tooltip": "^1.1.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.2",
    "sonner": "^2.0.3",
    "recharts": "^2.12.7",
    "react-hook-form": "^7.55.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.9.0",
    "date-fns": "^3.6.0",
    "react-day-picker": "^8.10.1",
    "cmdk": "^1.0.0",
    "vaul": "^0.9.1",
    "embla-carousel-react": "^8.1.6",
    "motion": "^10.18.0",
    "@supabase/supabase-js": "^2.45.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.2",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.4",
    "eslint": "^9.9.1"
  }
}
```

---

## 🎯 Quick Action Steps:

1. ✅ **Go to GitHub:** https://github.com/koroldm-droid/superGRCwebsite/blob/main/package.json
2. ✅ **Click Edit (pencil icon)**
3. ✅ **Find:** `"@jsr/supabase__supabase-js"`
4. ✅ **Replace with:** `"@supabase/supabase-js"`
5. ✅ **Commit changes**
6. ✅ **Wait for Vercel auto-deploy** (or manually redeploy)

---

## ✅ After Fix - Expected Result:

You should see:
```
✅ npm install completed successfully
✅ Building application...
✅ Build completed
✅ Deployment successful
```

---

## 🚀 Next: Add Environment Variables

After the build succeeds, you'll need to add these environment variables in Vercel:

**Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

Add these:
- `SUPABASE_URL` = (your Supabase project URL)
- `SUPABASE_ANON_KEY` = (your Supabase anon key)
- `RESEND_API_KEY` = (your Resend API key for emails)

---

## 📞 Still Having Issues?

If the build still fails after this fix:
1. Check the Vercel build logs for the new error
2. Make sure all files pushed to GitHub correctly
3. Verify no other dependencies have `@jsr/` prefix
