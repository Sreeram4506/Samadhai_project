import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="section-anchor section-panel"
      aria-label="About Samadhai Technologies"
    >
      <ScrollReveal className="section-header">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">Rooted in engineering, shaped by ambition.</h2>
        <p className="section-intro">
          Samadhai Technologies Private Limited is a privately held technology
          company based in Telangana, India, incorporated on 10 October 2025.
          We focus on building thoughtful digital systems that compound value
          over time.
        </p>
      </ScrollReveal>

      <ScrollReveal className="about-story" animation="reveal-blur">
        <h3>Our Story</h3>
        <p>
          Founded with a vision to bridge the gap between cutting-edge technology
          and practical business applications, Samadhai Technologies emerged from
          a deep understanding of both engineering excellence and business needs.
          Our founders recognized that while technology offers unprecedented
          opportunities, many organizations struggle to implement solutions that
          deliver lasting value.
        </p>
        <p>
          We set out to create a company that doesn't just build software, but
          crafts solutions that evolve with our clients' needs. Our approach is
          grounded in the belief that technology should serve people, not the
          other way around.
        </p>
      </ScrollReveal>

      <div className="about-grid">


        <ScrollReveal className="about-body" animation="reveal-left">
          <h3>Our Philosophy</h3>
          <p>
            From the outset, Samadhai has been positioned as an engineering–led
            partner for organisations that want to move beyond experiments and
            into durable, production–grade technology. Our work emphasises clear
            problem framing, measured use of AI, and interfaces that help teams
            think more clearly.
          </p>
          <p>
            We believe that innovation, when paired with discipline and care,
            can create systems that feel calm on the surface—even when they are
            orchestrating complex infrastructure underneath.
          </p>

          <h3>Our Values</h3>
          <div className="values-grid">
            <ScrollReveal className="value-item" delay="delay-100">
              <h4>Engineering Excellence</h4>
              <p>We build solutions that are robust, scalable, and maintainable.</p>
            </ScrollReveal>
            <ScrollReveal className="value-item" delay="delay-200">
              <h4>Client Partnership</h4>
              <p>We succeed when our clients succeed, building long-term relationships.</p>
            </ScrollReveal>
            <ScrollReveal className="value-item" delay="delay-300">
              <h4>Innovation with Purpose</h4>
              <p>We embrace new technologies when they solve real business problems.</p>
            </ScrollReveal>
            <ScrollReveal className="value-item" delay="delay-400">
              <h4>Transparency</h4>
              <p>We communicate openly about challenges, progress, and outcomes.</p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="about-mission" animation="reveal-zoom">
        <h3>Our Mission & Vision</h3>
        <div className="mission-vision-grid">
          <ScrollReveal className="mission-item" animation="reveal-right">
            <h4>🎯 Mission</h4>
            <p>
              To empower organizations with thoughtful technology solutions that
              drive sustainable growth and operational excellence through the
              strategic application of AI and modern software engineering.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mission-item" animation="reveal-left">
            <h4>🔮 Vision</h4>
            <p>
              To be the trusted partner for organizations navigating digital
              transformation, creating a future where technology amplifies human
              potential and enables smarter, more compassionate business practices.
            </p>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
};


