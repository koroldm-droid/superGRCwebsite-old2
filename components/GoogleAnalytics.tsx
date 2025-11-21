import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Only load GA if measurement ID is provided and not the placeholder
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.log('Google Analytics: Measurement ID not configured. Please update with your GA4 Measurement ID.');
      return;
    }

    // Load Google Analytics gtag.js script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      // Note: Scripts are intentionally left in place as removing them can cause issues
      // GA will naturally handle navigation in single-page apps
    };
  }, [measurementId]);

  return null;
}

// Helper function to track custom events
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
}

// Pre-defined event trackers for common actions
export const GAEvents = {
  // Demo form events
  demoFormView: () => trackEvent('demo_form_view', {
    event_category: 'engagement',
    event_label: 'Demo Form Viewed'
  }),
  
  demoFormSubmit: (success: boolean) => trackEvent('demo_form_submit', {
    event_category: 'conversion',
    event_label: success ? 'Demo Form Submitted' : 'Demo Form Error',
    value: success ? 1 : 0
  }),

  // CTA button clicks
  ctaClick: (buttonLabel: string, location: string) => trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: buttonLabel,
    button_location: location
  }),

  // Navigation events
  navClick: (destination: string) => trackEvent('navigation', {
    event_category: 'engagement',
    event_label: `Navigate to ${destination}`
  }),

  // Section views (for scroll tracking)
  sectionView: (sectionName: string) => trackEvent('section_view', {
    event_category: 'engagement',
    event_label: `${sectionName} Section Viewed`
  }),

  // Product selection
  productView: (productTier: string) => trackEvent('product_view', {
    event_category: 'product_interest',
    event_label: productTier,
    product_tier: productTier
  }),

  // Feature exploration
  featureClick: (featureName: string) => trackEvent('feature_click', {
    event_category: 'engagement',
    event_label: featureName
  }),

  // Social sharing
  socialShare: (platform: string) => trackEvent('social_share', {
    event_category: 'social',
    event_label: platform
  }),

  // Outbound links
  outboundClick: (url: string, label: string) => trackEvent('outbound_click', {
    event_category: 'outbound',
    event_label: label,
    destination_url: url
  })
};

// Hook for tracking page views in SPAs
export function usePageTracking() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
        page_title: document.title
      });
    }
  }, []);
}
