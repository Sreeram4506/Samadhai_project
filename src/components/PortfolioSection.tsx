import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="section-anchor section-panel"
      aria-label="Portfolio and Case Studies"
    >
      <ScrollReveal className="section-header">
        <p className="section-eyebrow">Selected directions</p>
        <h2 className="section-title">A sample of where Samadhai can add value.</h2>
        <p className="section-intro">
          While our public footprint is still growing, the work we pursue tends
          to sit at the intersection of intelligent data use, operational
          clarity, and long–term partnerships. Here are some examples of how we've
          helped organizations transform their operations through thoughtful technology.
        </p>
      </ScrollReveal>

      <ScrollReveal className="portfolio-intro" animation="reveal-blur">
        <p>
          Our portfolio represents a commitment to solving real business challenges
          through innovative yet practical solutions. Each project demonstrates our
          ability to understand complex requirements and deliver measurable results
          that drive business growth and operational efficiency.
        </p>
      </ScrollReveal>

      <div className="section-grid">
        <ScrollReveal className="case-card" animation="reveal-up" delay="delay-100">
          <div className="case-icon">📊</div>
          <h3>Intelligent Operations Dashboards</h3>
          <p>
            Unifying metrics, alerts, and workflows into a single pane of glass
            so leaders can see the whole system at once and act with confidence.
          </p>
          <div className="case-details">
            <h4>Key Features</h4>
            <ul>
              <li>Real-time data visualization</li>
              <li>Custom KPI tracking</li>
              <li>Automated alert systems</li>
              <li>Predictive analytics integration</li>
              <li>Mobile-responsive design</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal className="case-card" animation="reveal-up" delay="delay-200">
          <div className="case-icon">🧠</div>
          <h3>AI–assisted Decision Support</h3>
          <p>
            Applying machine learning and modern AI to surface patterns,
            forecasts, and recommendations that augment—rather than replace—
            human judgment.
          </p>
          <div className="case-details">
            <h4>Key Features</h4>
            <ul>
              <li>Pattern recognition algorithms</li>
              <li>Predictive modeling</li>
              <li>Natural language processing</li>
              <li>Recommendation engines</li>
              <li>Explainable AI insights</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal className="case-card" animation="reveal-up" delay="delay-300">
          <div className="case-icon">🔗</div>
          <h3>Partner Platforms & Integrations</h3>
          <p>
            Building the connective tissue between tools, teams, and data
            sources so organisations can experiment quickly without sacrificing
            robustness.
          </p>
          <div className="case-details">
            <h4>Key Features</h4>
            <ul>
              <li>API development and management</li>
              <li>Third-party system integration</li>
              <li>Data synchronization</li>
              <li>Workflow automation</li>
              <li>Secure data exchange protocols</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <div className="case-studies">
        <ScrollReveal>
          <h3>Detailed Case Studies</h3>
        </ScrollReveal>
        <div className="case-study-grid">
          <ScrollReveal className="case-study" animation="reveal-zoom" delay="delay-100">
            <h4>🏭 Manufacturing Intelligence Platform</h4>
            <div className="case-study-content">
              <p>
                Developed a comprehensive IoT and AI-powered platform for a leading
                manufacturing company to monitor production lines, predict maintenance
                needs, and optimize resource allocation.
              </p>
              <div className="case-study-stats">
                <div className="stat">
                  <span className="stat-number">30%</span>
                  <span className="stat-label">Reduced Downtime</span>
                </div>
                <div className="stat">
                  <span className="stat-number">45%</span>
                  <span className="stat-label">Cost Savings</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="case-study" animation="reveal-zoom" delay="delay-200">
            <h4>🏥 Healthcare Analytics Solution</h4>
            <div className="case-study-content">
              <p>
                Created an AI-driven analytics platform for a healthcare provider
                to improve patient outcomes through predictive modeling, resource
                optimization, and personalized care recommendations.
              </p>
              <div className="case-study-stats">
                <div className="stat">
                  <span className="stat-number">25%</span>
                  <span className="stat-label">Better Patient Outcomes</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50%</span>
                  <span className="stat-label">Faster Diagnosis</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="case-study" animation="reveal-zoom" delay="delay-300">
            <h4>🛍️ E-commerce Personalization Engine</h4>
            <div className="case-study-content">
              <p>
                Built a sophisticated recommendation and personalization system
                for an e-commerce platform that increased customer engagement
                and conversion rates through AI-driven product suggestions.
              </p>
              <div className="case-study-stats">
                <div className="stat">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">Higher Conversion</span>
                </div>
                <div className="stat">
                  <span className="stat-number">60%</span>
                  <span className="stat-label">Better Engagement</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="approach-section">
        <ScrollReveal>
          <h3>Our Approach to Every Project</h3>
        </ScrollReveal>
        <div className="approach-grid">
          <ScrollReveal className="approach-step" animation="reveal-right" delay="delay-100">
            <div className="step-icon">🔍</div>
            <h4>Deep Discovery</h4>
            <p>We invest time to understand your business context, challenges, and objectives before writing a single line of code.</p>
          </ScrollReveal>
          <ScrollReveal className="approach-step" animation="reveal-right" delay="delay-200">
            <div className="step-icon">🎯</div>
            <h4>Strategic Planning</h4>
            <p>We develop comprehensive project roadmaps that align with your business goals and ensure measurable outcomes.</p>
          </ScrollReveal>
          <ScrollReveal className="approach-step" animation="reveal-right" delay="delay-300">
            <div className="step-icon">🚀</div>
            <h4>Agile Execution</h4>
            <p>We use iterative development to deliver value quickly while maintaining flexibility to adapt to changing requirements.</p>
          </ScrollReveal>
          <ScrollReveal className="approach-step" animation="reveal-right" delay="delay-400">
            <div className="step-icon">📈</div>
            <h4>Continuous Improvement</h4>
            <p>We monitor performance and optimize solutions to ensure they continue delivering value as your business evolves.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};


