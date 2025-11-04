# Email Setup Guide

## Image Error Fix
The image error has been fixed by adding the `unoptimized` prop to the Image component. The avatar image at `/avatars/avatar.jpg` should now load correctly.

## Email Setup Instructions

Currently, the contact form sends data to the API endpoint but doesn't actually send emails yet. To enable email sending, you have several options:

### Option 1: Resend (Recommended - Free Tier Available)

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Sign up at https://resend.com
   - Verify your domain or use their test domain
   - Get your API key from the dashboard

3. **Set Environment Variable:**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Update API Route:**
   Uncomment the Resend code in `app/api/contact/route.ts`:
   - Remove the `/* */` comments around the Resend code
   - Update the `from` email address with your verified domain
   - Update the `to` email address to your email

### Option 2: SendGrid

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Sign up at https://sendgrid.com
   - Create an API key in the dashboard

3. **Set Environment Variable:**
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

4. **Update API Route:**
   Replace the Resend code with:
   ```typescript
   const sgMail = require('@sendgrid/mail')
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   
   const msg = {
     to: 'irulappan8720@gmail.com',
     from: 'your-verified-email@yourdomain.com',
     subject: `Portfolio Contact: ${subject}`,
     text: emailContent,
     replyTo: email,
   }
   
   await sgMail.send(msg)
   ```

### Option 3: Nodemailer with SMTP (Gmail, Outlook, etc.)

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Set Environment Variables:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. **Update API Route:**
   ```typescript
   const nodemailer = require('nodemailer')
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT || '587'),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   })
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'irulappan8720@gmail.com',
     subject: `Portfolio Contact: ${subject}`,
     text: emailContent,
     replyTo: email,
   })
   ```

## Current Status

- ✅ Contact form is functional
- ✅ API endpoint is created at `/api/contact`
- ✅ Form data is validated
- ⚠️ Email sending needs to be configured (currently logs to console in development)

## Testing

In development mode, the API will log the email content to the console. Check your terminal/console to see the email data when you submit the form.

## Security Notes

- Never commit your `.env.local` file to git
- Use environment variables for all sensitive data
- Verify email domains before using them in production
- Consider adding rate limiting to prevent spam

