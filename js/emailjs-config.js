// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// This file should be kept secure and not committed to public repositories

window.EMAILJS_CONFIG = {
    // Your EmailJS Public Key (found in EmailJS dashboard under Account > API Keys)
    PUBLIC_KEY: 'U-9WIOaQjtCWVRm_r',
    
    // Your EmailJS Service ID (found in EmailJS dashboard under Email Services)
    SERVICE_ID: 'service_o2dfgk1',
    
    // Your EmailJS Template ID (found in EmailJS dashboard under Email Templates)
    TEMPLATE_ID: 'template_3ynk99f'
};

// Initialize EmailJS with the public key
if (window.emailjs && window.EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
    emailjs.init(window.EMAILJS_CONFIG.PUBLIC_KEY);
}
