import React from 'react';
import './Accueil.css';
import profileImage from '../assets/profile.png';

const Accueil = () => {
  return (
    <section id="accueil" className="accueil">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">Salma NBIGA</span>
          </h1>
          <h2 className="hero-subtitle">Développeuse Full Stack</h2>
          <div className="hero-buttons">
            <a href="#projets" className="btn btn-secondary">Voir mes projets</a>
            <a href="/contact" className="btn btn-secondary">Me contacter</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src={profileImage} alt="NBIGA Salma" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;