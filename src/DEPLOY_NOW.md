# 🚀 DEPLOY YOUR WEBSITE NOW - 5 MINUTE GUIDE

## Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

## Step 2: Login to Vercel
```bash
vercel login
```
(Follow the prompts to authenticate)

## Step 3: Deploy Your Project
```bash
vercel
```

Answer the prompts:
- Set up and deploy? **Y**
- Which scope? (Choose your account)
- Link to existing project? **N**
- Project name: **benoni-property-expert** (or your choice)
- Directory: **.** (current directory)
- Want to modify settings? **N**

**Your website will be live in 2-3 minutes!** 🎉

## Step 4: Add Environment Variables

1. Go to your Vercel dashboard at [vercel.com](https://vercel.com)
2. Click on your project
3. Go to Settings → Environment Variables
4. Add these variables:

```bash
VITE_RESEND_API_KEY=re_xxxxxxxxx
VITE_TWILIO_ACCOUNT_SID=ACxxxxxxxxx
VITE_TWILIO_AUTH_TOKEN=xxxxxxxxx
VITE_TWILIO_PHONE_NUMBER=+27823146558
```

## Step 5: Redeploy with Environment Variables
```bash
vercel --prod
```

## 🎯 Your Website is Now LIVE!

- Your URL will be: `https://benoni-property-expert.vercel.app` (or similar)
- Test the lead form immediately
- Check for email notifications at: mosakatshimolologo@gmail.com
- Check for SMS notifications at: 0823146558

## Need API Keys?

### For Email (Resend):
1. Go to [resend.com](https://resend.com)
2. Sign up → Create API Key
3. Copy the key (starts with `re_`)

### For SMS (Twilio):
1. Go to [twilio.com/try-twilio](https://twilio.com/try-twilio)
2. Sign up → Get Account SID & Auth Token
3. Buy a phone number for R50-100/month

## Alternative: Quick Upload Method

If CLI doesn't work:
1. Run `npm run build` 
2. Go to [vercel.com](https://vercel.com)
3. Drag & drop your entire project folder
4. Add environment variables in dashboard
5. Done!

## 🔍 Immediate Google Setup (After Deployment)

1. **Google Search Console**: Add your new URL
2. **Google Business Profile**: Update website field with your new URL
3. **Request Indexing**: Submit your homepage to Google

Your professional real estate website will be live and ready to capture leads in Benoni! 🏡✨