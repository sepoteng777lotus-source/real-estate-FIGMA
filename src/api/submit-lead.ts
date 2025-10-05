// Vercel API Route: /api/submit-lead.ts
// This is your production-ready API endpoint

import type { VercelRequest, VercelResponse } from '@vercel/node';

// Email service integration
async function sendEmailNotification(leadData: any) {
  try {
    const emailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #030213; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin: 10px 0; padding: 8px; background: white; border-left: 4px solid #030213; }
            .urgent { background: #ff4444; color: white; padding: 15px; text-align: center; margin: 20px 0; }
            .contact-info { background: #e8f5e8; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 NEW LEAD ALERT!</h1>
              <p>Benoni Property Agent - New Client Interest</p>
            </div>
            
            <div class="urgent">
              <strong>⚡ URGENT: Contact within 1 hour for best conversion rate!</strong>
            </div>
            
            <div class="content">
              <h2>Lead Details</h2>
              
              <div class="contact-info">
                <h3>📞 Contact Information</h3>
                <div class="field"><strong>Name:</strong> ${leadData.firstName} ${leadData.lastName}</div>
                <div class="field"><strong>Phone:</strong> <a href="tel:${leadData.phone}">${leadData.phone}</a></div>
                <div class="field"><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></div>
              </div>
              
              <h3>🏡 Property Requirements</h3>
              <div class="field"><strong>Budget:</strong> ${leadData.budget || 'Not specified'}</div>
              <div class="field"><strong>Property Type:</strong> ${leadData.propertyType || 'Not specified'}</div>
              <div class="field"><strong>Bedrooms:</strong> ${leadData.bedrooms || 'Not specified'}</div>
              <div class="field"><strong>Location:</strong> ${leadData.location || 'Not specified'}</div>
              <div class="field"><strong>Timeline:</strong> ${leadData.timeline || 'Not specified'}</div>
              
              <h3>💭 What They're Looking For</h3>
              <div class="field">
                <strong>Description:</strong><br>
                ${(leadData.houseDescription || '').replace(/\n/g, '<br>')}
              </div>
              
              ${leadData.message ? `
              <div class="field">
                <strong>Additional Details:</strong><br>
                ${leadData.message.replace(/\n/g, '<br>')}
              </div>
              ` : ''}
              
              <div style="background: #fff3cd; padding: 15px; margin: 20px 0; border: 1px solid #ffeaa7;">
                <h3>🎯 Next Steps</h3>
                <ol>
                  <li>Call them immediately at <strong>${leadData.phone}</strong></li>
                  <li>Have property options ready for ${leadData.location || 'Benoni area'}</li>
                  <li>Prepare market analysis for ${leadData.budget || 'their budget'}</li>
                  <li>Schedule property viewings</li>
                </ol>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; background: #f0f0f0;">
              <p><strong>Lead received:</strong> ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</p>
              <p><small>Benoni Property Agent - Lead Management System</small></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Using Resend API (recommended)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'leads@benonipropertyexpert.co.za', // Replace with your domain
        to: ['mosakatshimolologo@gmail.com'],
        subject: `🏠 NEW LEAD: ${leadData.firstName} ${leadData.lastName} - ${leadData.budget || 'Budget TBC'}`,
        html: emailHTML,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      const error = await response.json();
      throw new Error(error.message || 'Email sending failed');
    }
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, message: `Email failed: ${error.message}` };
  }
}

// SMS service integration
async function sendSMSNotification(leadData: any) {
  try {
    const smsMessage = `🏠 NEW LEAD ALERT!
Name: ${leadData.firstName} ${leadData.lastName}
Phone: ${leadData.phone}
Budget: ${leadData.budget || 'TBC'}
Location: ${leadData.location || 'Benoni'}
Timeline: ${leadData.timeline || 'TBC'}
CALL NOW! Full details in email.`;

    // Using Twilio API (recommended for South Africa)
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(accountSid + ':' + authToken).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: fromNumber,
        To: '+27823146558', // Your phone number in international format
        Body: smsMessage,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'SMS sent successfully' };
    } else {
      const error = await response.json();
      throw new Error(error.message || 'SMS sending failed');
    }
  } catch (error) {
    console.error('SMS error:', error);
    return { success: false, message: `SMS failed: ${error.message}` };
  }
}

// Database storage (optional but recommended)
async function storeLeadInDatabase(leadData: any) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      return { success: false, message: 'Database not configured' };
    }

    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'apikey': process.env.SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        first_name: leadData.firstName,
        last_name: leadData.lastName,
        email: leadData.email,
        phone: leadData.phone,
        budget: leadData.budget,
        property_type: leadData.propertyType,
        bedrooms: leadData.bedrooms,
        location: leadData.location,
        timeline: leadData.timeline,
        house_description: leadData.houseDescription,
        message: leadData.message,
        created_at: new Date().toISOString(),
        source: 'website',
        status: 'new',
        agent_notified: true
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Lead stored successfully' };
    } else {
      return { success: false, message: 'Database storage failed' };
    }
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, message: 'Database storage failed' };
  }
}

// Main API handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Update with your domain in production
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const leadData = req.body;

    // Validate required fields
    if (!leadData.firstName || !leadData.lastName || !leadData.email || !leadData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: firstName, lastName, email, phone'
      });
    }

    // Log the lead (for monitoring)
    console.log('🔥 NEW LEAD RECEIVED:', {
      name: `${leadData.firstName} ${leadData.lastName}`,
      email: leadData.email,
      phone: leadData.phone,
      location: leadData.location,
      budget: leadData.budget,
      timestamp: new Date().toISOString()
    });

    // Send notifications in parallel for speed
    const [emailResult, smsResult, storageResult] = await Promise.all([
      sendEmailNotification(leadData),
      sendSMSNotification(leadData),
      storeLeadInDatabase(leadData)
    ]);

    // Log results
    console.log('📊 NOTIFICATION RESULTS:', {
      email: emailResult.success ? '✅ SENT' : '❌ FAILED',
      sms: smsResult.success ? '✅ SENT' : '❌ FAILED',
      storage: storageResult.success ? '✅ STORED' : '⚠️ SKIPPED'
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Lead processed successfully',
      notifications: {
        email: emailResult.success,
        sms: smsResult.success,
        stored: storageResult.success
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ API Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      timestamp: new Date().toISOString()
    });
  }
}