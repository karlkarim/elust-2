import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import TeamBios from "components/TeamBios";

function TeamBiosSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <TeamBios
          people={[
            {
              image: "https://uploads.divjoy.com/pexels-14661-1125x750.jpeg",
              name: "John Smith",
              role: "Software Engineer",
            },
            {
              image: "https://uploads.divjoy.com/pexels-52739-1125x750.jpeg",
              name: "Lisa Zinn",
              role: "Software Engineer",
            },
            {
              image: "https://uploads.divjoy.com/pexels-7051-1125x750.jpeg",
              name: "Sarah Howard",
              role: "Designer",
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
