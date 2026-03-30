import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-heading-block">
        <ScrollReveal animation="reveal-up">
          <p className="eyebrow">Samadhai Technologies</p>
        </ScrollReveal>

        <ScrollReveal animation="reveal-up" delay="delay-100">
          <h1 className="hero-title">
            Engineering calm into
            <span>complex systems.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="reveal-up" delay="delay-200">
          <p className="hero-tagline">
            We build software that simplifies, not complicates. From AI-driven
            internal tools to reliable enterprise platforms.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="reveal-up" delay="delay-300">
          <p className="hero-subcopy">
            A small team, based in Telangana, with a focus on durability,
            clarity, and long-term technology partnerships.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal
        animation="reveal-zoom"
        delay="delay-400"
        className="hero-visual-wrapper"
      >
        <div className="animated-computer">
          <div className="computer-screen">
            <div className="screen-glow"></div>
            <div className="screen-content">
              <p className="type-line">{`> INITIALIZING_SYSTEM...`}</p>
              <p className="type-line type-line--delay1">{`> CONNECTING_TO_NODES... OK`}</p>
              <p className="type-line type-line--delay2">{`> STATUS: READY_FOR_INNOVATION`}</p>
              <div className="type-cursor">_</div>
            </div>
          </div>
          <div className="computer-base"></div>
          <div className="keyboard">
            <div className="key-row">
              <div className="key key-active"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key key-active"></div>
              <div className="key"></div>
            </div>
            <div className="key-row">
              <div className="key"></div>
              <div className="key key-active"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
            </div>
          </div>
          <div className="tech-particles">
            <div className="particle" style={{ left: "20%", top: "80%" }}></div>
            <div className="particle" style={{ left: "50%", top: "60%" }}></div>
            <div className="particle" style={{ left: "80%", top: "90%" }}></div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
