import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import "./index.css";
import PersonalInfo from "../components/Personal/personal";
import SkillSet from "../components/Skills/skillSet";
import Resume from "../components/Resume/resume";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="image-container">
      <div className="container">
        <div className="rows flex-center title-container fade-in">
          <div className="text-container text-center">
            <h1 className="title font-bold">{siteConfig.title}</h1>
            <p className="subtitle font-medium">{siteConfig.tagline}</p>
            <div className="mt-4">
              <Link className="button button--primary button--lg" to="/blog">
                View My Blog 📝
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-in">
        <img
          src={require("@site/static/img/muneer.jpg").default}
          alt="Muneer Shafi - Full Stack Developer"
          className="muneer-img"
          loading="lazy"
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Full Stack Developer`}
      description="Muneer Shafi - Passionate Full Stack Developer specializing in modern web technologies, PHP, Symfony, React, and more."
    >
      <HomepageHeader />
      <main>
        <section className="section section--light">
          <div className="container">
            <PersonalInfo />
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <SkillSet />
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <Resume />
          </div>
        </section>
      </main>
    </Layout>
  );
}
