# ✅ Simple 5-Step GitHub Export

## Your Goal
Get all 167+ files from Figma Make → GitHub → Vercel → supergrc.com

---

## Step 1: Download Your Project (Choose One Method)

### 🅰️ Method A: Figma Make Export (If Available)
1. Look for **"Export"**, **"Download"**, or **"Download ZIP"** button in Figma Make
2. Download the ZIP file
3. Extract to a folder (e.g., `supergrc-export`)
4. ✅ **GO TO STEP 2**

### 🅱️ Method B: Manual Copy (If No Export)
Since you can see all files in Figma Make but can't export them via API, you'll need to:
1. Use Figma Make's built-in export feature OR
2. Contact Figma Make support for bulk export OR
3. Let me know and I'll help you create a different solution

---

## Step 2: Initialize Git

Open terminal/command prompt in your project folder:

**Mac/Linux:**
```bash
cd /path/to/supergrc-export
./EXPORT_TO_GITHUB.sh
```

**Windows:**
```cmd
cd C:\path\to\supergrc-export
EXPORT_TO_GITHUB.bat
```

The script will handle everything automatically!

**OR do it manually:**

```bash
git init
git branch -M main
git remote add origin https://github.com/koroldm-droid/superGRCwebsite.git
git add -A
git commit -m "Complete Super GRC website export"
git push -u origin main --force
```

---

## Step 3: Verify GitHub

Visit: **https://github.com/koroldm-droid/superGRCwebsite**

Check that you see:
- ✅ `components/` folder with 100+ files
- ✅ `App.tsx` and `main.tsx`
- ✅ `package.json`
- ✅ Documentation files (.md)
- ✅ `public/` folder with assets

---

## Step 4: Deploy to Vercel

1. **Go to**: https://vercel.com/new

2. **Import Repository**:
   - Click "Import Git Repository"
   - Select: `koroldm-droid/superGRCwebsite`

3. **Configure**:
   - Framework: **Vite** (auto-detected)
   - Root: `./`
   - Build: `npm run build`
   - Output: `dist`

4. **Add Environment Variables**:
   ```
   SUPABASE_URL=https://stceirckhmixmmhuhswu.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_ROLE_KEY=[Your key]
   RESEND_API_KEY=[Your key]
   ```

5. **Click "Deploy"**

---

## Step 5: Add Custom Domain

1. After deployment, go to **Project Settings** → **Domains**
2. Add domain: `supergrc.com`
3. Add domain: `www.supergrc.com`
4. Follow Vercel's DNS instructions

**DNS Records to Add:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🎉 Done!

Your site will be live at:
- ✅ **supergrc.com** (your custom domain)
- ✅ **[project].vercel.app** (Vercel URL)
- ✅ All files backed up in GitHub
- ✅ Automatic deployments on future commits

---

## 🆘 Need Help?

**Can't find export in Figma Make?**
1. Check menu: ☰ → Export/Download
2. Check File menu
3. Try keyboard shortcuts: Ctrl+E or Cmd+E

**Git errors?**
```bash
# Check status
git status

# Force push if needed
git push -u origin main --force
```

**Vercel build fails?**
- Check that all files were pushed to GitHub
- Verify environment variables are set
- Check build logs for specific errors

---

## 📞 Quick Reference

- **GitHub Repo**: https://github.com/koroldm-droid/superGRCwebsite
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Site**: https://supergrc.com
- **File Count**: 167+ files ready to export

**Time Estimate**: 15-30 minutes total
