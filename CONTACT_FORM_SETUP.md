# Contact Form Setup Guide

## 🚨 **Current Issue**: Contact form works locally but not in deployment

## 🔧 **Solutions Implemented**

### 1. **Dual Method Approach**

- **Primary**: Formspree (works locally)
- **Fallback**: EmailJS (more reliable for deployment)

### 2. **Environment Variables Setup**

#### For Vercel Deployment:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:

```
NEXT_PUBLIC_FORMSPREE_FORM_ID=FORMSPREE_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
```

### 3. **Formspree Configuration**

#### Step 1: Verify Formspree Form

1. Go to [Formspree.io](https://formspree.io)
2. Login to your account
3. Find form ID: `xqadwnbj`
4. Check if it's active and properly configured

#### Step 2: Domain Whitelisting

1. In Formspree dashboard, go to your form settings
2. Add your deployed domain to allowed domains:
   - `https://your-portfolio.vercel.app`
   - `https://your-portfolio.vercel.app/*`

#### Step 3: CORS Settings

1. Enable CORS for your domain
2. Set allowed origins to include your Vercel URL

### 4. **EmailJS Setup (Backup Method)**

#### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create a free account
3. Verify your email

#### Step 2: Create Email Service

1. Go to Email Services
2. Add Gmail service
3. Note the Service ID (will be something like `service_xxxxx`)

#### Step 3: Create Email Template

1. Go to Email Templates
2. Create new template with ID: `template_contact`
3. Use this template:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

#### Step 4: Get Public Key

1. Go to Account → API Keys
2. Copy your Public Key
3. Add it to Vercel environment variables

### 5. **Testing Steps**

#### Local Testing:

```bash
npm run dev
```

- Test contact form
- Check browser console for errors
- Verify emails are received

#### Deployment Testing:

1. Deploy to Vercel
2. Test contact form on live site
3. Check Vercel function logs
4. Monitor both Formspree and EmailJS dashboards

### 6. **Debugging Steps**

#### Check Browser Console:

1. Open Developer Tools (F12)
2. Go to Console tab
3. Submit form and check for errors
4. Look for CORS or network errors

#### Check Network Tab:

1. Open Developer Tools
2. Go to Network tab
3. Submit form
4. Check if requests are being made
5. Look at response status codes

#### Common Issues:

- **CORS Error**: Domain not whitelisted in Formspree
- **403 Forbidden**: Form ID incorrect or form inactive
- **Network Error**: Check if endpoint is accessible
- **Environment Variables**: Not properly set in Vercel

### 7. **Alternative Solutions**

#### Option A: Use Netlify Forms (if switching to Netlify)

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

#### Option B: Use Vercel's API Routes

Create `pages/api/contact.ts`:

```typescript
export default async function handler(req, res) {
  // Handle form submission server-side
}
```

#### Option C: Use Resend (Modern Alternative)

```bash
npm install resend
```

### 8. **Quick Fix for Immediate Deployment**

If you need a quick fix, you can temporarily use a simple mailto link:

```html
<a
  href="mailto:aldricivan8@gmail.com?subject=Portfolio Contact&body=Name: [Your Name]%0AEmail: [Your Email]%0AMessage: [Your Message]"
>
  Send Email Directly
</a>
```

## 🎯 **Recommended Action Plan**

1. **Immediate**: Set up EmailJS as backup (15 minutes)
2. **Short-term**: Fix Formspree domain whitelisting (5 minutes)
3. **Long-term**: Consider switching to a more reliable service like Resend

## 📞 **Need Help?**

If you're still having issues:

1. Check the browser console for specific error messages
2. Verify all environment variables are set correctly
3. Test with a simple form first
4. Consider using a different email service provider

---

**Last Updated**: $(date)
**Status**: Contact form has dual fallback system implemented
