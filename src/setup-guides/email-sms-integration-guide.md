# 🚀 Real Email & SMS Integration Guide

This guide shows you how to connect your Benoni Property Expert website to real email and SMS services.

## 📧 EMAIL SERVICES

### Option 1: Resend (Recommended - Easy Setup)

**Why Resend?**
- Simple API, great for developers
- Reliable delivery to Gmail/Outlook
- Good free tier (3,000 emails/month)
- Excellent deliverability

**Setup Steps:**

1. **Sign up**: Go to [resend.com](https://resend.com)
2. **Verify domain**: Add your domain (e.g., benonipropertyexpert.co.za)
3. **Get API key**: Copy your API key from dashboard
4. **Environment variables**:
```bash
RESEND_API_KEY=re_your_api_key_here
```

**Domain Setup:**
```
# Add these DNS records to your domain:
TXT record: resend._domainkey.yourdomain.com
Value: [Provided by Resend]

MX record: yourdomain.com
Value: feedback-smtp.us-east-1.amazonses.com
```

### Option 2: SendGrid (Enterprise-Grade)

**Why SendGrid?**
- Very reliable enterprise solution
- Advanced analytics and tracking
- 100 emails/day free tier
- Good for scaling

**Setup Steps:**

1. **Sign up**: Go to [sendgrid.com](https://sendgrid.com)
2. **Verify domain**: Complete domain authentication
3. **Create API key**: Generate API key with Mail Send permissions
4. **Environment variables**:
```bash
SENDGRID_API_KEY=SG.your_api_key_here
```

### Option 3: Gmail SMTP (Quick Start)

**For testing only - use Resend/SendGrid for production**

```javascript
// Using Nodemailer with Gmail
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-gmail@gmail.com',
    pass: 'your-app-password' // Enable 2FA and use App Password
  }
});
```

## 📱 SMS SERVICES

### Option 1: Twilio (Global - Recommended)

**Why Twilio?**
- Works globally including South Africa
- Reliable delivery
- Good documentation
- Pay-as-you-go pricing (~R1.50/SMS)

**Setup Steps:**

1. **Sign up**: Go to [twilio.com](https://twilio.com)
2. **Get phone number**: Purchase a Twilio phone number
3. **Get credentials**: Account SID, Auth Token from console
4. **Environment variables**:
```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
```

### Option 2: SMS Portal (South African)

**Why SMS Portal?**
- Local South African provider
- Competitive rates for SA numbers
- Good for high volume
- Local support

**Setup Steps:**

1. **Sign up**: Go to [smsportal.com](https://www.smsportal.com)
2. **Add credits**: Purchase SMS credits
3. **Get API key**: Generate API key from dashboard
4. **Environment variables**:
```bash
SMS_PORTAL_API_KEY=your_api_key_here
```

## 🗃️ DATABASE STORAGE

### Supabase (Recommended)

**Setup Steps:**

1. **Create project**: Go to [supabase.com](https://supabase.com)
2. **Create leads table**:
```sql
CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  budget TEXT,
  property_type TEXT,
  bedrooms TEXT,
  location TEXT,
  timeline TEXT,
  requirements TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  agent_notified BOOLEAN DEFAULT false
);
```

3. **Environment variables**:
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
```

## ⚙️ DEPLOYMENT OPTIONS

### Option 1: Vercel (Easy Deployment)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Create API route** (`/api/submit-lead.js`):
```javascript
import { realNotificationService } from '../services/real-notification-service';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const leadData = req.body;
    const result = await realNotificationService.processLead(leadData);
    
    res.status(200).json({
      success: true,
      message: 'Lead processed successfully',
      notifications: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to process lead',
      error: error.message
    });
  }
}
```

3. **Deploy**:
```bash
vercel
```

4. **Set environment variables** in Vercel dashboard.

### Option 2: Netlify Functions

1. **Create function** (`/netlify/functions/submit-lead.js`):
```javascript
const { realNotificationService } = require('../../services/real-notification-service');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const leadData = JSON.parse(event.body);
    const result = await realNotificationService.processLead(leadData);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Lead processed successfully',
        notifications: result
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Failed to process lead',
        error: error.message
      })
    };
  }
};
```

## 🔧 FRONTEND INTEGRATION

Update your form submission to call the real API:

```javascript
// In LeadCaptureForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const result = await response.json();

    if (result.success) {
      toast.success('Thank you! I\'ve been notified and will contact you within the hour.');
      // Reset form
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    toast.error('Something went wrong. Please call me directly at 082 314 6558.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 💰 COST BREAKDOWN

### Email Services:
- **Resend**: Free (3,000/month), then $20/month
- **SendGrid**: Free (100/day), then $14.95/month  
- **Gmail**: Free (with limits)

### SMS Services:
- **Twilio**: ~R1.50 per SMS to SA numbers
- **SMS Portal**: ~R0.35 per SMS (bulk rates)

### Database:
- **Supabase**: Free tier (500MB), then $25/month

**Monthly estimate for 50 leads**: ~R200-400 total

## ✅ TESTING CHECKLIST

1. **Email delivery test**:
   - Send test email to your Gmail
   - Check spam folder
   - Verify all lead data appears correctly

2. **SMS delivery test**:
   - Send test SMS to your phone
   - Verify message format and timing
   - Test with different phone number formats

3. **Database storage test**:
   - Submit test lead
   - Check Supabase dashboard
   - Verify all fields are saved

4. **Error handling test**:
   - Test with invalid API keys
   - Test network failures
   - Verify graceful fallbacks

## 🚨 SECURITY NOTES

1. **Never expose API keys** in frontend code
2. **Use environment variables** for all secrets
3. **Validate all input data** on server-side
4. **Rate limit** your API endpoints
5. **Log errors** but don't expose sensitive data

## 📞 SUPPORT CONTACTS

- **Resend**: [support@resend.com](mailto:support@resend.com)
- **SendGrid**: [support@sendgrid.com](mailto:support@sendgrid.com)  
- **Twilio**: [help@twilio.com](mailto:help@twilio.com)
- **SMS Portal**: +27 11 466 7978
- **Supabase**: [support@supabase.com](mailto:support@supabase.com)

---

Once you choose your providers and set up accounts, I can help you implement the specific integration code for your chosen services!