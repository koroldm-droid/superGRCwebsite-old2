# 🔧 GitHub Asset Fix Guide

## ❌ Current Error:
```
Could not load /vercel/path0/src/assets/93d4913b8b0e4dd4a103d7aaf6364783a12a86f4.png
```

## 🔍 Root Cause:
Multiple components are importing `figma:asset` images that only work in Figma Make, not on GitHub/Vercel.

## 📋 Files That Need Updates:

1. ✅ **App.tsx** - Fixed (using `/logo-full.svg`)
2. ❌ **DashboardApp.tsx** - Line 6
3. ❌ **LaptopShowcase.tsx** - Line 1  
4. ❌ **MarketingAbout.tsx** - Line 1
5. ❌ **MarketingHero.tsx** - Lines 4, 5, 6
6. ❌ **MarketingNav.tsx** - Line 1
7. ❌ **OGImageGenerator.tsx** - Line 15

## ✅ Quick Solution - Method 1 (Simple):

Remove unused figma:asset imports and replace with placeholders or remove images entirely.

### Files to Update on GitHub:

---

### 1. DashboardApp.tsx
**Remove line 6:**
```tsx
import logo from "figma:asset/710782100269a767693ea5131362aed950b519c0.png";
```

**Replace with:**
```tsx
// Logo handled by MarketingNav component
```

---

### 2. LaptopShowcase.tsx
**Current line 1:**
```tsx
import dashboardImage from 'figma:asset/3e5e83d7e429ac8276f75b54164bb0937b963cab.png';
```

**Replace with:**
```tsx
// Dashboard image - using placeholder for now
const dashboardImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23151719' width='1200' height='800'/%3E%3Ctext x='50%25' y='50%25' fill='%23CFE928' font-size='48' text-anchor='middle'%3ESuper GRC Dashboard%3C/text%3E%3C/svg%3E";
```

---

### 3. MarketingAbout.tsx
**Remove line 1:**
```tsx
import wingsImage from 'figma:asset/eee5e4a4c7ecebfdb1ad5ee3f0cfe3e40233620e.png';
```

**Replace with:**
```tsx
// Wings decorative image - removed for GitHub deployment
```

**Also remove any `<img src={wingsImage}` references in the component**

---

### 4. MarketingHero.tsx
**Remove lines 4-6:**
```tsx
import dashboardImage from 'figma:asset/3e5e83d7e429ac8276f75b54164bb0937b963cab.png';
import logoImage from 'figma:asset/9edb72c929dd34177eafe046c4cc8f06e28ed558.png';
import superGRCLogo from 'figma:asset/b0067d28fcbb91803c9f38ebfd6c6316d2947eaa.png';
```

**Replace with:**
```tsx
// Images - using SVG placeholders for GitHub deployment
const dashboardImage = "/logo-full.svg"; // Use our new logo
const logoImage = "/logo-full.svg";
const superGRCLogo = "/logo-full.svg";
```

---

### 5. MarketingNav.tsx
**Remove line 1:**
```tsx
import horizontalLogo from 'figma:asset/710782100269a767693ea5131362aed950b519c0.png';
```

**Replace with:**
```tsx
const horizontalLogo = "/logo-full.svg";
```

---

### 6. OGImageGenerator.tsx
**Remove line 15:**
```tsx
import heroImage from 'figma:asset/52c361cdb5a207889df1a2539f7c4a6a5fc9c1c8.png';
```

**Replace with:**
```tsx
// Hero image for OG generator - using placeholder
const heroImage = "/logo-full.svg";
```

---

## 🚀 Alternative: Let Me Push Fixed Files

I can fix all these files here in Figma Make and then we can push them to GitHub using the API. Would you like me to:

1. **Fix all the files here** ✅
2. **Push them to GitHub via API** ✅
3. **Deploy automatically** ✅

Say "yes, fix and push" and I'll do it all for you!

---

## 📝 Manual Steps (if you prefer):

1. Go to each file on GitHub
2. Click Edit (pencil icon)
3. Replace the `figma:asset` imports with the code above
4. Commit each change
5. Wait for Vercel to redeploy

---

## ⚡ Next Steps After Fix:

Once all files are updated, Vercel will:
- ✅ Build successfully
- ✅ Deploy the site
- ⚠️ Need environment variables:
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `RESEND_API_KEY`
