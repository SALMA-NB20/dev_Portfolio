import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='section-title'>Contactez-moi</h2>
        <div className='contact-content'>
          <div className='contact-info'>
            <div className='contact-header'>
              <h3>Informations de contact</h3>
              <p>N'hésitez pas à me contacter pour discuter de vos projets</p>
            </div>
            
            <div className='contact-details'>
              <div className='contact-item'>
                <div className='contact-icon'>
                  <i className='fas fa-envelope'></i>
                </div>
                <div className='contact-text'>
                  <span className='contact-label'>Email</span>
                  <span className='contact-value'>NBIGASalma221@gmail.com</span>
                </div>
              </div>
              
              <div className='contact-item'>
                <div className='contact-icon'>
                  <i className='fas fa-phone'></i>
                </div>
                <div className='contact-text'>
                  <span className='contact-label'>Téléphone</span>
                  <span className='contact-value'>+212 07 70 27 56 78</span>
                </div>
              </div>
              
              <div className='contact-item'>
                <div className='contact-icon'>
                  <i className='fas fa-map-marker-alt'></i>
                </div>
                <div className='contact-text'>
                  <span className='contact-label'>Localisation</span>
                  <span className='contact-value'>Morocco, SAFI</span>
                </div>
              </div>
            </div>
            
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
            <button type='submit' className='btn btn-primary'>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
