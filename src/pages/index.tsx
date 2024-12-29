import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import "./index.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className="image-container">
        <div className="rows flex-start title-container">
          <h1 className="title">{siteConfig.title}</h1>
          <p className="subtitle">{siteConfig.tagline}</p>
        </div>
        <img
          src={require("@site/static/img/muneer.jpg").default}
          alt="Muneer"
          className="muneer-img"
        />
      </div>
      <div className="container"></div>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
