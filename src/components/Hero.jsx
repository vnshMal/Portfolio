import React from 'react';
import profilePhoto from '../assets/vansh.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container animate-on-scroll visible">
        
        {/* Left Column: Text Content */}
        <div className="hero-left">
          <h4 className="hero-tagline">FREELANCE FULL-STACK DEVELOPER</h4>
          <h1 className="hero-title">
            Vansh <span className="highlight-text">Malik.</span>
          </h1>
          <p className="hero-description">
            I build fast, responsive, and secure full-stack web applications—solving business problems from premium user interfaces to robust, high-performance backends.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects 
              <span className="btn-arrow">↗</span>
            </a>
            <a href="https://wa.me/918506998800" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Let's Talk
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Months Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: Profile Photo Card */}
        <div className="hero-right">
          <div className="profile-card-wrapper">
            
            {/* Top-Left Floating Badge */}
            <div className="floating-badge badge-top-left glass-badge">
              <span className="badge-tag">EXPERIENCE</span>
              <span className="badge-value">3 Months</span>
              <span className="badge-desc">Full-Stack Dev</span>
            </div>
            
            {/* Bottom-Right Floating Badge */}
            <div className="floating-badge badge-bottom-right glass-badge">
              <span className="badge-tag">INTERN AT</span>
              <span className="badge-value">Graphura Pvt Ltd</span>
              <span className="badge-desc">June 2026 - Present</span>
            </div>
            
            {/* Main Photo Card */}
            <div className="profile-image-card">
              <img src={profilePhoto} alt="Vansh Malik" className="profile-img" />
              
              {/* Card Footer Overlay */}
              <div className="profile-card-footer">
                <div className="footer-details">
                  <h3 className="footer-name">Vansh Malik</h3>
                  <p className="footer-title">Full-Stack Freelance • UPES</p>
                  <div className="footer-pills">
                    <span className="pill">React</span>
                    <span className="pill">Node.js</span>
                    <span className="pill">Spring Boot</span>
                  </div>
                </div>
                <div className="footer-initials-badge">VM</div>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
