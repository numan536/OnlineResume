import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../dashboard/Spinner";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import ProfileItem from "./ProfileItem";

class Profiles extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
  }
  render() {
    const { allProfiles, errors } = this.props;
    let profileItems;
    if (allProfiles.isLoading) {
      profileItems = <Spinner />;
    } else {
      if (allProfiles.data.length) {
        profileItems =
          allProfiles.data.length &&
          allProfiles.data.map(profile => {
            return <ProfileItem profile={profile} />;
          });
      } else {
        profileItems = <h4>No Profiles Found</h4>;
      }
    }

    return (
      <div>
        <div class="profiles">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="display-4 text-center">Developer Profiles</h1>
                <p class="lead text-center">
                  Browse and connect with developers
                </p>
                {profileItems}
                {Object.keys(errors).length ? (
                  <div className="invalid-feedback">{errors.message}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allProfiles: state.allProfilesData,
    errors: state.errors
  };
}

Profiles.PropTypes = {
  allProfiles: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getAllProfiles: actions.getAllProfile }
)(Profiles);
