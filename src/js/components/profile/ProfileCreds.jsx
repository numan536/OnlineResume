import React from "react";
import Moment from "react-moment";

export default ({ education, experience }) => {
  const expItems = experience.map(exp => (
    <li key={exp._id} class="list-group-item">
      <h4>{exp.company}</h4>
      <p>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
        {exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : "Now"}
      </p>
      <p>
        <span>
          <strong>Position:</strong> {exp.title}
        </span>
      </p>
      <p>
        {exp.location && (
          <span>
            <strong>Location: </strong> {exp.location}
          </span>
        )}
      </p>
      <p>
        {exp.description && (
          <span>
            <strong>Description: </strong> {exp.description}
          </span>
        )}
      </p>
    </li>
  ));

  const eduItems = education.map(edu => (
    <li key={edu._id} class="list-group-item">
      <h4>{edu.school}</h4>
      <p>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
        {edu.to ? <Moment format="YYYY/MM/DD">{edu.to}</Moment> : "Now"}
      </p>
      <p>
        <span>
          <strong>Degree:</strong> {edu.degree}
        </span>
      </p>
      <p>
        {edu.location && (
          <span>
            <strong>Location: </strong> {edu.location}
          </span>
        )}
      </p>
      <p>
        {edu.description && (
          <span>
            <strong>Description: </strong> {edu.description}
          </span>
        )}
      </p>
    </li>
  ));
  return (
    <div className="row">
      <div className="col-md-6">
        <h3 className="text-center text-info">Experience</h3>
        {expItems.length ? (
          <ul className="list-group">{expItems}</ul>
        ) : (
          <p className="text-center">No Experience Listed</p>
        )}
      </div>
      <div className="col-md-6">
        <h3 className="text-center text-info">Education</h3>
        {eduItems.length ? (
          <ul className="list-group">{eduItems}</ul>
        ) : (
          <p className="text-center">No Education Listed</p>
        )}
      </div>
    </div>
  );
};
