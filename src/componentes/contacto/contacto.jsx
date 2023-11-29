import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: '' // Clear previous errors when user starts typing
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let formValid = true;

    // Name validation
    if (formData.name.trim() === '') {
      setErrors({
        ...errors,
        name: 'Please enter your name'
      });
      formValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      });
      formValid = false;
    }

    // Message validation
    if (formData.message.trim() === '') {
      setErrors({
        ...errors,
        message: 'Please enter a message'
      });
      formValid = false;
    }

    // If form is valid, you can proceed with submitting the data
    if (formValid) {
      // Perform your submit logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="error">{errors.name}</div>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="error">{errors.message}</div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;