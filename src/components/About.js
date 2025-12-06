import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À Propos de Moi</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="code-snippet">
              <div className="code-header">
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-label">about.js</span>
              </div>
              <pre className="code-content">
                <code>{`const Developer = {
  name: "Salma NBIGA",
  role: "Full Stack Developer",
  passion: ["Web Development", "UI/UX Design"],
  skills: {
    frontend: ["React", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Laravel", "PHP"],
    tools: ["Git", "Docker", "AWS"]
  },
  philosophy: "Code with creativity, design with purpose"
};`}</code>
              </pre>
            </div>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">✨</div>
                <h3>Innovation</h3>
                <p>Explorer de nouvelles technologies et approches créatives</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎨</div>
                <h3>Design</h3>
                <p>Créer des interfaces élégantes et intuitives</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h3>Performance</h3>
                <p>Optimiser chaque ligne de code pour des résultats optimaux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
