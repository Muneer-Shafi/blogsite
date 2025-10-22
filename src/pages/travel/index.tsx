import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import GidsBangalorePage from "../banglore";
import "./travel.css";

const TravelPage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  const destinations = [
    {
      id: "germany",
      name: "Germany",
      description:
        "My adventure through the historic cities and breathtaking landscapes of Germany.",
      highlights: [
        "Berlin's rich history",
        "Bavarian Alps",
        "Romantic Rhine Valley",
      ],
      image: "img/europe/german.jpg", // Using existing image
      duration: "10 days",
      year: "2024",
    },
    {
      id: "netherlands",
      name: "Netherlands",
      description:
        "Exploring the charming canals, colorful tulip fields, and vibrant culture of the Netherlands.",
      highlights: [
        "Amsterdam's canals",
        "Windmills of Kinderdijk",
        "Keukenhof Gardens",
      ],
      image: "img/europe/ams.jpg", // Using existing image
      duration: "7 days",
      year: "2024",
    },
    {
      id: "brussels",
      name: "Brussels",
      description:
        "Discovering the heart of Europe through Brussels' magnificent architecture and delicious cuisine.",
      highlights: ["Grand Place", "Atomium", "Belgian chocolate tasting"],
      image: "img/europe/palace.jpg", // Using existing image

      duration: "4 days",
      year: "2024",
    },
  ];

  return (
    <Layout
      title="My European Adventures"
      description="Travel experiences through Germany, Netherlands, and Brussels"
    >
      <div className="travel-container">
        {/* Hero Section */}
        <header className="travel-hero">
          <div className="hero-content">
            <h1 className="hero-title">My European Adventures</h1>
            <p className="hero-subtitle">
              Join me on a journey through Germany, the Netherlands, and
              Brussels
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat">
                <span className="stat-number">32</span>
                <span className="stat-label">Days</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Memories</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={require("@site/static/img/europe/with_car.jpg").default}
              alt="muneer_nl1"
            />
          </div>
        </header>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2 className="section-title">My Travel Route</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <h3>🗺️ Interactive Map</h3>
                  <p>Follow my journey across Europe</p>
                  <div className="route-markers">
                    <div className="marker germany">🇩🇪 Germany</div>
                    <div className="marker netherlands">🇳🇱 Netherlands</div>
                    <div className="marker brussels">🇧🇪 Brussels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="destinations-section">
          <div className="container">
            <h2 className="section-title">Destinations</h2>
            <div className="destinations-grid">
              {destinations.map((destination, index) => (
                <article
                  key={destination.id}
                  className={`destination-card ${
                    index % 2 === 1 ? "reverse" : ""
                  }`}
                >
                  <div className="destination-image">
                    <img
                      src={require(`@site/static/${destination.image}`).default}
                      alt={destination.name}
                    />
                    <div className="destination-overlay">
                      <span className="duration">{destination.duration}</span>
                      <span className="year">{destination.year}</span>
                    </div>
                  </div>
                  <div className="destination-content">
                    <h3 className="destination-title">{destination.name}</h3>
                    <p className="destination-description">
                      {destination.description}
                    </p>

                    <div className="highlights">
                      <h4>Highlights</h4>
                      <ul className="highlights-list">
                        {destination.highlights.map((highlight, idx) => (
                          <li key={idx}>
                            <span className="highlight-icon">✨</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="read-more-btn">
                      Read More
                      <span className="btn-icon">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section>
          <GidsBangalorePage />
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2>Share Your Travel Experiences</h2>
              <p>
                Have you been to any of these places? I'd love to hear about
                your experiences and travel tips!
              </p>
              <div className="contact-buttons">
                <button className="contact-btn primary">
                  Contact Me
                  <span className="btn-icon">✉️</span>
                </button>
                <button className="contact-btn secondary">
                  View Blog
                  <span className="btn-icon">📝</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TravelPage;
