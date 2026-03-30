import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership-team"
      className="section-anchor section-panel"
      aria-label="Leadership and Team"
    >
      <ScrollReveal className="section-header">
        <p className="section-eyebrow">Leadership</p>
        <h2 className="section-title">Guided by builders, not buzzwords.</h2>
        <p className="section-intro">
          Samadhai Technologies is led by a small, focused team that blends
          hands–on engineering experience with a long–term view on technology
          partnerships. Our leadership brings decades of combined experience in
          building scalable solutions and fostering innovation.
        </p>
      </ScrollReveal>

      <ScrollReveal className="leadership-intro" animation="reveal-blur">
        <p>
          Our leadership philosophy is simple: lead by example, stay close to the
          technology, and never lose sight of our clients' success. We believe that
          the best leaders are those who understand the challenges their teams face
          and can provide both strategic vision and practical guidance.
        </p>
      </ScrollReveal>

      <div className="section-grid center-grid">
        <ScrollReveal className="person-card" animation="reveal-right" delay="delay-100">
          <div className="person-avatar">👨‍💼</div>
          <h3 className="person-name">Pavan Kumar Pasupuleti</h3>
          <p className="person-role">CEO & Founder</p>
          <p className="person-copy">
            Provides overall product and technology direction for Samadhai,
            ensuring that every engagement ties back to clear outcomes for
            clients and the teams that serve them.
          </p>
          <div className="person-expertise">
            <h4>Areas of Expertise</h4>
            <ul>
              <li>Product Strategy & Roadmapping</li>
              <li>AI/ML Solution Architecture</li>
              <li>Enterprise Software Development</li>
              <li>Team Leadership & Mentoring</li>
              <li>Client Relationship Management</li>
            </ul>
          </div>
          <div className="person-background">
            <h4>Background</h4>
            <p>
              With over years of experience in technology leadership, Pavan has
              led numerous digital transformation initiatives across various industries.
              His expertise spans from early-stage startups to enterprise-scale implementations,
              with a particular focus on leveraging AI to solve complex business challenges.
            </p>
          </div>
        </ScrollReveal>


      </div>

      <div className="team-philosophy">
        <ScrollReveal>
          <h3>Our Leadership Philosophy</h3>
        </ScrollReveal>
        <div className="philosophy-grid">
          <ScrollReveal className="philosophy-item" animation="reveal-up" delay="delay-100">
            <h4>🛠️ Hands-On Leadership</h4>
            <p>
              Our leaders stay connected to the technology and actively participate
              in architectural decisions and problem-solving.
            </p>
          </ScrollReveal>
          <ScrollReveal className="philosophy-item" animation="reveal-up" delay="delay-200">
            <h4>🌱 Growth Mindset</h4>
            <p>
              We believe in continuous learning and encourage our teams to explore
              new technologies while maintaining practical focus.
            </p>
          </ScrollReveal>
          <ScrollReveal className="philosophy-item" animation="reveal-up" delay="delay-300">
            <h4>🤝 Client-Centric Approach</h4>
            <p>
              Every decision is made with our clients' success in mind, ensuring
              long-term partnerships built on trust and results.
            </p>
          </ScrollReveal>
          <ScrollReveal className="philosophy-item" animation="reveal-up" delay="delay-400">
            <h4>🎯 Accountability & Transparency</h4>
            <p>
              We take ownership of our commitments and maintain open communication
              with both our team and our clients.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal className="join-team" animation="reveal-zoom">
        <h3>Join Our Team</h3>
        <p>
          We're always looking for talented individuals who share our passion for
          building thoughtful technology solutions. If you're a problem-solver who
          values craftsmanship and wants to make a real impact, we'd love to hear from you.
        </p>
        <div className="team-values">
          <ScrollReveal className="team-value" delay="delay-100">
            <h4>🚀 Innovation</h4>
            <p>Push boundaries while maintaining practical focus</p>
          </ScrollReveal>
          <ScrollReveal className="team-value" delay="delay-200">
            <h4>💎 Quality</h4>
            <p>Take pride in every line of code and every client interaction</p>
          </ScrollReveal>
          <ScrollReveal className="team-value" delay="delay-300">
            <h4>🤝 Collaboration</h4>
            <p>Work together to solve complex challenges</p>
          </ScrollReveal>
          <ScrollReveal className="team-value" delay="delay-400">
            <h4>📚 Learning</h4>
            <p>Continuously grow and share knowledge with others</p>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
};


