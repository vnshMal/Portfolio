import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "ORION: Operational Risk Identification and Observation Network",
      tech: ["FastAPI", "Python", "Random Forest", "OAuth2", "JWT", "Intrusion Detection"],
      link: "https://github.com/vnshMal/ORION-",
      desc: [
        "Built AI-based threat detection model (Random Forest, NSL-KDD) achieving 97.3% accuracy and 99.8% recall.",
        "Engineered a full-stack Intrusion Detection System (IDS) capable of real-time server monitoring.",
        "Developed a high-performance RESTful API using FastAPI, secured with JWT-based OAuth2 authentication."
      ]
    },
    {
      title: "SPARK — Real-Time AI Market Monitor",
      tech: ["Next.js", "FastAPI", "Python", "Scikit-Learn", "Machine Learning", "APIs"],
      link: "https://github.com/vnshMal/SPARK",
      desc: [
        "Constructed a full-stack financial dashboard using Next.js and a Python FastAPI microservice.",
        "Trained an optimized Random Forest classifier with Scikit-Learn using 5 years of historical data.",
        "Implemented RSI, EMA features achieving >85% accuracy in forecasting stock trends.",
        "Executed parallelized API fetching ensuring fast rendering and 100% uptime."
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <h2 className="section-title animate-on-scroll">Projects</h2>
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card glass-panel animate-on-scroll" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{proj.title}</h3>
            <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
              {proj.tech.map((t, i) => (
                <span key={i} style={{ background: 'rgba(123, 44, 191, 0.2)', border: '1px solid var(--accent-color)', color: '#fff', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px' }}>
                  {t}
                </span>
              ))}
            </div>
            <ul className="project-desc" style={{ listStyle: 'none', color: 'var(--text-color)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {proj.desc.map((d, i) => (
                <li key={i} style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-secondary)'}}>→</span> {d}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-github-link">
                View Repository <span style={{ marginLeft: '5px' }}>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .project-github-link {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-color);
          transition: all 0.3s ease;
        }
        .project-github-link:hover {
          background: var(--accent-secondary);
          border-color: var(--accent-secondary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(255, 0, 127, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;
