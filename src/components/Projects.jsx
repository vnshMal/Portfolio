import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "ORION: Operational Risk Identification and Observation Network",
      tech: ["FastAPI", "Python", "Random Forest", "OAuth2", "JWT", "Intrusion Detection", "NSL-KDD"],
      link: "https://github.com/vnshMal/ORION-",
      desc: [
        "Trained an AI-based threat detection model (Random Forest, NSL-KDD) achieving 97.3% accuracy and 99.8% recall.",
        "Engineered a full-stack Intrusion Detection System (IDS) capable of real-time server monitoring.",
        "Designed a high-performance RESTful API using FastAPI, secured with JWT-based OAuth2 authentication."
      ]
    },
    {
      title: "Barber Automation — Multi-Role Salon Management SaaS",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Razorpay", "REST API", "RBAC"],
      link: "https://github.com/vnshMal",
      desc: [
        "Architected and deployed a multi-tenant RESTful API with 20+ endpoints managing RBAC across 4 roles (Customer, Barber, Owner, Admin).",
        "Orchestrated real-time queue sync via Socket.IO (under 50ms latency); architected MongoDB schemas across 8+ collections with 30% query performance improvement via indexing.",
        "Integrated Razorpay payment gateway with webhook verification and SMTP booking confirmation; deployed on Render with CI/CD via GitHub."
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
