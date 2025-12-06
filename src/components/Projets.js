import React from 'react';
import './Projets.css';

const Projets = () => {
  const projets = [
    {
      id: 1,
      titre: "Site E-commerce",
      description: "Application web developpe par Html Css et Bootstrap",
      technologies: ["Html", "Css", "Bootstrap"],
      image: "/image%20e-com.png",
      lien: "#",
      repo: "#",
      date: "2024",
      roles: ["Frontend"],
    },
    {
      id: 2,
      titre: "Site Gestion ",
      description: "Suivi d'entraînements et nutrition, notifications, et synchronisation cloud.",
      technologies: ["Laravel", "Mysql", ],
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1200&auto=format&fit=crop",
      lien: "#",
      repo: "#",
      date: "2025",
      roles: ["Frontend", "Backend"] ,
    },
    {
      id: 3,
      titre: "Site Gestion Hotel",
      description: "KPIs et graphiques avec filtres temps réel et export.",
      technologies: ["React", "Express", "Node.js", "MongoDb"],
      image: "/image0.png",
      lien: "#",
      repo: "#",
      date: "2025",
      roles: ["Frontend" , "Backend"],
    },
    {
      id: 4,
      titre: "Portfolio Moderne",
      description: "Site personnel performant, SEO friendly, et animations subtiles.",
      technologies: ["React", "Vite", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      lien: "#",
      repo: "#",
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
                  <a href='https://github.com/SALMA-NB20'className="btn btn-primary" target="_blank" rel="noreferrer">Live</a>
                  <a href='https://github.com/SALMA-NB20' className="btn btn-secondary" target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;