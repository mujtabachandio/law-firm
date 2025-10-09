// EmailJS Configuration
// IMPORTANT: You need to set up EmailJS with your actual credentials
// Follow the setup guide in EMAILJS_SETUP_GUIDE.md

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xybfbag', // Your EmailJS service ID
  TEMPLATE_ID: 'template_2j5c4jv', // Your EmailJS template ID
  PUBLIC_KEY: 'SjKIguX8S66n6LrOb', // Your EmailJS public key
};

// EmailJS initialization
export const initEmailJS = () => {
  // This function can be called when the app starts
  // You can add any initialization logic here if needed
  console.log('EmailJS configuration loaded');
};

// Template variables that should be included in your EmailJS template:
// {{name}} - Client's name
// {{email}} - Client's email  
// {{phone}} - Client's phone number
// {{subject}} - Message subject
// {{message}} - Client's message
