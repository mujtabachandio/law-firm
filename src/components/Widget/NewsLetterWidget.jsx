import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export default function NewsLetterWidget({ title, subTitle }) {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create a temporary form data object for newsletter subscription
      const formData = {
        email: email,
        name: 'Newsletter Subscriber',
        subject: 'Newsletter Subscription',
        message: 'New newsletter subscription request',
        phone: 'N/A'
      };

      // Send using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cs_newsletter cs_style_1">
      <h2 className="cs_newsletter_title text-white cs_fs_22 cs_mb_9">
        {title}
      </h2>
      <p className="cs_newsletter_subtitle cs_mb_26">{subTitle}</p>
      
      {submitStatus === 'success' && (
        <div className="alert alert-success cs_mb_20" role="alert" style={{ fontSize: '12px', padding: '8px 12px' }}>
          <strong>Success!</strong> You've been subscribed to our newsletter!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-danger cs_mb_20" role="alert" style={{ fontSize: '12px', padding: '8px 12px' }}>
          <strong>Error!</strong> Subscription failed. Please try again.
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className="cs_newsletter_form position-relative">
        <input
          type="email"
          className="cs_newsletter_input text-white cs_fs_14 cs_rounded_5 border-0 w-100 cs_pt_10"
          placeholder="Enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="cs_newsletter_btn cs_fs_14 cs_rounded_5 cs_transition_4 bg-accent position-absolute text-uppercase"
        >
          <span>{isSubmitting ? '...' : 'Go'}</span>
        </button>
      </form>
    </div>
  );
}
