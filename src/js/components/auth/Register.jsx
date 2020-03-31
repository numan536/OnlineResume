import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actions from "../../actions";
import classnames from "classnames";
import { EROFS } from "constants";
import TextFieldBoot from "../reuseableComponents/TextFieldBootstrap";

class Register extends Component {
  componentWillUpdate() {
    return this.props.inputData.errors.message;
  }
  render() {
    const {
      changeName,
      changePassword,
      changeEmail,
      changeConfirmPassword,
      submitRegisterData,
      inputData,
      submitErrors
    } = this.props;
    const { errors } = inputData;
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                {Object.keys(submitErrors).length ? (
                  <div className="invalid-feedback">{submitErrors.message}</div>
                ) : (
                  ""
                )}
                <p className="lead text-center">
                  Create your DevConnector account
                </p>
                {errors.message && (
                  <h3 className="display-6" style={{ color: "red" }}>
                    {errors.message}
                  </h3>
                )}

                <form
                  onSubmit={e => {
                    e.preventDefault();
                    submitRegisterData(inputData);
                  }}
                >
                  <TextFieldBoot
                    name="Name"
                    value={inputData.name}
                    onChange={e => changeName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    error={errors.name}
                  />
                  <TextFieldBoot
                    name="email"
                    type="email"
                    onChange={e => changeEmail(e.target.value)}
                    placeholder="Email Address"
                    value={inputData.email}
                    info="This site uses Gravatar so if you want a profile image,
                    use a Gravatar email"
                    error={errors.email}
                  />
                  <TextFieldBoot
                    name="Password"
                    value={inputData.password}
                    onChange={e => changePassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    error={errors.password}
                  />
                  <TextFieldBoot
                    name="Password2"
                    value={inputData.password2}
                    onChange={e => changeConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    error={errors.password2}
                  />
                  <Button
                    variant="raised"
                    className="btn btn-info btn-block mt-4"
                    onClick={e => {
                      e.preventDefault();
                      submitRegisterData(inputData);
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
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
    inputData: state.inputSignupData,
    registerData: state.registerData,
    submitErrors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {
    changeName: actions.changeName,
    changeEmail: actions.changeEmail,
    changePassword: actions.changePassword,
    changeConfirmPassword: actions.changeConfirmPassword,
    resetSignup: actions.resetSignUp,
    submitRegisterData: actions.submitRegisterData,
    getProfile: actions.getCurrentProfile
  }
)(Register);
