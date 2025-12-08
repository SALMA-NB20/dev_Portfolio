import React, { useState } from 'react';
import './Projets.css';
import siteEcom from '../assets/siteecom.png';
import siteGestion from '../assets/sitegestion.png';
import siteReservation from '../assets/sitereservation.png';
import portfoliomodern from '../assets/portfoliomodern.png';

const Projets = () => {
  const [liveStatus, setLiveStatus] = useState({ id: null, message: '' });

  const handleLiveClick = (e, projet) => {
    if (!projet.lien) {
      e.preventDefault();
      setLiveStatus({ id: projet.id, message: 'The project has not been deployed yet.' });
    } else {
      setLiveStatus({ id: null, message: '' });
    }
  };

  const projets = [
    {
      id: 1,
      titre: "Site E-commerce",
      description: "site web developpe par Html Css et Bootstrap",
      technologies: ["Html", "Css", "Bootstrap"],
      image: siteEcom,
      lien: "https://site-ecom-sand.vercel.app/",
      repo: "https://github.com/SALMA-NB20/parfume-website",
      date: "2024",
      roles: ["Frontend"],
    },
    {
      id: 2,
      titre: "Site Gestion ",
      description: "Suivi d'entraînements et nutrition, notifications, et synchronisation cloud.",
      technologies: ["Laravel", "Mysql", ],
      image: siteGestion,
      lien: "",
      repo: "https://github.com/SALMA-NB20/Gestion_Centre",
      date: "2025",
      roles: ["Frontend", "Backend"] ,
    },
    {
      id: 3,
      titre: "Site Gestion Hotel",
      description: "une plateforme web moderne dédiée à la gestion complète des opérations hôtelières.",
      technologies: ["React", "Express", "Node.js", "MongoDb"],
      image: siteReservation,
      lien: "",
      repo: "https://github.com/SALMA-NB20/hotel-reservation",
      date: "2025",
      roles: ["Frontend" , "Backend"],
    },
    {
      id: 4,
      titre: "Portfolio Moderne",
      description: "Site personnel performant, SEO friendly, et animations subtiles.",
      technologies: ["React", "Framer Motion"],
      image: portfoliomodern,
      lien: "https://salmanbiga.vercel.app/",
      repo: "https://github.com/SALMA-NB20/dev_Portfolio",
      date: "2025",
      roles: ["Frontend", "Design"],
    },
  ];

  return (
    <section id="projets" className="projets">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projets-grid">
          {projets.map(projet => (
            <article key={projet.id} className="projet-card">
              <div className="projet-image"><img src={projet.image} alt={projet.titre} loading="lazy" />
                <span className="projet-date">{projet.date}</span>
              </div>
              <div className="projet-content">
                <h3 className="projet-titre">{projet.titre}</h3>
                <p className="projet-description">{projet.description}</p>
                <div className="projet-technologies">
                  {projet.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="projet-meta">
                  {projet.roles.map((r, i) => (
                    <span key={i} className="role-tag">{r}</span>
                  ))}
                </div>
                <div className="projet-actions">
                  <a
                    href={projet.lien || '#'}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => handleLiveClick(e, projet)}
                  >
                    Live
                  </a>
                  <a href={projet.repo} className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                </div>
                {liveStatus.id === projet.id && liveStatus.message && (
                  <div className="projet-live-status">{liveStatus.message}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;