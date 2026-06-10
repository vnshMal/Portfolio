import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <h2 className="section-title animate-on-scroll">About & Education</h2>
      <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel animate-on-scroll" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }} className="text-gradient">Professional Summary</h3>
          <p style={{ color: 'var(--text-color)', lineHeight: '1.8' }}>
            Full-Stack Freelance Developer and Computer Science undergraduate specializing in designing and building custom end-to-end web applications. I solve complex business problems for clients by combining premium user-friendly frontends (React) with robust, secure, and highly scalable backend architectures (Spring Boot, Node.js, FastAPI).
          </p>
          <p style={{ color: 'var(--text-color)', lineHeight: '1.8', marginTop: '1rem' }}>
            Known for delivering production-ready, performant software solutions from interactive user interfaces to event-driven architectures with high-security standards.
          </p>
        </div>
        
        <div className="glass-panel animate-on-scroll" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }} className="text-gradient">Education</h3>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>UPES Dehradun, India</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>B.Tech (Hons.) – Computer Science & Engineering (Cybersecurity)</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            <p style={{ color: 'var(--accent-secondary)' }}><strong>Aug 2023 - Present</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
