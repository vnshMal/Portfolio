import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Graphura Pvt Ltd, Gurugram",
      period: "Apr 2026 – Present",
      points: [
        "Enhanced Spring Boot backend services for API reselling platform handling 100+ requests/day.",
        "Implemented API authentication and usage tracking.",
        "Reduced integration time by 40% through modular architecture design."
      ]
    },
    {
      title: "Software Engineering Virtual Experience",
      company: "JPMorgan Chase & Co. (Forage) – Remote",
      period: "Mar 2026 – Apr 2026",
      points: [
        "Built Spring Boot backend handling 10,000+ transactions/day with <200ms latency.",
        "Integrated Apache Kafka for event-driven processing of 100+ events/day.",
        "Designed REST API controller-service architecture."
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
