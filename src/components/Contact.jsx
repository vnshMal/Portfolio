import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ paddingBottom: '2rem' }}>
      <div className="glass-panel animate-on-scroll" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="mailto:Vansh.119525@stu.upes.ac.in" className="contact-link">
            <span className="icon">✉</span> Vansh.119525@stu.upes.ac.in
          </a>
          <a href="mailto:vanshmalik862@gmail.com" className="contact-link">
            <span className="icon">✉</span> vanshmalik862@gmail.com
          </a>
          <a href="tel:+918506998800" className="contact-link">
            <span className="icon">📞</span> +91-8506998800
          </a>
          <a href="https://linkedin.com/in/vansh-malik-3ba843291/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">in</span> LinkedIn
          </a>
          <a href="https://github.com/vnshMal" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">⌨</span> GitHub
          </a>
        </div>
      </div>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>Designed and Built by Vansh Malik.</p>
      </footer>

      <style>{`
        .contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        .contact-link:hover {
          background: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(123, 44, 191, 0.4);
          color: white;
        }
        .icon {
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
