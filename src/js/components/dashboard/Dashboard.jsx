import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import ProfileActions from "./ProfileActions";
import { Button } from "@material-ui/core";
import Experience from "./Experience.jsx";
import Education from "./Education";
import { shape, func, arrayOf, any, string } from "prop-types";

class Dashboard extends Component {
  render() {
    const { profileData, deleteProfile, errors } = this.props;
    return (
      // <!-- Dashboard -->
      <div>
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4">Dashboard</h1>
                {Object.keys(errors).length && profileData.data.length === 0 ? (
                  <div className="invalid-feedback">{errors.message}</div>
                ) : (
                  ""
                )}
                {profileData.error &&
                Object.keys(profileData.error).length !== 0 ? (
                  <div>
                    <div>
                      {profileData.isLoading === true ? (
                        <CircularProgress />
                      ) : (
                        <div>
                          <p class="lead text-muted">
                            Welcome {localStorage.getItem("name")}
                          </p>
                          {profileData.error.message}
                        </div>
                      )}
                    </div>

                    <Link to="/dashboard/createProfile">
                      <div className="btn btn-primary">Create Profile </div>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p class="lead text-muted">
                      Welcome{" "}
                      <Link to={`/profile/${profileData.data.handle}`}>
                        {" "}
                        {localStorage.getItem("name")}
                      </Link>
                    </p>
                    <ProfileActions {...this.props} />
                    <Experience
                      experience={
                        Object.keys(profileData.data).length &&
                        profileData.data.experience
                      }
                    />
                    <Education
                      education={
                        Object.keys(profileData.data).length &&
                        profileData.data.education
                      }
                    />
                    <div style={{ marginBottom: 60 }}>
                      <Button
                        variant="raised"
                        color="secondary"
                        onClick={deleteProfile}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profileData, errors }) {
  return {
    profileData,
    errors
  };
}

Dashboard.propsTypes = {
  profileData: shape({
    data: shape({
      handle: string,
      location: string,
      education: arrayOf(any),
      experience: arrayOf(any)
    })
  }),
  deleteProfile: func.isRequired
};
export default connect(
  mapStateToProps,
  {
    deleteProfile: actions.deleteProfileData
  }
)(Dashboard);
