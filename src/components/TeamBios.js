import React from "react";
import CenteredColumns from "components/CenteredColumns";

function TeamBios(props) {
  return (
    <CenteredColumns>
      {props.people.map((person, index) => (
        <div className="column is-half-tablet is-one-third-desktop" key={index}>
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={person.image} alt={person.name} />
              </figure>
            </div>
            <div className="card-content has-text-centered">
              <p className="is-size-5">{person.name}</p>
              <p className="is-size-7 has-text-weight-semibold is-uppercase">
                {person.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default TeamBios;
