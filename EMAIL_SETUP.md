# Email Setup Guide for Contact Form

## Quick Setup (Gmail - Recommended for Development)

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled

### Step 2: Generate App Password

1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" for the app and "Other" for device
4. Enter "TR Trade Contact Form" as the device name
5. Click "Generate"
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Step 4: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to your website and fill out the contact form
3. Check if the email arrives at hasibul.islam.1872@gmail.com

## Alternative Email Services (Production Recommended)

### SendGrid Setup

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Update your API route to use SendGrid instead of Gmail
4. Add `SENDGRID_API_KEY` to your environment variables

### Mailgun Setup

1. Sign up at [Mailgun](https://www.mailgun.com/)
2. Verify your domain
3. Get your API key and domain
4. Update environment variables accordingly

## Security Notes

- Never commit your `.env.local` file to version control
- Use different credentials for development and production
- Consider using a dedicated email service for production applications
- The `.env.local` file is already in `.gitignore`

## Troubleshooting

### Common Issues:

1. **"Invalid login"**: Make sure you're using an app password, not your regular Gmail password
2. **"Less secure app access"**: This is deprecated; use app passwords instead
3. **"Network error"**: Check your internet connection and email service status
4. **Emails not arriving**: Check spam folder, verify email address, ensure app password is correct

### Testing Tips:

- Test with different email addresses
- Check both success and error scenarios
- Verify the email format and content
- Test form validation by submitting incomplete forms

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform
2. Consider using a professional email service (SendGrid, Mailgun, Amazon SES)
3. Implement rate limiting to prevent spam
4. Add CAPTCHA for additional security
5. Set up email monitoring and logging
