import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import * as actions from "../../actions";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileHandle(this.props.match.params.handle);
    }
  }
  render() {
    const profile = this.props.profileDataHandle.data;
    const errors = this.props.errors;
    const headerData = Object.keys(profile).length ? (
      <div class="profile">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-6">
                  <Link to="/allProfiles" class="btn btn-light mb-3 float-left">
                    Back To Profiles
                  </Link>
                </div>
                <div class="col-md-6" />
              </div>
              <ProfileHeader profile={profile} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );

    return (
      <div className="profile">
        {headerData}
        {Object.keys(errors).length ? (
          <div className="invalid-feedback">{errors.message}</div>
        ) : (
          ""
        )}
        {Object.keys(profile).length && <ProfileAbout profile={profile} />}
        {Object.keys(profile).length && (
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          />
        )}
        {profile.githubUsername && (
          <ProfileGithub userName={profile.githubUsername} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileDataHandle: state.getProfileHandle,
    errors: state.errors
  };
}
Profile.propTypes = {
  getProfileHandle: Proptypes.func,
  profileDataHandle: Proptypes.object
};
export default connect(
  mapStateToProps,
  { getProfileHandle: actions.getProfileHandle }
)(Profile);
