import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile }) => {
  return (
    <div>
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" src={profile.user.avatar} alt="" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{" "}
              {profile.company ? " at " + profile.company : "at Company"}
            </p>
            <p>{profile.location && profile.location}</p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1" />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
ProfileItem.propTypes = {
  profile: Proptypes.object.isRequired
};
export default ProfileItem;
