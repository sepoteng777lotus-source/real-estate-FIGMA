// Vercel API Route: /api/submit-lead.js
// Place this file in your project's /api/ directory when deploying to Vercel

import { realNotificationService } from '../services/real-notification-service.ts';

export default async function handler(req, res) {
  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com'); // Replace with your domain
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    // Validate request body
    const leadData = req.body;
    
    if (!leadData.firstName || !leadData.lastName || !leadData.email || !leadData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: firstName, lastName, email, phone'
      });
    }

    // Validate South African phone number format
    const phoneRegex = /^(\+27|0)[0-9]{9}$/;
    if (!phoneRegex.test(leadData.phone.replace(/\s/g, ''))) {
      return res.status(400).json({
        success: false,
        message: 'Invalid South African phone number format'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Process the lead with real services
    console.log('📝 Processing new lead:', {
      name: `${leadData.firstName} ${leadData.lastName}`,
      email: leadData.email,
      phone: leadData.phone,
      location: leadData.location,
      timestamp: new Date().toISOString()
    });

    const result = await realNotificationService.processLead(leadData);

    // Log results for monitoring
    console.log('📊 NOTIFICATION RESULTS:', {
      email: result.emailResult.success ? '✅ SENT' : '❌ FAILED',
      sms: result.smsResult.success ? '✅ SENT' : '❌ FAILED',
      storage: result.storageResult.success ? '✅ STORED' : '❌ FAILED',
      leadId: `${leadData.firstName}-${Date.now()}`
    });

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Lead processed successfully',
      notifications: {
        email: result.emailResult.success,
        sms: result.smsResult.success,
        stored: result.storageResult.success
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Lead processing error:', error);
    
    // Don't expose internal errors to client
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again or contact us directly.',
      timestamp: new Date().toISOString()
    });
  }
}

// Export config for Vercel
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  // Specify runtime if needed
  runtime: 'nodejs18.x',
}