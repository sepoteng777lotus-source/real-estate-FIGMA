// Real Email & SMS Notification Service
// This requires a backend server environment with API keys

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  propertyType: string;
  bedrooms: string;
  location: string;
  timeline: string;
  requirements: string;
}

export interface NotificationResult {
  success: boolean;
  message: string;
  details?: any;
}

class RealNotificationService {
  private readonly agentEmail = 'mosakatshimolologo@gmail.com';
  private readonly agentPhone = '+27823146558'; // South African format
  
  // Email service integration - RESEND (Recommended)
  async sendEmailWithResend(leadData: LeadData): Promise<NotificationResult> {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'leads@yourdomain.com', // Your verified domain
          to: [this.agentEmail],
          subject: `🏠 NEW LEAD: ${leadData.firstName} ${leadData.lastName} - ${leadData.budget}`,
          html: this.generateEmailHTML(leadData),
          text: this.generateEmailText(leadData),
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        return {
          success: true,
          message: 'Email sent successfully',
          details: result
        };
      } else {
        throw new Error(result.message || 'Email sending failed');
      }
    } catch (error) {
      console.error('Resend email error:', error);
      return {
        success: false,
        message: `Email failed: ${error.message}`
      };
    }
  }

  // Alternative: SendGrid Email Service
  async sendEmailWithSendGrid(leadData: LeadData): Promise<NotificationResult> {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: this.agentEmail }],
            subject: `🏠 NEW LEAD: ${leadData.firstName} ${leadData.lastName} - ${leadData.budget}`
          }],
          from: { 
            email: 'leads@yourdomain.com',
            name: 'Benoni Property Agent'
          },
          content: [
            {
              type: 'text/html',
              value: this.generateEmailHTML(leadData)
            },
            {
              type: 'text/plain',
              value: this.generateEmailText(leadData)
            }
          ]
        }),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Email sent via SendGrid'
        };
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error('SendGrid email error:', error);
      return {
        success: false,
        message: `SendGrid failed: ${error.message}`
      };
    }
  }

  // SMS Service - TWILIO (International)
  async sendSMSWithTwilio(leadData: LeadData): Promise<NotificationResult> {
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const fromNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio number

      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(accountSid + ':' + authToken)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          From: fromNumber,
          To: this.agentPhone,
          Body: this.generateSMSText(leadData),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: 'SMS sent via Twilio',
          details: result
        };
      } else {
        throw new Error(result.message || 'SMS sending failed');
      }
    } catch (error) {
      console.error('Twilio SMS error:', error);
      return {
        success: false,
        message: `SMS failed: ${error.message}`
      };
    }
  }

  // SMS Service - SMS PORTAL (South African Provider)
  async sendSMSWithSMSPortal(leadData: LeadData): Promise<NotificationResult> {
    try {
      const response = await fetch('https://rest.smsportal.com/v1/bulkmessages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SMS_PORTAL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{
            destination: this.agentPhone.replace('+27', ''), // Remove country code
            content: this.generateSMSText(leadData),
            source: 'BenoniProp' // Your sender ID
          }]
        }),
      });

      const result = await response.json();

      if (response.ok && result.successful) {
        return {
          success: true,
          message: 'SMS sent via SMS Portal',
          details: result
        };
      } else {
        throw new Error(result.error || 'SMS sending failed');
      }
    } catch (error) {
      console.error('SMS Portal error:', error);
      return {
        success: false,
        message: `SMS Portal failed: ${error.message}`
      };
    }
  }

  // Database storage - SUPABASE
  async storeLeadInSupabase(leadData: LeadData): Promise<NotificationResult> {
    try {
      const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': process.env.SUPABASE_ANON_KEY!,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          ...leadData,
          created_at: new Date().toISOString(),
          source: 'website',
          status: 'new',
          agent_notified: true
        }),
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Lead stored in database'
        };
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error('Supabase storage error:', error);
      return {
        success: false,
        message: `Database storage failed: ${error.message}`
      };
    }
  }

  // Main method to process lead with all services
  async processLead(leadData: LeadData): Promise<{
    emailResult: NotificationResult;
    smsResult: NotificationResult;
    storageResult: NotificationResult;
  }> {
    try {
      // Run all services in parallel for speed
      const [emailResult, smsResult, storageResult] = await Promise.all([
        this.sendEmailWithResend(leadData), // or sendEmailWithSendGrid
        this.sendSMSWithTwilio(leadData), // or sendSMSWithSMSPortal  
        this.storeLeadInSupabase(leadData)
      ]);

      // Log results for monitoring
      console.log('📊 LEAD PROCESSING RESULTS:');
      console.log(`📧 Email: ${emailResult.success ? '✅' : '❌'} ${emailResult.message}`);
      console.log(`📱 SMS: ${smsResult.success ? '✅' : '❌'} ${smsResult.message}`);
      console.log(`💾 Storage: ${storageResult.success ? '✅' : '❌'} ${storageResult.message}`);

      return { emailResult, smsResult, storageResult };
    } catch (error) {
      console.error('❌ Lead processing error:', error);
      
      return {
        emailResult: { success: false, message: 'Email notification failed' },
        smsResult: { success: false, message: 'SMS notification failed' },
        storageResult: { success: false, message: 'Database storage failed' }
      };
    }
  }

  // Email HTML template
  private generateEmailHTML(leadData: LeadData): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Lead from Benoni Property Expert</title>
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
              <p>Someone is interested in buying a home in Benoni</p>
            </div>
            
            <div class="urgent">
              <strong>⚡ ACTION REQUIRED: Contact within 1 hour for best conversion!</strong>
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
              <div class="field"><strong>Budget Range:</strong> ${leadData.budget}</div>
              <div class="field"><strong>Property Type:</strong> ${leadData.propertyType}</div>
              <div class="field"><strong>Bedrooms:</strong> ${leadData.bedrooms}</div>
              <div class="field"><strong>Preferred Location:</strong> ${leadData.location}</div>
              <div class="field"><strong>Timeline:</strong> ${leadData.timeline}</div>
              
              <h3>💭 What They're Looking For</h3>
              <div class="field">
                <strong>Requirements:</strong><br>
                ${leadData.requirements.replace(/\n/g, '<br>')}
              </div>
              
              <div style="background: #fff3cd; padding: 15px; margin: 20px 0; border: 1px solid #ffeaa7;">
                <h3>🎯 Next Steps</h3>
                <ol>
                  <li>Call them immediately at <strong>${leadData.phone}</strong></li>
                  <li>Have property options ready for ${leadData.location}</li>
                  <li>Prepare market analysis for ${leadData.budget} range</li>
                  <li>Schedule viewing appointments</li>
                </ol>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; background: #f0f0f0;">
              <p><strong>Lead received:</strong> ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</p>
              <p><small>Benoni Property Expert Lead Management System</small></p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  // Email plain text template
  private generateEmailText(leadData: LeadData): string {
    return `
🏠 NEW LEAD ALERT - BENONI PROPERTY EXPERT

⚡ ACTION REQUIRED: Contact within 1 hour for best conversion!

CONTACT INFORMATION:
Name: ${leadData.firstName} ${leadData.lastName}
Phone: ${leadData.phone}
Email: ${leadData.email}

PROPERTY REQUIREMENTS:
Budget: ${leadData.budget}
Property Type: ${leadData.propertyType}
Bedrooms: ${leadData.bedrooms}
Location: ${leadData.location}
Timeline: ${leadData.timeline}

WHAT THEY'RE LOOKING FOR:
${leadData.requirements}

NEXT STEPS:
1. Call them immediately at ${leadData.phone}
2. Have property options ready for ${leadData.location}
3. Prepare market analysis for ${leadData.budget} range
4. Schedule viewing appointments

Lead received: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}
    `;
  }

  // SMS text template (160 character limit aware)
  private generateSMSText(leadData: LeadData): string {
    return `🏠 NEW LEAD: ${leadData.firstName} ${leadData.lastName}
📞 ${leadData.phone}
💰 ${leadData.budget}
📍 ${leadData.location}
⏰ ${leadData.timeline}
CALL NOW! Full details in email.`;
  }
}

export const realNotificationService = new RealNotificationService();