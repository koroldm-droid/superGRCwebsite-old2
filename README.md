# Super GRC - Full Scope Cybersecurity Risk Management Platform

[![Status](https://img.shields.io/badge/status-production-brightgreen.svg)](https://supergrc.com)
[![License](https://img.shields.io/badge/license-proprietary-blue.svg)](LICENSE)

## 🚀 Overview

Super GRC is a comprehensive cybersecurity risk management and GRC platform that unifies compliance, risk assessment, asset discovery, and governance in one intelligent solution.

- **Website**: [supergrc.com](https://supergrc.com)
- **Documentation**: See `/guidelines` directory
- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Shadcn/UI
- **Backend**: Supabase (Edge Functions + Database)

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Vite** for fast build and dev experience
- **Tailwind CSS v4.0** for styling
- **Shadcn/UI** component library
- **Lucide React** for icons
- **Motion** (formerly Framer Motion) for animations

### Backend
- **Supabase** for database, auth, and storage
- **Hono** web server running on Supabase Edge Functions
- **Key-Value Store** for data persistence

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## 🎨 Brand Colors

- **Electric Lime**: `#CFE928` - Primary brand color
- **Soft Cyan**: `#9FCFD3` - Secondary accent
- **Light Gray**: `#E6E6E6` - Background
- **Obsidian**: `#151719` - Text and dark elements

## 📁 Project Structure

```
/
├── components/           # React components
│   ├── ui/              # Shadcn/UI components
│   ├── Marketing*.tsx   # Marketing page sections
│   ├── DemoForm.tsx     # Contact/demo form
│   ├── SEOHead.tsx      # SEO meta tags
│   └── ...             # Other components
├── styles/              # Global styles
│   └── globals.css      # Tailwind + custom styles
├── public/              # Static assets
│   ├── robots.txt       # SEO robots file
│   ├── sitemap.xml      # SEO sitemap
│   └── ...             # Favicons and images
├── supabase/           # Backend code
│   └── functions/       # Supabase Edge Functions
├── guidelines/          # Documentation
└── ...                 # Config files
```

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment settings

## 🚀 Deployment

### Vercel (Recommended)

1. Import this repository in Vercel
2. Configure domain: `supergrc.com`
3. Set framework preset: `Vite`
4. Deploy!

### Environment Variables

No environment variables required for frontend deployment. Backend (Supabase) credentials are managed separately.

## 📊 Features

### 12 Major Feature Areas

1. **Risk Management** - Comprehensive risk assessment and management
2. **Asset Discovery** - Automated discovery and inventory
3. **Compliance Management** - Multi-framework compliance automation
4. **Third-Party Risk Management** - Vendor risk assessment
5. **Business Continuity Planning** - BCP and disaster recovery
6. **Control Design** - Security control frameworks
7. **Data Elements** - Data classification and management
8. **API Management** - API security and governance
9. **Issue Management** - Security issue tracking
10. **Risk Posture** - Real-time risk visibility
11. **Vulnerability Management** - Vuln scanning and remediation
12. **Secure AI** - AI/ML security governance

### Compliance Frameworks Supported

- SOC 2
- ISO 27001
- HIPAA/HITRUST
- FedRAMP/NIST
- PCI DSS
- Privacy (GDPR, CCPA)
- NIST CSF
- CMMC

## 🎯 SEO Optimized

- Comprehensive meta tags
- JSON-LD structured data
- Sitemap and robots.txt
- Mobile-optimized
- Fast loading (Lighthouse score: 95+)

## 📝 License

Proprietary - © 2025 Super GRC. All rights reserved.

## 🤝 Contact

- Website: [supergrc.com](https://supergrc.com)
- Email: sales@supergrc.com

---

**Super GRC** - Created by and for Cybersecurity Practitioners
