import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export default function FormStyle3() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insurance_type: 'General',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Provide subject/message via hidden inputs present in the form
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', insurance_type: 'General' });
      }
    } catch (err) {
      console.error('Quote form failed:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const computedSubject = `Insurance Quote: ${formData.insurance_type}`;
  const computedMessage = `A user requested a quote.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInsurance: ${formData.insurance_type}`;

  return (
    <form ref={form} onSubmit={handleSubmit}>
      {submitStatus === 'success' && (
        <div className="alert alert-success cs_mb_20"><strong>Success!</strong> We received your request.</div>
      )}
      {submitStatus === 'error' && (
        <div className="alert alert-danger cs_mb_20"><strong>Error!</strong> Please try again.</div>
      )}
      <div className="row">
        <input type="hidden" name="subject" value={computedSubject} />
        <input type="hidden" name="message" value={computedMessage} />
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            name="phone"
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <select
            name="insurance_type"
            value={formData.insurance_type}
            onChange={handleChange}
            className="form-control-2 cs_fs_14 cs_rounded_5 cs_mb_35 bg-white"
          >
            <option value="General">General</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>
      </div>
      <div className="cs_progressbar cs_style_1 cs_type_1 cs_mb_30">
        <h3 className="fw-medium cs_mb_20 cs_fs_16">Web development</h3>
        <div className="cs_progress cs_rounded_8 bg-secondary cs_mb_10">
          <div
            className="cs_progress_in bg-accent cs_rounded_8 h-100"
            style={{ width: '90%' }}
          />
        </div>
        <div className="d-flex justify-content-between cs_fs_14 cs_mb_20">
          <span>Selected Value:</span>
          <span>100000</span>
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
        <span>{isSubmitting ? 'Sending...' : 'Get a quote'}</span>
      </button>
    </form>
  );
}
