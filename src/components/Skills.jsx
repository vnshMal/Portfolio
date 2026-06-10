import React from 'react';

const Skills = () => {
  const customStyles = `
    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .skill-category {
      padding: 1.5rem;
    }
    .skill-category h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      border-bottom: 1px solid var(--glass-border);
      padding-bottom: 0.5rem;
    }
    .skill-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .badge {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    .badge:hover {
      background: rgba(255, 0, 127, 0.1);
      border-color: var(--accent-secondary);
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(255, 0, 127, 0.2);
    }
  `;

  return (
    <section id="skills" className="section-padding">
      <h2 className="section-title animate-on-scroll">Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-category glass-panel animate-on-scroll" style={{ transitionDelay: '0s' }}>
          <h3 className="text-gradient">Languages</h3>
          <div className="skill-badges">
            {['Java', 'Python', 'JavaScript', 'C'].map(s => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
        <div className="skill-category glass-panel animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <h3 className="text-gradient">Frameworks</h3>
          <div className="skill-badges">
            {['Kafka', 'Spring Boot', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Scikit-Learn'].map(s => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
        <div className="skill-category glass-panel animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-gradient">Developer Tools</h3>
          <div className="skill-badges">
            {['Maven', 'Git', 'Docker', 'Postman', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Figma'].map(s => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      </div>

      <div className="certifications animate-on-scroll" style={{ marginTop: '4rem' }}>
        <h2 className="section-title">Publications & Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="text-gradient" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Research & Publications</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li className="pub-li">
                <strong>ML for Real-Time Threat Detection</strong> <br/>
                <span style={{fontSize:'0.85em', color:'var(--text-muted)'}}>
                  Published in Current Trends and Advancement on Cyber Security and Digital Forensic. <br/>
                  ISBN: 978-93-342-1179-5 | DOI: 10.5281/zenodo.17556037
                </span>
              </li>
              <li className="pub-li">
                <strong>Palm Vein Recognition using Near Infrared Imaging & CNN-based feature extraction for biometric authentication</strong> <br/>
                <span style={{fontSize:'0.85em', color:'var(--text-muted)'}}>
                  Biometric Authentication Systems Research & Development.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="text-gradient" style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Certifications</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="pub-li">JPMorgan Chase Software Engineering Virtual Experience – Forage</li>
              <li className="pub-li">Student Symposium on Cybersecurity (UPES)</li>
              <li className="pub-li">National Coding Competition – Scaler School of Technology</li>
              <li className="pub-li">UI/UX Design Certification – GUVI / HCL</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{customStyles}</style>
      <style>{`
        .pub-li { position: relative; padding-left: 20px; color: var(--text-color); }
        .pub-li::before { content: '✧'; position: absolute; left: 0; color: var(--accent-color); font-size: 1.2rem; line-height: 1; }
      `}</style>
    </section>
  );
};
export default Skills;
