import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Replace these with your EmailJS credentials
  // Get them from: https://dashboard.emailjs.com/admin
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Prepare template parameters
    const templateParams = {
      from_name: formData.nom,
      from_email: formData.email,
      message: formData.message,
      to_email: 'salmanbiga2060@gmail.com' 
    };

    // Send email using EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus({
            type: 'success',
            message: 'Message envoyé avec succès !'
          });
          setFormData({ nom: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus({
            type: 'error',
            message: "Échec de l'envoi, We still waiting for pwd from salma."
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='section-title'>Contactez-moi</h2>
        <div className='contact-content'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nom'>Nom</label>
              <input
                type='text'
                id='nom'
                name='nom'
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='5'
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
          
          <div className='social-section'>
            <h4>Suivez-moi</h4>
            <div className='social-links'>
              <a href='' className='social-link' aria-label='LinkedIn'>
                <i className='fab fa-linkedin'></i>
                <span>LinkedIn</span>
              </a>
              <a href='' className='social-link' aria-label='GitHub'>
                <i className='fab fa-github'></i>
                <span>GitHub</span>
              </a>
              <a href='' className='social-link' aria-label='Twitter'>
                <i className='fab fa-twitter'></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
