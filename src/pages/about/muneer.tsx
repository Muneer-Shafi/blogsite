import Layout from "@theme/Layout";
import "./aboutme.css";
type Props = {};
export default function AboutMuneer({}: Props) {
  return (
    <Layout title="About me" description="about me">
      <div className="cols  flex-center">
        <div className="rows w-80 ">
          <img
            src={require("@site/static/img/brown_muneer.jpg").default}
            alt="Muneer"
            className="muneer-img"
          />
        </div>
        <div className="rows  w-80">
          <div className="about-me-header">
            <h1 className="">All About Muneer</h1>

            <h2 className="text-orange">Hi, I'm a Software Engineer 🚀</h2>
            <p>
              Passionate about building scalable web applications and APIs with
              modern tools and technologies.
            </p>
          </div>
          <section>
            <h2>🛠 Tools & Technologies</h2>
            <div className="rows">
              <span>
                <strong>Backend:</strong> Symfony framework, API Platform, REST
                API ,Python(django), GraphQL
              </span>
              <span>
                <strong>Frontend:</strong> React, TypeScript, GraphQL,
                AngularJs, Js
              </span>
              <span>
                <strong>DevOps:</strong> Docker, NixOS, AWS
              </span>
              <span>
                <strong>Other Skills:</strong> MySQL, JWT Authentication, Jira,
                OpenApi, Linux
              </span>
            </div>
          </section>
          <section>
            <h2>📚 Current Focus</h2>
            <p>
              As a software engineer, my current focus lies in crafting robust
              and scalable enterprise-level applications. Leveraging Symfony API
              Platform for backend development, I specialize in creating RESTful
              and GraphQL APIs that integrate seamlessly with modern frontend
              frameworks like React. On the frontend, I strive to deliver
              responsive and dynamic user experiences using React and
              TypeScript, ensuring accessibility and performance. For deployment
              and infrastructure, I employ Docker and NixOS, streamlining
              workflows for development and production environments.
              Additionally, I am actively exploring advanced authentication
              methods, such as JWT, and enhancing ERP systems for greater
              efficiency and adaptability. My ultimate goal is to align
              cutting-edge technologies with business needs to provide impactful
              and sustainable solutions.
            </p>
          </section>
          <section>
            <h2>🌱 Always Learning</h2>
            <p>
              I thrive on continuous learning, staying curious and adaptive in
              the fast-evolving tech landscape. My focus extends from mastering
              tools like React, GraphQL, and Docker to exploring emerging fields
              like AI, Machine Learning, and Deep Learning. I am passionate
              about leveraging these technologies to build smarter, more
              impactful solutions while growing both technically and
              collaboratively. Learning isn’t just a task—it’s a mindset that
              fuels my drive to innovate and excel.
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
                  href="https://www.linkedin.com/in/muneer-shafi-618093190/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:mcamuneershafi@gmail.com">Email</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
