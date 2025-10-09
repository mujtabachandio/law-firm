import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../../config/emailjs'

export default function FromStyle7() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Review submit failed:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="row">
      {submitStatus === 'success' && (
        <div className="alert alert-success cs_mb_20">Thank you for your review.</div>
      )}
      {submitStatus === 'error' && (
        <div className="alert alert-danger cs_mb_20">Submission failed. Please try again.</div>
      )}
      <div className="col-lg-12">
        <textarea
          cols={30}
          rows={10}
          name="message"
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          placeholder="Write your review *"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="cs_height_25 cs_height_lg_25" />
      </div>
      <div className="col-lg-6">
        <input
          type="text"
          name="name"
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          placeholder="Your name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="cs_height_25 cs_height_lg_25" />
      </div>
      <div className="col-lg-6">
        <input
          type="email"
          name="email"
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          placeholder="Your email *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="cs_height_25 cs_height_lg_25" />
      </div>
      <div className="col-lg-12">
        <div className="cs_height_15 cs_height_lg_15" />
        <div className="form-check m-0">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label m-0"
            htmlFor="flexCheckDefault"
          >
            By using this form you agree with the storage and handling of
            your data by this website. *
          </label>
        </div>
        <div className="cs_height_40 cs_height_lg_30" />
        <button className="cs_product_btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
