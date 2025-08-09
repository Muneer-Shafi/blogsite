import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./travel.css";

const GidsBangalorePage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  // Tech session highlights with focus on the requested topics
  const techSessions = [
    {
      id: "llm",
      title: "Large Language Models",
      description:
        "Deep dive into the architecture and capabilities of modern LLMs and their practical applications in enterprise software.",
      image: "img/gids/gids1.jpg", // Reusing existing image from static folder
      highlights: [
        "Transformer architecture deep dive",
        "Prompt engineering techniques",
        "Fine-tuning strategies for domain-specific tasks",
      ],
      speaker: "Dr. Aisha Patel",
      track: "AI & Machine Learning",
    },
    {
      id: "genai",
      title: "Generative AI Applications",
      description:
        "Building and integrating generative AI solutions for real-world business problems and challenges.",
      image: "img/gids/gids2.jpg", // Reusing existing image from static folder
      highlights: [
        "Image generation with Stable Diffusion",
        "Text-to-code capabilities",
        "Multimodal AI systems",
      ],
      speaker: "Miguel Rodriguez",
      track: "Future Tech",
    },
    {
      id: "backend",
      title: "Modern Backend Development",
      description:
        "Scalable architecture patterns and best practices for building resilient backend systems.",
      image: "img/gids/gids3.jpg", // Reusing existing image from static folder
      highlights: [
        "Microservices vs. monoliths",
        "Event-driven architectures",
        "Performance optimization techniques",
      ],
      speaker: "Raj Sharma",
      track: "Backend & Infrastructure",
    },
    {
      id: "typescript",
      title: "TypeScript Excellence",
      description:
        "Advanced TypeScript patterns and practices for building maintainable, type-safe applications.",
      image: "img/gids/gids4.jpg", // Reusing existing image from static folder
      highlights: [
        "Advanced type system features",
        "Building type-safe APIs",
        "Migration strategies for large codebases",
      ],
      speaker: "Lisa Johnson",
      track: "Languages & Frameworks",
    },
  ];

  return (
    <div className="travel-container">
      {/* Hero Section */}
      <header className="travel-hero">
        <div className="hero-content">
          <h1 className="hero-title">GIDS Bangalore 2025</h1>
          <p className="hero-subtitle">
            Exploring cutting-edge AI, GenAI, Backend Development and TypeScript
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Tech Tracks</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Sessions</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Developers</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={require("@site/static/img/gids/gids4.jpg").default}
            alt="GIDS Bangalore Conference"
          />
        </div>
      </header>

      {/* Conference Overview */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Conference Experience</h2>
          <article className="destination-card">
            <div className="destination-image">
              <img
                src={require("@site/static/img/gids/gids4.jpg").default}
                alt="GIDS Conference Hall"
              />
              <div className="destination-overlay">
                <span className="duration">August 2025</span>
                <span className="year">Bangalore, India</span>
              </div>
            </div>
            <div className="destination-content">
              <h3 className="destination-title">
                Great Indian Developer Summit
              </h3>
              <p className="destination-description">
                GIDS Bangalore brought together leading experts in AI, GenAI,
                backend development, and TypeScript. The conference featured
                in-depth technical sessions, hands-on workshops, and valuable
                networking opportunities with technology leaders and
                practitioners.
              </p>

              <div className="highlights">
                <h4>Conference Highlights</h4>
                <ul className="highlights-list">
                  <li>
                    <span className="highlight-icon">✨</span>Keynote on the
                    future of AI and LLMs
                  </li>
                  <li>
                    <span className="highlight-icon">✨</span>Hands-on GenAI
                    workshops
                  </li>
                  <li>
                    <span className="highlight-icon">✨</span>TypeScript best
                    practices panel
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Tech Sessions */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Featured Tech Sessions</h2>
          <div className="destinations-grid">
            {techSessions.map((session, index) => (
              <article
                key={session.id}
                className={`destination-card ${
                  index % 2 === 1 ? "reverse" : ""
                }`}
              >
                <div className="destination-image">
                  <img
                    src={require(`@site/static/${session.image}`).default}
                    alt={session.title}
                  />
                  <div className="destination-overlay">
                    <span className="duration">{session.track}</span>
                    <span className="year">{session.speaker}</span>
                  </div>
                </div>
                <div className="destination-content">
                  <h3 className="destination-title">{session.title}</h3>
                  <p className="destination-description">
                    {session.description}
                  </p>

                  <div className="highlights">
                    <h4>Key Takeaways</h4>
                    <ul className="highlights-list">
                      {session.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <span className="highlight-icon">✨</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="read-more-btn">
                    Session Notes
                    <span className="btn-icon">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Conference Moments</h2>
          <div className="gallery-grid">
            {/* Using existing images from static folder */}
            <div className="gallery-item">
              <img
                src={require("@site/static/img/gids/gids3.jpg").default}
                alt="AI Workshop"
              />
              <div className="gallery-overlay">
                <span>AI Workshop</span>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={require("@site/static/img/gids/gids1.jpg").default}
                alt="GenAI Presentation"
              />
              <div className="gallery-overlay">
                <span>GenAI Presentation</span>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={require("@site/static/img/gids/gids2.jpg").default}
                alt="Backend Architecture Talk"
              />
              <div className="gallery-overlay">
                <span>Backend Architecture Talk</span>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={require("@site/static/img/gids/gids3.jpg").default}
                alt="TypeScript Panel"
              />
              <div className="gallery-overlay">
                <span>TypeScript Panel</span>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={require("@site/static/img/gids/gids4.jpg").default}
                alt="Networking Event"
              />
              <div className="gallery-overlay">
                <span>Networking Event</span>
                <button className="view-btn">View</button>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src={require("@site/static/img/gids/gids4.jpg").default}
                alt="Bangalore Tech Community"
              />
              <div className="gallery-overlay">
                <span>Bangalore Tech Community</span>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bangalore Experience */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Bangalore: India's Tech Hub</h2>
          <article className="destination-card reverse">
            <div className="destination-image">
              <img
                src={require("@site/static/img/gids/gids1.jpg").default}
                alt="Bangalore Tech District"
              />
              <div className="destination-overlay">
                <span className="duration">Tech Tour</span>
                <span className="year">2025</span>
              </div>
            </div>
            <div className="destination-content">
              <h3 className="destination-title">Silicon Valley of India</h3>
              <p className="destination-description">
                Beyond the conference, I explored Bangalore's vibrant tech
                ecosystem. Known as India's Silicon Valley, the city is home to
                numerous tech giants, innovative startups, and research centers
                pushing the boundaries of AI, cloud computing, and software
                development.
              </p>

              <div className="highlights">
                <h4>Tech Hub Highlights</h4>
                <ul className="highlights-list">
                  <li>
                    <span className="highlight-icon">✨</span>Visit to AI
                    research centers
                  </li>
                  <li>
                    <span className="highlight-icon">✨</span>Startup ecosystem
                    exploration
                  </li>
                  <li>
                    <span className="highlight-icon">✨</span>Developer
                    community meetups
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Connect About Tech Conferences</h2>
            <p>
              Interested in discussing AI, GenAI, backend development, or
              TypeScript? Let's connect and share insights!
            </p>
            <div className="contact-buttons">
              <button className="contact-btn primary">
                Discuss Tech
                <span className="btn-icon">💬</span>
              </button>
              <button className="contact-btn secondary">
                View My Projects
                <span className="btn-icon">💻</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GidsBangalorePage;
