# 🚀 Benoni Property Expert - Real Notifications Setup

## **Quick Start (30 minutes)**

### ✅ **Step 1: Sign up for Services (10 minutes)**

#### **Email Service - Resend (Recommended)**
1. Go to [resend.com](https://resend.com)
2. Click "Sign Up" → use your Google account
3. Verify your email address
4. Copy your API key from the dashboard
5. **Save this**: `RESEND_API_KEY=re_xxxxxxxxxx`

#### **SMS Service - Twilio**
1. Go to [twilio.com](https://twilio.com)
2. Sign up → Complete phone verification
3. Get $10 free trial credit (enough for 50+ SMS)
4. Go to Console → Account → Account SID & Auth Token
5. Buy a phone number: Console → Phone Numbers → Buy a number
6. **Save these**:
   - `TWILIO_ACCOUNT_SID=ACxxxxxxxxxx`
   - `TWILIO_AUTH_TOKEN=xxxxxxxxxx` 
   - `TWILIO_PHONE_NUMBER=+1234567890`

#### **Database - Supabase (Optional but Recommended)**
1. Go to [supabase.com](https://supabase.com)
2. Sign up → Create new project
3. Wait for setup (2-3 minutes)
4. Go to Settings → API → Copy URL & anon key
5. **Save these**:
   - `SUPABASE_URL=https://xxx.supabase.co`
   - `SUPABASE_ANON_KEY=xxxxxxxxxx`

6. **Create leads table** in SQL Editor:
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
  house_description TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  agent_notified BOOLEAN DEFAULT true
);
```

### ✅ **Step 2: Deploy to Vercel (10 minutes)**

#### **Push to GitHub**
1. Create new repository on [github.com](https://github.com)
2. Upload all your project files
3. Commit and push

#### **Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project" → Connect your GitHub repo
3. Click "Deploy" (it will build automatically)

#### **Add Environment Variables**
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable from Step 1:

```
Name: RESEND_API_KEY
Value: re_your_actual_api_key_here

Name: TWILIO_ACCOUNT_SID  
Value: ACyour_actual_sid_here

Name: TWILIO_AUTH_TOKEN
Value: your_actual_token_here

Name: TWILIO_PHONE_NUMBER
Value: +1234567890

Name: SUPABASE_URL
Value: https://xxx.supabase.co

Name: SUPABASE_ANON_KEY
Value: your_actual_key_here
```

4. **Redeploy**: Go to Deployments → Click "..." → Redeploy

### ✅ **Step 3: Test Everything (10 minutes)**

#### **Domain Setup (Optional - for email deliverability)**
If you have a domain (like benonipropertyexpert.co.za):

1. **In Resend dashboard**: 
   - Go to Domains → Add Domain
   - Add DNS records to your domain provider
   - Wait for verification (can take 24 hours)

2. **Update API code**: 
   - Change `from: 'leads@benonipropertyexpert.co.za'` in `/api/submit-lead.ts`

#### **Test Your Setup**
1. Visit your deployed website (Vercel will give you a URL like `https://benoni-property-expert.vercel.app`)
2. Fill out and submit the lead form
3. **Check your phone** for SMS notification (should arrive within 30 seconds)
4. **Check your email** for detailed lead notification
5. **Check Supabase** dashboard → Table Editor → leads (if using database)

---

## **🔧 Customization Options**

### **Update Contact Information**
In `/api/submit-lead.ts`, update:
```typescript
to: ['mosakatshimolologo@gmail.com'], // Your email
To: '+27823146558', // Your phone number
```

### **Customize Email Template**
Edit the `emailHTML` variable in `/api/submit-lead.ts` to match your branding.

### **Add More Fields**
1. Add fields to `LeadCaptureForm.tsx`
2. Update the API to handle new fields
3. Include in email template

---

## **💰 Cost Breakdown**

### **Free Tier Usage:**
- **Resend**: 3,000 emails/month free
- **Twilio**: $10 free credit (~50 SMS)
- **Supabase**: 500MB database free
- **Vercel**: Free hosting

### **After Free Tier:**
- **Email**: ~R300/month (100k emails)
- **SMS**: ~R1.50 per SMS to SA numbers
- **Database**: ~R350/month for Pro tier
- **Hosting**: Free for personal projects

**Estimated cost for 100 leads/month**: ~R500

---

## **📞 Support & Troubleshooting**

### **Email Not Sending?**
1. Check RESEND_API_KEY is correct
2. Verify domain (if using custom domain)
3. Check Vercel function logs

### **SMS Not Sending?**  
1. Check all 3 Twilio variables are set
2. Verify phone number format: `+27823146558`
3. Check Twilio console for errors/credits

### **Form Submission Failing?**
1. Check browser console for errors
2. Verify API endpoint is deployed: `https://yourapp.vercel.app/api/submit-lead`
3. Check Vercel function logs

### **Database Not Working?**
1. Verify Supabase URL/key
2. Check table exists with correct schema
3. Check Supabase logs

### **Getting Help:**
- **Resend**: help@resend.com
- **Twilio**: help@twilio.com  
- **Supabase**: support@supabase.com
- **Vercel**: support@vercel.com

---

## **🎯 Next Steps After Setup**

1. **Custom Domain**: Point your domain to Vercel
2. **Email Analytics**: Monitor open/click rates in Resend
3. **Lead Management**: Build dashboard to manage leads
4. **A/B Testing**: Test different form designs
5. **Follow-up Automation**: Set up email sequences

---

**🚨 IMPORTANT**: Replace all example values with your actual API keys. Never commit API keys to GitHub - they should only be in Vercel environment variables.