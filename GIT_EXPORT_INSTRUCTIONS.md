# 🚀 Git Export Instructions - Super GRC

## ✅ FIXES APPLIED IN FIGMA MAKE

1. **Deleted duplicate vite.config.js** - Was conflicting with vite.config.ts
2. **Verified vite.config.ts is clean** - No "typescript" keyword issues
3. **All components verified working** - Marketing site fully functional

---

## 📋 COPY THESE FILES FROM FIGMA MAKE TO YOUR MAC

### Step 1: Download from Figma Make

Click **"Export"** button in Figma Make and download the ZIP file.

### Step 2: Replace Files on Your Mac

```bash
cd ~/Documents/supergrc

# CRITICAL: Delete the problematic vite.config.ts first
rm vite.config.ts

# Extract the downloaded ZIP and copy all files
# This will overwrite your local files with the clean Figma Make version
```

### Step 3: Fix the vite.config.ts Issue Locally

Your local vite.config.ts has a stray "typescript" keyword on line 1.

**Open the file:**
```bash
code vite.config.ts
```

**It should look EXACTLY like this (no extra words):**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
```

**❌ WRONG (what you have now):**
```typescript
typescript  // ← DELETE THIS LINE!
import { defineConfig } from 'vite';
```

**✅ CORRECT:**
```typescript
import { defineConfig } from 'vite';
```

### Step 4: Commit and Push

```bash
cd ~/Documents/supergrc

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Fix: Remove duplicate vite.config.js and clean vite.config.ts"

# Push to GitHub
git push origin main
```

### Step 5: Verify Vercel Deployment

After pushing, Vercel will automatically rebuild. Check:
- https://super-gr-cwebsite-vgsr.vercel.app/

---

## 🔧 TROUBLESHOOTING

### If you get merge conflicts:

```bash
# Pull latest changes first
git pull origin main

# If conflicts, resolve them manually then:
git add .
git commit -m "Merge remote changes"
git push origin main
```

### If Vercel still fails:

1. Check Vercel build logs
2. Ensure vite.config.ts has NO "typescript" keyword
3. Ensure vite.config.js is deleted
4. Check package.json has "type": "module"

---

## 📝 KEY FILES TO VERIFY

- ✅ `/vite.config.ts` - Clean, no stray keywords
- ✅ `/vite.config.js` - DELETED
- ✅ `/package.json` - Has "type": "module"
- ✅ `/App.tsx` - Marketing site entry point
- ✅ All `/components/*` - Complete marketing components

---

## 🎯 QUICK FIX SUMMARY

**The main issue:** Your local `vite.config.ts` has the word "typescript" on line 1, which causes:
```
ReferenceError: typescript is not defined
```

**The solution:** Delete that first line so the file starts with `import { defineConfig } from 'vite';`

That's literally it! 🎉
