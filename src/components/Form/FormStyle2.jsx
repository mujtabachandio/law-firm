import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export default function FormStyle2() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus === 'success' && (
        <div className="alert alert-success cs_mb_30" role="alert">
          <strong>Success!</strong> Your message has been sent successfully. We'll get back to you soon!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-danger cs_mb_30" role="alert">
          <strong>Error!</strong> Failed to send message. Please try again or contact us directly.
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className="row" id="contactForm">
        <div className="col-lg-6">
          <input
            className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-12">
          <textarea
            className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_40 bg-gray"
            name="message"
            placeholder="Message here ..."
            cols={35}
            rows={7}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* In-form submit button for accessibility; external CTA can still target form via form="contactForm" */}
        <div className="col-lg-12">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </div>

      </form>
    </div>
  );
}
