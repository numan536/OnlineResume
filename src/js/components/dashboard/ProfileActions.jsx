import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const ProfileActions = props => {
  return (
    <div
      className="btn-group mb-4"
      role="group"
      onClick={() => props.editProfile(props.profile)}
    >
      <Link to="/dashboard/editProfile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/dashboard/addExperience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/dashboard/addEducation" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default connect(
  null,
  { editProfile: actions.editProfileData }
)(ProfileActions);
