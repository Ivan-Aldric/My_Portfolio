# Formspree Setup Guide

This guide will help you set up Formspree to receive contact form emails directly at `aldricivan8@gmail.com`.

## Step 1: Create Formspree Account

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form

1. In your Formspree dashboard, click **"New Form"**
2. Give your form a name: "Portfolio Contact Form"
3. Set the email destination to: `aldricivan8@gmail.com`
4. Copy the form endpoint URL (it will look like `https://formspree.io/f/xpwgkqpn`)

## Step 3: Update Your Code

Replace the form endpoint in `src/components/contact.tsx`:

```typescript
// Replace this URL with your actual Formspree endpoint
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## Step 4: Configure Form Settings

1. In your Formspree form settings:
   - **Email To**: `aldricivan8@gmail.com`
   - **Reply To**: `{{email}}` (so you can reply directly to the sender)
   - **Subject**: `New Contact Form Message - {{subject}}`

## Step 5: Test the Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Gmail inbox at `aldricivan8@gmail.com`

## Formspree Free Plan Features

- ✅ **50 submissions per month** (perfect for portfolio)
- ✅ **Direct email delivery** to your inbox
- ✅ **Spam protection** built-in
- ✅ **No backend required**
- ✅ **Reliable delivery**

## What You'll Receive

When someone contacts you, you'll get an email like this:

```
To: aldricivan8@gmail.com
From: noreply@formspree.io
Subject: New Contact Form Message - Project Inquiry

Name: John Smith
Email: john@example.com
Subject: Project Inquiry

Message:
Hi Ivan, I'm interested in working with you on a web development project...

Reply-To: john@example.com
```

## Troubleshooting

- Make sure the form endpoint URL is correct
- Check that your email is verified in Formspree
- Ensure the form is not in "test mode"
- Check your spam folder if emails don't arrive

## Security

- Formspree handles all security and spam protection
- Your email address is safe and not exposed in the frontend code
- All submissions are logged in your Formspree dashboard
