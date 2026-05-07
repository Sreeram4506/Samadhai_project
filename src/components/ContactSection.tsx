import React, { useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import emailjs from "@emailjs/browser";

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);
    setSendResult(null);

    // Note: In a production environment, you should use environment variables
    // Replace these placeholder strings with your actual EmailJS credentials
    const SERVICE_ID = "service_ybxv677"; 
    const TEMPLATE_ID = "template_mm90w0d";
    const PUBLIC_KEY = "svPMBfOpUE5M0NpeY";

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setSendResult({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        formRef.current?.reset();
    }, (error) => {
        console.log(error.text);
        setSendResult({ type: 'error', message: 'Failed to send message. Please try again or email us directly.' });
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section
      id="contact-us"
      className="section-anchor section-panel"
      aria-label="Contact Samadhai Technologies"
    >
      <ScrollReveal className="section-header">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's explore what we can build together.</h2>
        <p className="section-intro">
          If you are exploring how technology and artificial intelligence can
          support your next chapter, we would be glad to hear from you.
          We're here to help you navigate your digital transformation journey
          with clarity and confidence.
        </p>
      </ScrollReveal>

      <ScrollReveal className="contact-intro" animation="reveal-blur">
        <p>
          Whether you're looking to solve a specific challenge, explore new
          opportunities, or simply learn more about how we can help your organization
          thrive in the digital age, our team is ready to listen and provide thoughtful guidance.
        </p>
      </ScrollReveal>

      <div className="contact-grid">
        <ScrollReveal className="contact-info" animation="reveal-right">
          <h3>Get in Touch</h3>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@samadhaitechnologies.com</p>
                <p>For general inquiries and partnership opportunities</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 9573264575</p>
                <p>Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Office</h4>
                <p>Samadhai Technologies Private Limited</p>
                <p>LIG 237, Road No 2, near Dhana Lakshmi Center Phase 1, kPHB Colony Hyderabad, Telangana 500072</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="contact-form" animation="reveal-left">
          <h3>Send Us a Message</h3>
          <form className="contact-form-element" ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Your Name *</label>
              <input type="text" id="user_name" name="user_name" required />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email Address *</label>
              <input type="email" id="user_email" name="user_email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Share a short note about your organisation, the problems you are exploring, and the timelines you are working with..."
              ></textarea>
            </div>

            {sendResult && (
              <div className={`form-feedback ${sendResult.type}`}>
                {sendResult.message}
              </div>
            )}

            <button type="submit" className="submit-button" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
              {!isSending && <span className="button-arrow">→</span>}
            </button>
          </form>
        </ScrollReveal>
      </div>

      <ScrollReveal className="contact-cta" animation="reveal-zoom">
        <h3>Ready to Transform Your Business?</h3>
        <p>
          Share a short note about your organisation, the problems you are
          exploring, and the timelines you are working with. We will respond
          with a calm, structured view of how Samadhai could help.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">
            Schedule a Consultation
            <span className="button-arrow">→</span>
          </button>
        </div>
      </ScrollReveal>

      <div className="response-time">
        <ScrollReveal>
          <h3>What to Expect</h3>
        </ScrollReveal>
        <div className="response-grid">
          <ScrollReveal className="response-item" animation="reveal-up" delay="delay-100">
            <div className="response-icon">⏱️</div>
            <h4>Quick Response</h4>
            <p>We'll respond within 24 business hours with initial thoughts on your project.</p>
          </ScrollReveal>
          <ScrollReveal className="response-item" animation="reveal-up" delay="delay-200">
            <div className="response-icon">🎯</div>
            <h4>Focused Discussion</h4>
            <p>A 30-minute call to understand your challenges and explore potential solutions.</p>
          </ScrollReveal>
          <ScrollReveal className="response-item" animation="reveal-up" delay="delay-300">
            <div className="response-icon">📋</div>
            <h4>Clear Proposal</h4>
            <p>Detailed recommendations with timeline, scope, and investment estimates.</p>
          </ScrollReveal>
          <ScrollReveal className="response-item" animation="reveal-up" delay="delay-400">
            <div className="response-icon">🤝</div>
            <h4>Partnership Approach</h4>
            <p>We believe in long-term relationships built on trust and mutual success.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};


