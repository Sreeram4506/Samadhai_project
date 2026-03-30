import React from "react";
import { Hero } from "../components/Hero";

export const HomePage: React.FC = () => {
  return (
    <div className="page-root">
      <main>
        <section id="home" className="hero-wrapper">
          <Hero />
        </section>
      </main>
    </div>
  );
};
