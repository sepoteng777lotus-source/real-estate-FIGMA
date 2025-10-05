import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId = 'GA_MEASUREMENT_ID' }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Skip loading if using placeholder ID
    if (measurementId === 'GA_MEASUREMENT_ID') {
      console.log('🔧 Google Analytics: Skipped - no measurement ID provided');
      return;
    }

    console.log('🔧 Google Analytics: Ready for measurement ID:', measurementId);
  }, [measurementId]);

  return null;
}

// Export tracking functions for use in other components
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      'event_category': 'Real Estate',
      'event_label': 'Benoni Property Agent',
      ...parameters
    });
  }
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    'form_type': formType,
    'event_category': 'Lead Generation',
    'event_label': 'Property Search Form'
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    'event_category': 'Contact',
    'event_label': 'Phone Number Click'
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    'event_category': 'Contact', 
    'event_label': 'Email Click'
  });
};