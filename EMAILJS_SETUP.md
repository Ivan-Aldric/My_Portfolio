# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form emails at `aldricivan8@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (since you're using Gmail)
4. Connect your Gmail account (`aldricivan8@gmail.com`)
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Your Code

Replace the placeholder values in `src/components/contact.tsx`:

```typescript
// Replace these values with your actual EmailJS credentials
const serviceId = "YOUR_SERVICE_ID"; // Your Gmail service ID
const templateId = "YOUR_TEMPLATE_ID"; // Your template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Your public key
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Gmail inbox at `aldricivan8@gmail.com`

## EmailJS Free Plan Limits

- 200 emails per month
- Perfect for portfolio contact forms
- No credit card required

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for error messages
- Verify your Gmail account is properly connected
- Ensure the template variables match the code

## Security Note

The public key is safe to use in frontend code. EmailJS handles the security on their end.
