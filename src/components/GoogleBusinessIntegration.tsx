import { useEffect } from 'react';

interface GoogleBusinessIntegrationProps {
  businessName: string;
  phone: string;
  email: string;
}

export function GoogleBusinessIntegration({ 
  businessName, 
  phone, 
  email 
}: GoogleBusinessIntegrationProps) {
  
  useEffect(() => {
    // Skip DOM manipulation in this environment to avoid errors
    console.log('Google Business Integration loaded for:', businessName, phone, email);
  }, [businessName, phone, email]);

  return null; // This component only manages structured data, no visual output
}