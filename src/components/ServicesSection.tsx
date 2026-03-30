import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="section-anchor section-panel"
      aria-label="Services"
    >
      <ScrollReveal className="section-header">
        <p className="section-eyebrow">What we do</p>
      </ScrollReveal>

      <ScrollReveal className="services-intro" animation="reveal-blur">
        <h2 className="section-title">Technology and AI, applied with intent.</h2>
        <p>
          Samadhai Technologies works with organisations that want to harness
          artificial intelligence and modern software to build calmer, smarter
          systems—not noise. We transform complex challenges into elegant,
          scalable solutions that deliver measurable business value.
        </p>
        <p>
          In today's rapidly evolving digital landscape, success depends on making
          the right technology choices. We help you navigate this complexity with
          clarity and purpose, ensuring every investment drives meaningful outcomes.
        </p>
      </ScrollReveal>

      <div className="section-grid">
        <ScrollReveal className="info-card" animation="reveal-right" delay="delay-100">
          <div className="card-icon">🤖</div>
          <h3>AI–driven solutions</h3>
          <p>
            Design and delivery of intelligent features, from data enrichment
            and recommendations to workflow automation powered by modern AI.
          </p>
          <ul className="service-features">
            <li>Machine Learning Model Development</li>
            <li>Natural Language Processing Solutions</li>
            <li>Predictive Analytics & Forecasting</li>
            <li>Computer Vision Applications</li>
            <li>Intelligent Process Automation</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="info-card" animation="reveal-up" delay="delay-200">
          <div className="card-icon">⚙️</div>
          <h3>Product & platform engineering</h3>
          <p>
            Building reliable web platforms, dashboards, and internal tools
            that give teams a single, trusted view of their operations.
          </p>
          <ul className="service-features">
            <li>Custom Web Application Development</li>
            <li>Enterprise Dashboard Solutions</li>
            <li>API Development & Integration</li>
            <li>Cloud Architecture & Migration</li>
            <li>Performance Optimization</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="info-card" animation="reveal-left" delay="delay-300">
          <div className="card-icon">🤝</div>
          <h3>Advisory & partnerships</h3>
          <p>
            Long–term technology partnerships that align strategy, delivery, and
            governance, so innovation is sustainable—not experimental.
          </p>
          <ul className="service-features">
            <li>Technology Strategy Consulting</li>
            <li>Digital Transformation Roadmaps</li>
            <li>AI Readiness Assessment</li>
            <li>Team Training & Knowledge Transfer</li>
            <li>Ongoing Support & Evolution</li>
          </ul>
        </ScrollReveal>
      </div>

      <div className="services-process">
        <ScrollReveal>
          <h3>Our Approach</h3>
        </ScrollReveal>
        <div className="process-steps">
          <ScrollReveal className="step" animation="reveal-up" delay="delay-100">
            <div className="step-number">1</div>
            <h4>Discovery & Analysis</h4>
            <p>We begin by understanding your business objectives, current challenges, and technological landscape.</p>
          </ScrollReveal>
          <ScrollReveal className="step" animation="reveal-up" delay="delay-200">
            <div className="step-number">2</div>
            <h4>Strategy & Design</h4>
            <p>We develop a comprehensive roadmap that aligns technology solutions with your business goals.</p>
          </ScrollReveal>
          <ScrollReveal className="step" animation="reveal-up" delay="delay-300">
            <div className="step-number">3</div>
            <h4>Implementation & Testing</h4>
            <p>Our engineers build robust solutions with rigorous testing to ensure reliability and performance.</p>
          </ScrollReveal>
          <ScrollReveal className="step" animation="reveal-up" delay="delay-400">
            <div className="step-number">4</div>
            <h4>Deployment & Support</h4>
            <p>We ensure smooth deployment and provide ongoing support to maximize your investment's value.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};


