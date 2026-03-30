import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ScrollReveal } from "./ScrollReveal";
const ContactIcon = ({ title, children, }) => (_jsx("div", { className: "contact-icon", "aria-hidden": "true", title: title, children: _jsx("svg", { viewBox: "0 0 24 24", focusable: "false", children: children }) }));
export const ContactSection = () => {
    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [sendResult, setSendResult] = useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        if (!formRef.current)
            return;
        setIsSending(true);
        setSendResult(null);
        const SERVICE_ID = "service_ybxv677";
        const TEMPLATE_ID = "template_mm90w0d";
        const PUBLIC_KEY = "svPMBfOpUE5M0NpeY";
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
            console.log(result.text);
            setSendResult({
                type: "success",
                message: "Message sent successfully! We will get back to you soon.",
            });
            formRef.current?.reset();
        }, (error) => {
            console.log(error.text);
            setSendResult({
                type: "error",
                message: "Failed to send message. Please try again or email us directly.",
            });
        })
            .finally(() => {
            setIsSending(false);
        });
    };
    return (_jsxs("section", { id: "contact-us", className: "section-anchor section-panel", "aria-label": "Contact Samadhai Technologies", children: [_jsxs(ScrollReveal, { className: "section-header", children: [_jsx("p", { className: "section-eyebrow", children: "Contact" }), _jsx("h2", { className: "section-title", children: "Let's explore what we can build together." }), _jsx("p", { className: "section-intro", children: "If you are exploring how technology and artificial intelligence can support your next chapter, we would be glad to hear from you. We're here to help you navigate your digital transformation journey with clarity and confidence." })] }), _jsx(ScrollReveal, { className: "contact-intro", animation: "reveal-blur", children: _jsx("p", { children: "Whether you're looking to solve a specific challenge, explore new opportunities, or simply learn more about how we can help your organization thrive in the digital age, our team is ready to listen and provide thoughtful guidance." }) }), _jsxs("div", { className: "contact-grid", children: [_jsxs(ScrollReveal, { className: "contact-info", animation: "reveal-right", children: [_jsx("h3", { children: "Get in Touch" }), _jsxs("div", { className: "contact-methods", children: [_jsxs("div", { className: "contact-method", children: [_jsxs(ContactIcon, { title: "Email", children: [_jsx("path", { d: "M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z" }), _jsx("path", { d: "m6.5 8 5.5 4 5.5-4", className: "contact-icon-stroke" })] }), _jsxs("div", { className: "contact-details", children: [_jsx("h4", { children: "Email" }), _jsx("p", { children: "info@samadhaitechnologies.com" }), _jsx("p", { children: "For general inquiries and partnership opportunities" })] })] }), _jsxs("div", { className: "contact-method", children: [_jsx(ContactIcon, { title: "Phone", children: _jsx("path", { d: "M8.2 5.5c.4-.9 1.4-1.3 2.3-1l1.8.7c.8.3 1.2 1.2 1 2l-.5 1.7c-.1.5 0 1 .4 1.3l1.6 1.6c.3.3.8.5 1.3.4l1.7-.5c.9-.2 1.8.2 2.1 1l.7 1.8c.3.9-.1 1.9-1 2.3l-1.5.7a4 4 0 0 1-3.7-.1c-2.2-1.1-4.2-2.8-6-4.6-1.8-1.8-3.5-3.8-4.6-6A4 4 0 0 1 4 5.9z" }) }), _jsxs("div", { className: "contact-details", children: [_jsx("h4", { children: "Phone" }), _jsx("p", { children: "+91 9573264575" }), _jsx("p", { children: "Monday - Friday, 9:00 AM - 6:00 PM IST" })] })] }), _jsxs("div", { className: "contact-method", children: [_jsxs(ContactIcon, { title: "Office", children: [_jsx("path", { d: "M12 20.5s6-5.5 6-10.3A6 6 0 1 0 6 10.2c0 4.8 6 10.3 6 10.3Z" }), _jsx("circle", { cx: "12", cy: "10", r: "2.2", className: "contact-icon-center" })] }), _jsxs("div", { className: "contact-details", children: [_jsx("h4", { children: "Office" }), _jsx("p", { children: "Samadhai Technologies Private Limited" }), _jsx("p", { children: "Hitech City Hyderabad, Telangana 500081" })] })] })] })] }), _jsxs(ScrollReveal, { className: "contact-form", animation: "reveal-left", children: [_jsx("h3", { children: "Send Us a Message" }), _jsxs("form", { className: "contact-form-element", ref: formRef, onSubmit: sendEmail, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "user_name", children: "Your Name *" }), _jsx("input", { type: "text", id: "user_name", name: "user_name", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "user_email", children: "Email Address *" }), _jsx("input", { type: "email", id: "user_email", name: "user_email", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "message", children: "Tell us about your project *" }), _jsx("textarea", { id: "message", name: "message", rows: 5, required: true, placeholder: "Share a short note about your organisation, the problems you are exploring, and the timelines you are working with..." })] }), sendResult && (_jsx("div", { className: `form-feedback ${sendResult.type}`, children: sendResult.message })), _jsxs("button", { type: "submit", className: "submit-button", disabled: isSending, children: [isSending ? "Sending..." : "Send Message", !isSending && _jsx("span", { className: "button-arrow", children: "\u2192" })] })] })] })] }), _jsxs(ScrollReveal, { className: "contact-cta", animation: "reveal-zoom", children: [_jsx("h3", { children: "Ready to Transform Your Business?" }), _jsx("p", { children: "Share a short note about your organisation, the problems you are exploring, and the timelines you are working with. We will respond with a calm, structured view of how Samadhai could help." }), _jsx("div", { className: "cta-buttons", children: _jsxs("button", { className: "cta-primary", children: ["Schedule a Consultation", _jsx("span", { className: "button-arrow", children: "\u2192" })] }) })] }), _jsxs("div", { className: "response-time", children: [_jsx(ScrollReveal, { children: _jsx("h3", { children: "What to Expect" }) }), _jsxs("div", { className: "response-grid", children: [_jsxs(ScrollReveal, { className: "response-item", animation: "reveal-up", delay: "delay-100", children: [_jsx("div", { className: "response-icon", children: "24h" }), _jsx("h4", { children: "Quick Response" }), _jsx("p", { children: "We'll respond within 24 business hours with initial thoughts on your project." })] }), _jsxs(ScrollReveal, { className: "response-item", animation: "reveal-up", delay: "delay-200", children: [_jsx("div", { className: "response-icon", children: "Call" }), _jsx("h4", { children: "Focused Discussion" }), _jsx("p", { children: "A 30-minute call to understand your challenges and explore potential solutions." })] }), _jsxs(ScrollReveal, { className: "response-item", animation: "reveal-up", delay: "delay-300", children: [_jsx("div", { className: "response-icon", children: "Plan" }), _jsx("h4", { children: "Clear Proposal" }), _jsx("p", { children: "Detailed recommendations with timeline, scope, and investment estimates." })] }), _jsxs(ScrollReveal, { className: "response-item", animation: "reveal-up", delay: "delay-400", children: [_jsx("div", { className: "response-icon", children: "Trust" }), _jsx("h4", { children: "Partnership Approach" }), _jsx("p", { children: "We believe in long-term relationships built on trust and mutual success." })] })] })] })] }));
};
