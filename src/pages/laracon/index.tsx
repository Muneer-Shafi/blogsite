import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../travel/travel.css";

const LaraconPage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  // Conference sessions and topics
  const conferenceTopics = [
    {
      id: "laravel-11",
      title: "Laravel 11 Ecosystem",
      description:
        "Deep dive into the latest Laravel 11 features, improvements, and best practices for modern web applications.",
      image: "img/laracon/photo_2026-02-10_11-39-51.jpg",
      highlights: [
        "New Laravel 11 features",
        "Performance optimizations",
        "Upgrade strategies",
      ],
      speaker: "Taylor Otwell",
      track: "Laravel Framework",
    },
    {
      id: "api-design",
      title: "Building Robust APIs",
      description:
        "Creating scalable, secure, and maintainable APIs with Laravel and modern best practices.",
      image: "img/laracon/photo_2026-02-10_11-39-54.jpg",
      highlights: [
        "RESTful API design patterns",
        "Authentication & authorization",
        "Rate limiting & caching",
      ],
      speaker: "Adam Wathan",
      track: "Backend Development",
    },
    {
      id: "testing",
      title: "Testing Best Practices",
      description:
        "Comprehensive testing strategies including unit tests, feature tests, and browser testing with Laravel.",
      image: "img/laracon/photo_2026-02-10_11-39-56.jpg",
      highlights: [
        "Test-driven development",
        "PHPUnit & Pest",
        "Test automation",
      ],
      speaker: "Nuno Maduro",
      track: "Quality Assurance",
    },
    {
      id: "frontend",
      title: "Modern Frontend with Laravel",
      description:
        "Integrating React, Vue, and TypeScript with Laravel for full-stack development.",
      image: "img/laracon/photo_2026-02-10_11-40-03.jpg",
      highlights: [
        "Inertia.js integration",
        "Vite bundling",
        "Component-based architecture",
      ],
      speaker: "Jonathan Reinink",
      track: "Full-Stack Development",
    },
    {
      id: "database",
      title: "Database Design & Optimization",
      description:
        "Advanced database patterns, query optimization, and schema design with Laravel.",
      image: "img/laracon/photo_2026-02-10_11-40-06.jpg",
      highlights: [
        "Query optimization",
        "Database design patterns",
        "N+1 problem solutions",
      ],
      speaker: "Freek Van der Herten",
      track: "Database & Performance",
    },
    {
      id: "deployment",
      title: "Production Deployment",
      description:
        "Deploying Laravel applications to production with best practices for reliability and scalability.",
      image: "img/laracon/photo_2026-02-10_11-40-10.jpg",
      highlights: [
        "CI/CD pipelines",
        "Docker containerization",
        "Cloud deployment strategies",
      ],
      speaker: "Mohamed Said",
      track: "DevOps & Deployment",
    },
  ];

  return (
    <Layout
      title="Laracon Conference 2024"
      description="My experience at Laracon - Laravel conference"
    >
      <div className="travel-container">
        {/* Hero Section */}
        <header className="travel-hero">
          <div className="hero-content">
            <h1 className="hero-title">Laracon 2024</h1>
            <p className="hero-subtitle">
              Exploring the future of Laravel and modern PHP web development
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Main Tracks</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Sessions</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Developers</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={
                require("@site/static/img/laracon/photo_2026-02-10_11-40-12.jpg")
                  .default
              }
              alt="Laracon Conference"
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
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-39-51.jpg")
                      .default
                  }
                  alt="Laracon Conference Hall"
                />
                <div className="destination-overlay">
                  <span className="duration">2024</span>
                  <span className="year">Laravel Conference</span>
                </div>
              </div>
              <div className="destination-content">
                <h3 className="destination-title">
                  Laracon - The Laravel Conference
                </h3>
                <p className="destination-description">
                  Laracon is the premier conference for Laravel developers and
                  PHP enthusiasts. This year's event showcased the latest
                  developments in the Laravel ecosystem, best practices for
                  building scalable web applications, and insights from the
                  Laravel community leaders. The conference featured inspiring
                  keynotes, technical workshops, and excellent networking
                  opportunities.
                </p>

                <div className="highlights">
                  <h4>Conference Highlights</h4>
                  <ul className="highlights-list">
                    <li>
                      <span className="highlight-icon">✨</span>Keynote on
                      Laravel's vision and roadmap
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Advanced
                      workshops on modern Laravel patterns
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Networking with
                      leading Laravel developers
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Community
                      celebrations and team building
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Conference Topics */}
        <section className="destinations-section">
          <div className="container">
            <h2 className="section-title">Featured Conference Topics</h2>
            <div className="destinations-grid">
              {conferenceTopics.map((topic, index) => (
                <article
                  key={topic.id}
                  className={`destination-card ${
                    index % 2 === 1 ? "reverse" : ""
                  }`}
                >
                  <div className="destination-image">
                    <img
                      src={require(`@site/static/${topic.image}`).default}
                      alt={topic.title}
                    />
                    <div className="destination-overlay">
                      <span className="duration">{topic.track}</span>
                      <span className="year">{topic.speaker}</span>
                    </div>
                  </div>
                  <div className="destination-content">
                    <h3 className="destination-title">{topic.title}</h3>
                    <p className="destination-description">
                      {topic.description}
                    </p>

                    <div className="highlights">
                      <h4>Key Topics</h4>
                      <ul className="highlights-list">
                        {topic.highlights.map((highlight, idx) => (
                          <li key={idx}>
                            <span className="highlight-icon">✨</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="read-more-btn">
                      Learn More
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
              <div className="gallery-item">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-39-51.jpg")
                      .default
                  }
                  alt="Keynote Address"
                />
                <div className="gallery-overlay">
                  <span>Keynote Address</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-39-54.jpg")
                      .default
                  }
                  alt="Workshop Session"
                />
                <div className="gallery-overlay">
                  <span>Workshop Session</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-39-56.jpg")
                      .default
                  }
                  alt="Panel Discussion"
                />
                <div className="gallery-overlay">
                  <span>Panel Discussion</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-40-03.jpg")
                      .default
                  }
                  alt="Networking Event"
                />
                <div className="gallery-overlay">
                  <span>Networking Event</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-40-06.jpg")
                      .default
                  }
                  alt="Community Gathering"
                />
                <div className="gallery-overlay">
                  <span>Community Gathering</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-40-10.jpg")
                      .default
                  }
                  alt="Laravel Community"
                />
                <div className="gallery-overlay">
                  <span>Laravel Community</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="destinations-section">
          <div className="container">
            <h2 className="section-title">Key Takeaways</h2>
            <article className="destination-card reverse">
              <div className="destination-image">
                <img
                  src={
                    require("@site/static/img/laracon/photo_2026-02-10_11-40-12.jpg")
                      .default
                  }
                  alt="Learning Experience"
                />
                <div className="destination-overlay">
                  <span className="duration">Professional Growth</span>
                  <span className="year">2024</span>
                </div>
              </div>
              <div className="destination-content">
                <h3 className="destination-title">
                  Laravel Development Excellence
                </h3>
                <p className="destination-description">
                  Laracon 2024 was an incredible experience that deepened my
                  understanding of modern Laravel development. From exploring
                  Laravel 11's new features to mastering advanced testing
                  strategies and deploying scalable applications, the conference
                  provided valuable insights and inspiration from industry
                  leaders.
                </p>

                <div className="highlights">
                  <h4>Learning Outcomes</h4>
                  <ul className="highlights-list">
                    <li>
                      <span className="highlight-icon">✨</span>Mastered latest
                      Laravel framework features
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Learned advanced
                      API design patterns
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Improved testing
                      and quality assurance practices
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Explored modern
                      deployment strategies
                    </li>
                    <li>
                      <span className="highlight-icon">✨</span>Connected with
                      the global Laravel community
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
              <h2>Connect About Laravel & Web Development</h2>
              <p>
                Interested in discussing Laravel, web development, or my
                experience at Laracon? Let's connect and exchange ideas!
              </p>
              <div className="contact-buttons">
                <button className="contact-btn primary">
                  Discuss Laravel
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
    </Layout>
  );
};

export default LaraconPage;
