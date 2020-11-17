import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Features2 from "components/Features2";
import "components/FeaturesSection2.scss";

function FeaturesSection2(props) {
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
        <div className="FeaturesSection2__box box">
          <Features2
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Lorem Ipsum",
                body:
                  "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
              },
              {
                title: "Lorem Ipsum",
                body:
                  "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection2;
