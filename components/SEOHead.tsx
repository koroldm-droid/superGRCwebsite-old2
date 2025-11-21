import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEOHead({
  title = "Super GRC - Full Scope Cybersecurity Risk Management & Compliance Platform | Best GRC Software",
  description = "Leading cybersecurity risk management platform for enterprises. Unified GRC solution with asset discovery, risk assessment, SOC 2, ISO 27001, HIPAA, FedRAMP compliance. Available as SaaS or on-prem deployment. Best risk management software for modern security teams.",
  keywords = "Risk Management, Cybersecurity Risk Management, GRC Platform, Assets Discovery, Asset Discovery, Compliance Management Software, Best Risk Management Software, SOC 2 Compliance, ISO 27001, HIPAA Compliance, FedRAMP, SaaS GRC, On-prem GRC, Third-Party Risk Management, Security Governance, Enterprise Risk Management, Compliance Automation, Security Risk Assessment",
  ogImage = "https://supergrc.com/_assets/v11/79ffab7fae4e64f1328bcf239e0e8f15d840a1be.png", // Hardcoded absolute URL for OG image
  canonical = "https://supergrc.com"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // CRITICAL: Add favicon as the very first thing
    // Remove any existing favicon links first
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(link => link.remove());
    
    // Embedded SVG favicon as data URL for instant loading
    const faviconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#151719"/><path d="M16 18.6L13.4 16H8.8L11.7 18.9L16 23.2L20.3 18.9L23.2 16H18.6L16 18.6Z" fill="#CFE928"/><path d="M11.7 12.3L8.8 9.4H13.4L16 12L18.6 9.4H23.2L20.3 12.3L23.2 15.2H18.6L16 12.6L13.4 15.2H8.8L11.7 12.3Z" fill="#CFE928"/></svg>`;
    const faviconDataURL = `data:image/svg+xml,${encodeURIComponent(faviconSVG)}`;
    
    // Add main favicon with data URL
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/svg+xml';
    faviconLink.href = faviconDataURL;
    document.head.insertBefore(faviconLink, document.head.firstChild);
    
    // Add apple touch icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.href = '/apple-touch-icon.svg';
    document.head.insertBefore(appleTouchIcon, document.head.firstChild);
    
    // CRITICAL FIX: Remove any existing robots meta tags (including noindex injected by hosting platforms)
    const existingRobotsTags = document.querySelectorAll('meta[name="robots"]');
    existingRobotsTags.forEach(tag => tag.remove());
    
    // Add our robots meta tag FIRST to ensure it takes precedence
    const robotsMeta = document.createElement('meta');
    robotsMeta.name = 'robots';
    robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    document.head.insertBefore(robotsMeta, document.head.firstChild);
    
    // Also add googlebot-specific meta tag for extra assurance
    const googlebotMeta = document.createElement('meta');
    googlebotMeta.name = 'googlebot';
    googlebotMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    document.head.insertBefore(googlebotMeta, document.head.firstChild);
    
    // Set or update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Super GRC' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:secure_url', content: ogImage },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Super GRC - Full Scope Cybersecurity Risk Management Platform' },
      { property: 'og:site_name', content: 'Super GRC' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonical },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: 'Super GRC - Full Scope Cybersecurity Risk Management Platform' },
      { name: 'twitter:creator', content: '@SuperGRC' },
      { name: 'twitter:site', content: '@SuperGRC' },
      
      // Additional SEO
      { name: 'application-name', content: 'Super GRC' },
      { name: 'apple-mobile-web-app-title', content: 'Super GRC' },
      { name: 'theme-color', content: '#CFE928' },
      { name: 'msapplication-TileColor', content: '#CFE928' },
    ];
    
    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    });
    
    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Add JSON-LD Schema Markup
    const schemaScript = document.getElementById('schema-org');
    if (schemaScript) {
      schemaScript.remove();
    }
    
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://supergrc.com/#organization",
          "name": "Super GRC",
          "url": "https://supergrc.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://supergrc.com/logo.png",
            "width": 512,
            "height": 512
          },
          "description": "Leading cybersecurity risk management and GRC platform for enterprises",
          "sameAs": [
            "https://www.linkedin.com/company/supergrc",
            "https://twitter.com/SuperGRC"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "sales@supergrc.com"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://supergrc.com/#website",
          "url": "https://supergrc.com",
          "name": "Super GRC",
          "description": "Full Scope Cybersecurity Risk Management & Compliance Platform",
          "publisher": {
            "@id": "https://supergrc.com/#organization"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://supergrc.com/#webpage",
          "url": "https://supergrc.com",
          "name": title,
          "isPartOf": {
            "@id": "https://supergrc.com/#website"
          },
          "about": {
            "@id": "https://supergrc.com/#organization"
          },
          "description": description
        },
        {
          "@type": "SoftwareApplication",
          "name": "Super GRC",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Web, SaaS, On-Premise",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Contact for pricing"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "127"
          },
          "description": "Comprehensive cybersecurity risk management platform with asset discovery, compliance automation, and third-party risk assessment. Supports SOC 2, ISO 27001, HIPAA, FedRAMP, and more.",
          "featureList": [
            "Risk Management",
            "Asset Discovery",
            "Compliance Management",
            "Third-Party Risk Management",
            "SOC 2 Compliance",
            "ISO 27001 Compliance",
            "HIPAA Compliance",
            "FedRAMP Compliance",
            "AI-Powered Risk Assessment",
            "Business Continuity Planning",
            "Control Design Management",
            "API Management"
          ],
          "screenshot": ogImage
        },
        {
          "@type": "Product",
          "name": "Super GRC Platform",
          "description": "All-in-one cybersecurity risk management and GRC platform for enterprises. Best risk management software with asset discovery, compliance automation, and AI-powered insights.",
          "brand": {
            "@id": "https://supergrc.com/#organization"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "0",
            "offerCount": "3",
            "offers": [
              {
                "@type": "Offer",
                "name": "Startup Plan",
                "description": "Perfect for small teams and startups"
              },
              {
                "@type": "Offer",
                "name": "Business Plan",
                "description": "For growing companies"
              },
              {
                "@type": "Offer",
                "name": "Enterprise Plan",
                "description": "Full-scale enterprise solution"
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "127"
          }
        },
        {
          "@type": "Service",
          "serviceType": "Cybersecurity Risk Management",
          "provider": {
            "@id": "https://supergrc.com/#organization"
          },
          "description": "Enterprise cybersecurity risk management services including asset discovery, compliance management, and third-party risk assessment",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "GRC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Risk Management",
                  "description": "Comprehensive cybersecurity risk management and assessment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Asset Discovery",
                  "description": "Automated asset discovery and inventory management"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Compliance Management",
                  "description": "Multi-framework compliance management for SOC 2, ISO 27001, HIPAA, FedRAMP"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Third-Party Risk Management",
                  "description": "Vendor risk assessment and management"
                }
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Super GRC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Super GRC is a comprehensive cybersecurity risk management and GRC platform that unifies compliance, risk assessment, asset discovery, and governance in one intelligent solution. Available as SaaS or on-premise deployment."
              }
            },
            {
              "@type": "Question",
              "name": "What compliance frameworks does Super GRC support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Super GRC supports SOC 2, ISO 27001, HIPAA/HITRUST, FedRAMP/NIST, PCI DSS, Privacy frameworks, NIST CSF, CMMC, and more. Full coverage for all major compliance frameworks."
              }
            },
            {
              "@type": "Question",
              "name": "Is Super GRC available as SaaS or on-premise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Super GRC is available both as a cloud-based SaaS solution and as an on-premise deployment option to meet your organization's specific requirements."
              }
            },
            {
              "@type": "Question",
              "name": "What makes Super GRC the best risk management software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Super GRC is created by and for cybersecurity practitioners, offering automated asset discovery, AI-powered risk assessment, multi-framework compliance management, third-party risk assessment, and comprehensive governance tools in a single unified platform."
              }
            }
          ]
        }
      ]
    };
    
    const script = document.createElement('script');
    script.id = 'schema-org';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    
  }, [title, description, keywords, ogImage, canonical]);
  
  return null;
}