import { MarketingHero } from "./components/MarketingHero";
import { MarketingAbout } from "./components/MarketingAbout";
import { MarketingProducts } from "./components/MarketingProducts";
import { MarketingFeatures } from "./components/MarketingFeatures";
import { MarketingNav } from "./components/MarketingNav";
import { DemoForm } from "./components/DemoForm";
import { SEOHead } from "./components/SEOHead";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { OGImageGenerator } from "./components/OGImageGenerator";
import footerLogo from 'figma:asset/93d4913b8b0e4dd4a103d7aaf6364783a12a86f4.png';

export default function App() {
  // Check if we should show OG Image Generator using hash
  const showOGGenerator = window.location.hash === '#og-generator' || 
                         window.location.hash === '#og' ||
                         window.location.search.includes('og-generator=true');
  
  if (showOGGenerator) {
    return <OGImageGenerator />;
  }
  
  return (
    <div className="min-h-screen bg-[#151719]">
      {/* SEO Meta Tags & Schema Markup */}
      <SEOHead />
      
      {/* Google Analytics 4 - Replace 'G-XXXXXXXXXX' with your actual Measurement ID */}
      <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      
      {/* Navigation */}
      <MarketingNav />
      
      {/* Hero Section */}
      <MarketingHero />
      
      {/* About Section */}
      <MarketingAbout />
      
      {/* Products Section */}
      <MarketingProducts />
      
      {/* Features, Why Choose, and CTA Sections */}
      <MarketingFeatures />
      
      {/* Demo Form Section */}
      <DemoForm />
      
      {/* Footer */}
      <footer className="bg-[#151719] text-[#E6E6E6] py-8 md:py-12 border-t border-[#9FCFD3]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 md:mb-6 flex flex-col items-center">
              <img src={footerLogo} alt="Super GRC - Engineered for Security" className="h-24 md:h-32 mb-4" loading="lazy" />
            </div>
            <p className="text-[#9FCFD3] mb-4 md:mb-6 text-sm md:text-base" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              Super GRC is created by and for Cybersecurity Practitioners
            </p>
            <p className="text-[#E6E6E6]/50 text-xs md:text-sm" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
              © 2025 Super GRC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}