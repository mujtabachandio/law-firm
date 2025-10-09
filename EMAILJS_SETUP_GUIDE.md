# 📧 EmailJS Setup Guide for Hostinger Deployment

## 🚀 Why EmailJS for Your React Website?

- **No Backend Required**: Works entirely in the browser
- **Perfect for Static Hosting**: Ideal for Hostinger shared hosting
- **Free Tier**: 200 emails/month free
- **Easy Integration**: Simple React integration
- **Professional Templates**: Pre-built email templates

## 📋 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Custom SMTP**
4. Follow the authentication steps
5. **Save your Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Design your template with these variables:
   ```
   {{name}} - Client's name
   {{email}} - Client's email
   {{phone}} - Client's phone
   {{subject}} - Message subject
   {{message}} - Client's message
   ```
4. **Save your Template ID** (you'll need this)

### 4. Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_actual_service_id',
     TEMPLATE_ID: 'your_actual_template_id',
     PUBLIC_KEY: 'your_actual_public_key',
   };
   ```

## 🔧 Configuration Example

```javascript
// src/config/emailjs.js
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
  PUBLIC_KEY: 'user_def456', // Your actual public key
};
```

## 📱 Email Template Example

```html
Subject: New Contact Form Submission from {{name}}

Hello,

You have received a new contact form submission:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Karachi Law Firms
info@karachilawfirms.pk
```

## 🚀 Deployment Steps

### 1. Build Your React App
```bash
npm run build
```

### 2. Upload to Hostinger
1. Upload the `build` folder contents to `public_html`
2. Ensure all files are in the root of `public_html`

### 3. Test Email Functionality
1. Visit your live website
2. Fill out the contact form
3. Submit and check if you receive the email

## 🛠️ Troubleshooting

### Common Issues:

1. **"Service ID not found"**
   - Check your Service ID in EmailJS dashboard
   - Ensure the service is active

2. **"Template ID not found"**
   - Verify your Template ID
   - Check if template is published

3. **"Public Key invalid"**
   - Verify your Public Key
   - Check if your account is verified

4. **Emails not sending**
   - Check browser console for errors
   - Verify all IDs are correct
   - Check EmailJS dashboard for errors

### Testing:
- Use browser developer tools to check console errors
- Verify form data is being sent correctly
- Check EmailJS dashboard for delivery status

## 💡 Pro Tips

1. **Test Locally First**: Test email functionality before deploying
2. **Monitor Usage**: Keep track of your free tier usage
3. **Backup Configuration**: Save your EmailJS credentials securely
4. **Template Testing**: Test your email template with sample data
5. **Mobile Testing**: Ensure forms work on mobile devices

## 🔒 Security Notes

- **Public Key is Safe**: Your public key can be exposed in frontend code
- **Service ID is Safe**: Service ID is also safe to expose
- **Template ID is Safe**: Template ID is safe to expose
- **Never Expose**: Private keys or SMTP credentials

## 📞 Support

- **EmailJS Documentation**: [docs.emailjs.com](https://docs.emailjs.com/)
- **EmailJS Community**: [community.emailjs.com](https://community.emailjs.com/)
- **Hostinger Support**: Available through your hosting dashboard

---

**Your contact forms are now ready to work perfectly on Hostinger! 🎉**
