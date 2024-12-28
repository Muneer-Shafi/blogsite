import Layout from "@theme/Layout";
import "./aboutme.css";
type Props = {};
export default function AboutMuneer({}: Props) {
  return (
    <Layout title="Token" description="Api Access Token">
      <div className="cols  flex-center">
        <div className="about-me-container">
          <h1>All About Muneer</h1>
          <img
            src={require("@site/static/img/muneer.jpg").default}
            alt="Muneer"
          />
        </div>
        <div className="about-me-content">
          <div className="about-me-header">
            <h1>Hi, I'm a Full-Stack Developer 🚀</h1>
            <p>
              Passionate about building scalable web applications and APIs with
              modern tools and technologies.
            </p>
          </div>
          <section>
            <h2>🛠 Tools & Technologies</h2>
            <p>
              <strong>Backend:</strong> Symfony API Platform, REST API, GraphQL{" "}
              <br />
              <strong>Frontend:</strong> React, TypeScript, GraphQL <br />
              <strong>DevOps:</strong> Docker, NixOS <br />
              <strong>Other Skills:</strong> MySQL, JWT Authentication, ERP
              Systems
            </p>
          </section>
          <section>
            <h2>📚 Current Focus</h2>
            <p>
              Creating enterprise-level applications with seamless integrations
              between REST and GraphQL APIs. Optimizing performance using Docker
              and NixOS for scalable deployments.
            </p>
          </section>
          <section>
            <h2>🌱 Always Learning</h2>
            <p>
              Exploring modern design patterns and improving system scalability,
              security, and user experience.
            </p>
          </section>
          <section>
            <h2>📫 Connect with Me</h2>
            <ul className="contact-list">
              <li>
                <a
                  href="https://github.com/Muneer-Shafi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/muneer-shafi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:youremail@example.com">Email</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
