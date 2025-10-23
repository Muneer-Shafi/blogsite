import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import "./homepage.css";
import PersonalInfo from "../components/Personal/personal";
// Import enhanced components
import SkillSet from "../components/Skills/skillSet-enhanced";
import Resume from "../components/Resume/resume-enhanced";
import React, { useEffect, useRef } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Initialize particles on component mount
  useEffect(() => {
    // Animation for particles can be handled with CSS
  }, []);

  return (
    <header className="image-container">
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Hero Background Elements */}
      <div className="hero-background">
        <div className="hero-glow"></div>
        <div className="hero-particles">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className={`particle particle-${index + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="rows flex-center title-container fade-in">
          <div className="text-container text-center">
            <h1 className="title font-bold">{siteConfig.title}</h1>
            <p className="subtitle font-medium">{siteConfig.tagline}</p>
            <div className="mt-4">
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Explore My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-in">
        <img
          src={require("@site/static/img/muneer.jpg").default}
          alt="Muneer Shafi - software Engineer"
          className="muneer-img"
          loading="lazy"
        />
      </div>
    </header>
  );
}

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    resume: useRef(null),
  };

  useEffect(() => {
    // Initialize intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-up", "animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup observer
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} - software Engineer`}
      description="Muneer Shafi - Passionate software Engineer specializing in modern web technologies, PHP, Symfony, React, and more."
    >
      <HomepageHeader />
      <main className="homepage-container">
        <section ref={sectionRefs.about} className="section section--light">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                Get to know me, my background, and what drives me in the world
                of software engineering.
              </p>
            </div>
            <PersonalInfo />
          </div>
          <div className="section-divider"></div>
        </section>

        <section ref={sectionRefs.skills} className="section section--dark">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">My Skills</h2>
              <p className="section-subtitle">
                Technologies and tools I've mastered throughout my professional
                journey.
              </p>
            </div>
            <SkillSet />
          </div>
          <div className="section-divider"></div>
        </section>

        <section ref={sectionRefs.resume} className="section section--light">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">My Experience</h2>
              <p className="section-subtitle">
                Professional journey, roles, and projects that have shaped my
                expertise.
              </p>
            </div>
            <Resume />
          </div>
        </section>
      </main>
    </Layout>
  );
}
