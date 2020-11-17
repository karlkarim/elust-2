import React from "react";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import FeaturesSection2 from "components/FeaturesSection2";
import ContactSection from "components/ContactSection";
import TeamBiosSection from "components/TeamBiosSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Elustik OÜ"
        subtitle="Pakume nahkhiirte seiret ja loendust"
        buttonText="Get Started"
        image="/logo.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        className="is-elustik"
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
      />
      <FeaturesSection2
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ContactSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        showNameField={true}
      />
      <TeamBiosSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
