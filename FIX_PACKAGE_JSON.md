# 🚨 Fix package.json on GitHub

## Current Error:
```
npm error 404 Not Found - GET https://registry.npmjs.org/@jsr%2fsupabase__supabase-js
'@jsr/supabase__supabase-js@^2.49.8' is not in this registry.
```

---

## 🎯 The Fix (30 seconds):

### Step 1: Go to package.json
**URL:** https://github.com/koroldm-droid/superGRCwebsite/blob/main/package.json

### Step 2: Click "Edit" (pencil icon)

### Step 3: Find the line with Supabase (around line 54)
Look for this INCORRECT line:
```json
"@supabase/supabase-js": "jsr:@supabase/supabase-js@^2.49.8"
```

### Step 4: Replace with CORRECT line:
```json
"@supabase/supabase-js": "^2.45.0"
```

### Step 5: Commit
- Commit message: "Fix: Use correct npm package format for Supabase"
- Click "Commit changes"

---

## ✅ That's It!

The `jsr:` prefix doesn't work with npm. Using the standard npm version fixes the issue.

---

## 📋 Full Correct package.json (if you want to replace everything):

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

## 🎯 After This Fix:

Vercel will be able to install all packages successfully and continue with the build!
