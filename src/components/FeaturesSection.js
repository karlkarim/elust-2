import React from "react";
import Section from "components/Section";
import Features from "components/Features";

function FeaturesSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <Features
          items={[
            {
              title: "Uuuringud tuuleparkides",
              subtitle:
                "We've gamified everything so you feel like you're having fun when you're actually doing free work for us. Win win!",
              image: "./turbiin.svg",
              iconColor: "warning",
            },
            {
              title: "Seire ja inventuurid",
              subtitle:
                "If you want to keep having fun remember to stay charged! And by that we mean you need to buy our ERC-20 CHARGE token to keep playing.",
              image: "./seire.svg",
              iconColor: "danger",
            },
            {
              title: "Pick your flavor",
              subtitle:
                "Dark mode is so last year. We have a light mode and turquoise mode. Either way, your eyes are going to hurt. Don't forget to stay charged!",
                image: "./camp.svg",
              iconColor: "primary",
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
