import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Graphura Pvt Ltd, Gurugram",
      period: "Apr 2026 – July 2026",
      points: [
        "Collaborated in an Agile development team to build a multi-role Barber Automation SaaS platform serving 28+ simulated regional salons, reducing customer booking overhead by 40%.",
        "Programmed an automated queue state-machine that handles live status transitions (delayed, checked in, no-show), reducing manual scheduling errors by 30% through instant queue position updates.",
        "Implemented a background cron check engine running on a 24-hour interval that scans database logs and triggers automated re-engagement SMTP emails for inactive users, boosting simulated customer retention by 18%."
      ]
    },
    {
      title: "Trainee Engineer",
      company: "Karishma Computers Pvt. Ltd., Noida",
      period: "June 2026 – July 2026",
      points: [
        "Configured and optimized local area networks (LAN/WAN) and IT infrastructure for 50+ corporate workstations, achieving 99.9% network uptime.",
        "Fortified systems security by implementing firewalls, deploying active anti-malware policies, and setting up secure access permissions.",
        "Diagnosed and resolved complex hardware and software failures for 120+ client devices, reducing maintenance turnaround times by 30%."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <h2 className="section-title animate-on-scroll">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item animate-on-scroll">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h3 className="text-gradient">{exp.title}</h3>
              <div className="company-info" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 20px', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul style={{ listStyle: 'none' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '8px', position: 'relative', paddingLeft: '15px' }}>
                     <span style={{ position: 'absolute', left: 0, color: 'var(--accent-secondary)'}}>▹</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: var(--glass-border);
          top: 0;
          bottom: 0;
          left: 20px;
          margin-left: -1px;
        }
        .timeline-item {
          padding: 10px 0 30px 50px;
          position: relative;
        }
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-color);
          position: absolute;
          left: 12px;
          top: 15px;
          z-index: 1;
          box-shadow: 0 0 10px var(--accent-color);
        }
        .timeline-content {
          padding: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Experience;
