import React from 'react';
import './Competences.css';

const Competences = () => {
  const competences = [
    {
      categorie: "Frontend",
      skills: [
        { nom: "React", niveau: 90 },
        { nom: "JavaScript", niveau: 85 },
        { nom: "HTML/CSS", niveau: 95 },
        { nom: "Bootstrap", niveau: 70 }
      ]
    },
    {
      categorie: "Backend",
      skills: [
        { nom: "Node.js", niveau: 80 },
        { nom: "Laravel", niveau: 75 },
        { nom: "PHP", niveau: 70 },
        { nom: "MySQL", niveau: 85 }
      ]
    },
    {
      categorie: "Outils",
      skills: [
        { nom: "Git", niveau: 90 },
        { nom: "Docker", niveau: 60 },
        { nom: "AWS", niveau: 65 },
        { nom: "Canva", niveau: 80 }
      ]
    }
  ];

  return (
    <section id="competences" className="competences">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="competences-grid">
          {competences.map((categorie, index) => (
            <div key={index} className="competence-categorie">
              <h3 className="categorie-titre">{categorie.categorie}</h3>
              <div className="skills-list">
                {categorie.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-nom">{skill.nom}</span>
                      <span className="skill-niveau">{skill.niveau}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.niveau}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences;
