import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateProfile from "../createProfile/CreateProfile";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AddExperience from "../addCredentials/AddExperience";
import AddEducation from "../addCredentials/AddEducation";
import EditProfile from "../createProfile/EditProfile";
import { shape, func, arrayOf, any, string } from "prop-types";

class DashboardHome extends React.Component {
  state = {
    render: 0
  };
  componentDidMount() {
    this.props.getProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.success !== nextProps.success) {
      this.setState({
        render: this.state.render + 1
      });
    }
  }
  render() {
    const { profileData, errors } = this.props;
    return (
      <div>
        {Object.keys(errors).length ? (
          <div className="invalid-feedback">{errors.message}</div>
        ) : (
          ""
        )}
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={props => {
              return <Dashboard {...props} profile={profileData.data} />;
            }}
          />
          <Route
            exact
            path="/dashboard/createProfile"
            render={() => {
              return <CreateProfile createEdit="Create" />;
            }}
          />
          <Route
            exact
            path="/dashboard/editProfile"
            render={() => {
              return <CreateProfile createEdit="Edit" />;
            }}
          />
          <Route
            exact
            path="/dashboard/addExperience"
            component={AddExperience}
          />
          <Route
            exact
            path="/dashboard/addEducation"
            component={AddEducation}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileData: state.profileData,
    errors: state.errors,
    success: state.success
  };
}

DashboardHome.propTypes = {
  profileData: shape({
    data: shape({
      handle: string,
      location: string,
      education: arrayOf(any),
      experience: arrayOf(any)
    })
  }),
  success: shape({
    message: string
  })
};

export default connect(
  mapStateToProps,
  { getProfile: actions.getCurrentProfile }
)(DashboardHome);
