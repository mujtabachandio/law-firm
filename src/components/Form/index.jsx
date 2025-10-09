import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export default function ContactForm({ variant }) {
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

      <form
        ref={form}
        onSubmit={handleSubmit}
        className={`cs_contact_form bg-white cs_pt_40 cs_pl_50 cs_pr_50 cs_pb_40 cs_pl_lg_25 cs_pr_lg_25 position-relative cs_rounded_20 ${
          variant ? variant : ''
        }`}
        style={{ 
          backgroundImage: `url('/images/contact_bg_pattern.svg')`,
          backgroundSize: '150px 150px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          backgroundOpacity: '0.1'
        }}
      >
        <div className="cs_section_heading cs_style_1 d-flex align-items-center text-center cs_mb_20">
          <div className="cs_section_heading_in">
            <h2 className="cs_fs_36 cs_fs_lg_32 m-0">Contact Us</h2>
          </div>
        </div>
        <input
          className="form-control cs_fs_16 cs_rounded_5 border-0 cs_mb_12 bg-gray"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control cs_fs_16 cs_rounded_5 border-0 cs_mb_12 bg-gray"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control cs_fs_16 cs_rounded_5 border-0 cs_mb_12 bg-gray"
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control cs_fs_16 cs_rounded_5 border-0 cs_mb_12 bg-gray"
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <textarea
          className="form-control cs_fs_16 cs_rounded_5 border-0 cs_mb_20 bg-gray"
          name="message"
          placeholder="Message here ..."
          cols={30}
          rows={3}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_8 cs_pb_8 overflow-hidden"
        >
          <span>{isSubmitting ? 'Sending...' : 'Submit Now'}</span>
        </button>
      </form>
    </div>
  );
}
