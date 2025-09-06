# EmailJS Setup Instructions

This document explains how to set up EmailJS for the contact form functionality on your portfolio website.

## Prerequisites

1. An EmailJS account (sign up at [emailjs.com](https://www.emailjs.com/))
2. A Gmail account (or other supported email service)

## Step 1: Create EmailJS Account and Service

1. Go to [emailjs.com](https://www.emailjs.com/) and create an account
2. Once logged in, go to **Email Services** in the dashboard
3. Click **Add New Service**
4. Choose **Gmail** (or your preferred email service)
5. Follow the setup instructions to connect your Gmail account
6. Note down your **Service ID** (e.g., `service_abc123`)

## Step 2: Create Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 3: Get Your Public Key

1. Go to **Account** > **General** in the EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## Step 4: Configure Your Website

1. Open the file `js/emailjs-config.js`
2. Replace the placeholder values with your actual credentials:

```javascript
window.EMAILJS_CONFIG = {
    // Replace with your actual EmailJS Public Key
    PUBLIC_KEY: 'your_actual_public_key_here',
    
    // Replace with your actual EmailJS Service ID
    SERVICE_ID: 'your_actual_service_id_here',
    
    // Replace with your actual EmailJS Template ID
    TEMPLATE_ID: 'your_actual_template_id_here'
};
```

## Step 5: Test the Contact Form

1. Open your website in a browser
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email for the message

## Security Notes

- The `emailjs-config.js` file contains your credentials
- **DO NOT** commit this file to public repositories
- Add `js/emailjs-config.js` to your `.gitignore` file
- Consider using environment variables for production deployments

## Troubleshooting

### Form shows "EmailJS is not properly configured"
- Check that all three values in `emailjs-config.js` are updated
- Ensure the file is being loaded correctly
- Check browser console for any JavaScript errors

### Emails not being sent
- Verify your EmailJS service is active
- Check that your email template is published
- Ensure your Gmail account has "Less secure app access" enabled (if using Gmail)
- Check the EmailJS dashboard for any error logs

### Template variables not working
- Ensure your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`
- Check that the template is saved and published

## Support

For EmailJS-specific issues, refer to the [EmailJS documentation](https://www.emailjs.com/docs/) or contact their support team.
