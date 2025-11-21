# Super GRC - Risk & Compliance Platform

A comprehensive Risk & Compliance Platform covering 12 major feature areas including system onboarding/offboarding, asset discovery, risk management with various compliance frameworks (SOC 2, ISO, HIPAA/HITRUST, FedRAMP/NIST), and more.

## 🎨 Brand Colors

- **Electric Lime**: `#CFE928` - Primary accents
- **Soft Cyan**: `#9FCFD3` - Secondary elements
- **Light Gray**: `#E6E6E6` - Backgrounds
- **Obsidian**: `#151719` - Dark text and elements

## 🚀 Deployment to Netlify

### Method 1: Drag & Drop (Easiest)

1. **Download your project** from Figma Make
2. **Go to [Netlify](https://app.netlify.com/)**
3. **Sign up or log in** (free account)
4. **Drag and drop** your entire project folder onto the Netlify dashboard
5. **Done!** Your site will be live in minutes

### Method 2: GitHub Integration (Recommended for Updates)

1. **Create a GitHub account** if you don't have one
2. **Create a new repository** on GitHub
3. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
4. **Go to [Netlify](https://app.netlify.com/)**
5. **Click "Add new site" → "Import an existing project"**
6. **Choose GitHub** and select your repository
7. **Deploy settings are already configured** in `netlify.toml`
8. **Click "Deploy site"**

### Method 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```
2. **Login to Netlify**:
   ```bash
   netlify login
   ```
3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

## 📝 Custom Domain Setup

After deployment:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `supergrc.com`)
4. Follow the instructions to update your DNS settings
5. Netlify provides **free SSL certificates** automatically

## 🔧 Configuration Files

- **`netlify.toml`** - Netlify configuration (build settings, redirects, headers)
- **`/App.tsx`** - Main application entry point
- **`/components/`** - All React components
- **`/styles/globals.css`** - Global styles and typography

## 📱 Features

- **12 Compliance Frameworks** (SOC 2, ISO, HIPAA, NIST, etc.)
- **24+ Enterprise Features**
- **AI-Powered Automation**
- **Asset Discovery & Management**
- **Risk Assessment & Control Matrix**
- **Business Continuity Planning**
- **Third-Party Risk Management**

## 🎯 Key Pages

- **Home/Hero** - Landing page with compliance badges
- **About** - Company information and mission
- **Products** - Three tiers (Micro Businesses, Small to Medium, Large Enterprise)
- **Features** - Comprehensive feature showcase with filtering
- **Demo Form** - Contact form for demo requests

## 💡 Making Updates

After your initial deployment:

1. **Make changes** in Figma Make
2. **Download** the updated project
3. **Option A**: Drag & drop to Netlify (creates new deployment)
4. **Option B**: Push to GitHub (auto-deploys if connected)

## 🆘 Support

For issues or questions:
- Netlify Documentation: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/

## 📄 License

All rights reserved - Super GRC

---

**Built with React, Tailwind CSS, and Figma Make**
