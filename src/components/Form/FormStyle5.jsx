import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export default function FormStyle5() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus === 'success' && (
        <div className="alert alert-success cs_mb_30" role="alert">
          <strong>Success!</strong> Your message has been sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-danger cs_mb_30" role="alert">
          <strong>Error!</strong> Failed to send message. Please try again.
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit}>
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-white"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-white"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_25 bg-white resize-none"
          name="message"
          placeholder="Message here ..."
          cols={5}
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden w-100"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
}
