import React from "react";
import CenteredColumns from "components/CenteredColumns";
import "components/Features.scss";

function Features(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div className="column has-text-centered" key={index}>
          <div className="Features__feature">
            <figure className="Features2__image image is-4by3 "
              
            >
              <img src={item.image} />
            </figure>
            <h1 className="title is-4 is-spaced">{item.title}</h1>
            <h2 className="subtitle is-6 has-text-grey-darker">
              {item.subtitle}
            </h2>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Features;
