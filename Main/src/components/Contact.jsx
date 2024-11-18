import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Please enter a valid email.";
    if (!formData.message) errors.message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const formDataToSubmit = new FormData(event.target);

      try {
        const response = await fetch('https://formspree.io/f/mnqwjgdz', {
          method: 'POST',
          body: formDataToSubmit,
        });

        if (response.ok) {
          setSubmissionStatus("Success! Your message has been sent.");
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmissionStatus("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        setSubmissionStatus("Oops! Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            required 
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            required 
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </label>
        <label>
          Message:
          <textarea 
            name="message"
            value={formData.message} 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            required 
          />
          {formErrors.message && <span>{formErrors.message}</span>}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </section>
  );
}

export default Contact;
