import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { isTokenValid } from "../../utils";
import { func, bool } from "prop-types";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.display,
      image: localStorage.getItem("avatar"),
      navCollapsed: true
    };
  }
  onToogleNav = () => {
    this.setState({
      navCollapsed: !this.state.navCollapsed
    });
  };
  componentWillReceiveProps(nextProps) {
    const { display } = this.props;
    if (display !== nextProps.display) {
      // Check if it's a new user, you can also use some unique, like the ID
      this.setState({
        display: nextProps.display
      });
      this.forceUpdate();
    }
  }
  render() {
    const { signoutUser } = this.props;
    const { display, image, navCollapsed } = this.state;
    const tokenValid = isTokenValid();
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              DevConnector
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
              onClick={this.onToogleNav}
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* <div className="collapse navbar-collapse" id="mobile-nav"> */}
            <div
              className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}
              id="mobile-nav"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/allProfiles" className="nav-link">
                    {" "}
                    Developers
                  </Link>
                </li>
              </ul>
              {display === true ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/feed">
                      Post Feed
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={() => signoutUser()}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        className="rounded-circle"
                        style={{ width: 25, marginRight: 5 }}
                        src={image}
                        alt={localStorage.getItem("name")}
                      />{" "}
                      Logout
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.proptypes = {
  signoutUser: func.isRequired,
  display: bool.isRequired
};
function mapStateToProps({ success }) {
  return {
    display: success.display
  };
}
export default connect(
  mapStateToProps,
  { signoutUser: actions.signoutUser }
)(Navbar);
