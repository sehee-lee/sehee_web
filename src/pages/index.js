import React from "react";
import {
  AboutSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Sehee Lee" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        {/*<InterestsSection sectionId="details" heading="Details" />*/}
        <ProjectsSection sectionId="features" heading="Project" />
      </Page>
    </>
  );
}
