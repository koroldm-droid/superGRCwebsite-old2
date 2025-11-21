# 🚨 URGENT: Fix MarketingHero.tsx on GitHub

## The Error:
```
Could not load /vercel/path0/src/assets/3e5e83d7e429ac8276f75b54164bb0937b963cab.png 
(imported by components/MarketingHero.tsx)
```

## The Fix (2 minutes):

### Step 1: Go to the file on GitHub
**URL:** https://github.com/koroldm-droid/superGRCwebsite/blob/main/components/MarketingHero.tsx

### Step 2: Click "Edit" (pencil icon in top right)

### Step 3: Find lines 4-6 (should look like this):
```tsx
import dashboardImage from 'figma:asset/3e5e83d7e429ac8276f75b54164bb0937b963cab.png';
import logoImage from 'figma:asset/9edb72c929dd34177eafe046c4cc8f06e28ed558.png';
import superGRCLogo from 'figma:asset/b0067d28fcbb91803c9f38ebfd6c6316d2947eaa.png';
```

### Step 4: Replace those 3 lines with:
```tsx
// Images - using SVG placeholders for deployment
const dashboardImage = "/logo-full.svg";
const logoImage = "/logo-full.svg";
const superGRCLogo = "/logo-full.svg";
```

### Step 5: Scroll down and commit
- Commit message: "Fix: Remove figma:asset imports from MarketingHero"
- Click "Commit changes"

---

## ✅ That's It!

Vercel will automatically rebuild and your site should deploy successfully!

---

## 📋 Alternative: Replace Entire File

If you prefer to replace the entire file content, here are the first 10 lines of the correct version:

```tsx
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Interactive3DOrb } from "./Interactive3DOrb";
// Images - using SVG placeholders for deployment
const dashboardImage = "/logo-full.svg";
const logoImage = "/logo-full.svg";
const superGRCLogo = "/logo-full.svg";

export function MarketingHero() {
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });
```

**The rest of the file stays the same** - only lines 4-6 changed!

---

## 🎯 After This Fix:

The build should succeed and you'll see:
```
✅ npm install - SUCCESS
✅ vite build - SUCCESS  
✅ Deployment - SUCCESS
```

Then add these environment variables in Vercel Dashboard:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
