# 🔐 Environment Variables Setup

Copy these environment variables to your deployment platform (Vercel, Netlify, etc.)

## 📧 EMAIL SERVICE VARIABLES

### For Resend:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

### For SendGrid:

```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxx
```

## 📱 SMS SERVICE VARIABLES

### For Twilio:

```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+1234567890
```

### For SMS Portal:

```bash
SMS_PORTAL_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

## 🗃️ DATABASE VARIABLES

### For Supabase:

```bash
SUPABASE_URL=https://xxxxxxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

## 🌐 DOMAIN SETTINGS

```bash
ALLOWED_ORIGIN=https://yourdomain.com
FROM_EMAIL_DOMAIN=yourdomain.com
```

---

## 📋 Vercel Deployment Steps

1. **Install Vercel CLI**:

```bash
npm i -g vercel
```

2. **Login to Vercel**:

```bash
vercel login
```

3. **Deploy your project**:

```bash
vercel
```

4. **Add environment variables**:
   - Go to your project dashboard on vercel.com
   - Click "Settings" → "Environment Variables"
   - Add all the variables above
   - Redeploy: `vercel --prod`

## 📋 Netlify Deployment Steps

1. **Connect GitHub repo** to Netlify

2. **Add environment variables**:
   - Go to Site Settings → Build & deploy → Environment variables
   - Add all the variables above

3. **Configure build settings**:

```bash
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

## 🧪 Testing Your Deployment

1. **Test API endpoint**:

```bash
curl -X POST https://yourapp.vercel.app/api/submit-lead \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "0823146558",
    "budget": "R1,000,000 - R2,000,000",
    "propertyType": "single-family",
    "bedrooms": "3",
    "location": "benoni-central",
    "timeline": "immediately",
    "requirements": "Test submission"
  }'
```

2. **Check your phone and email** for notifications

3. **Verify database** storage in Supabase dashboard

## 🔍 Monitoring & Logs

### Vercel Logs:

```bash
vercel logs https://yourapp.vercel.app
```

### Netlify Logs:

- Go to Site dashboard → Functions tab
- Click on your function to see logs

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**:
   - Make sure `ALLOWED_ORIGIN` matches your domain
   - Check API route CORS headers

2. **Environment Variables Not Working**:
   - Redeploy after adding variables
   - Check variable names (case sensitive)

3. **SMS Not Sending**:
   - Verify phone number format (+27 for SA)
   - Check SMS provider dashboard for credits

4. **Email Going to Spam**:
   - Complete domain verification
   - Add SPF/DKIM records to DNS

5. **Database Errors**:
   - Check Supabase API keys
   - Verify table structure matches schema