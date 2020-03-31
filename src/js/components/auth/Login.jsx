import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Button from "@material-ui/core/Button";
import TextFieldBootstrap from "../reuseableComponents/TextFieldBootstrap";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.submitLoginData(this.props.inputData);
  };
  render() {
    const {
      inputData,
      changeEmail,
      changePassword,
      submitLoginData,
      submitErrors
    } = this.props;
    const { errors } = inputData;
    return (
      <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                {Object.keys(submitErrors).length ? (
                  <div className="invalid-feedback">{submitErrors.message}</div>
                ) : (
                  ""
                )}
                <p className="lead text-center">
                  Sign in to your DevConnector account
                </p>
                {errors.message && (
                  <h3 className="display-6" style={{ color: "red" }}>
                    {errors.message}
                  </h3>
                )}
                <form onSubmit={this.handleSubmit}>
                  <TextFieldBootstrap
                    type="email"
                    onChange={e => changeEmail(e.target.value)}
                    placeholder="Email Address"
                    value={inputData.email}
                    name="email"
                    error={errors.email}
                  />
                  <TextFieldBootstrap
                    type="password"
                    onChange={e => changePassword(e.target.value)}
                    placeholder="Password"
                    value={inputData.password}
                    name="password"
                    error={errors.password}
                  />
                  <Button
                    variant="raised"
                    className="btn btn-info btn-block mt-4"
                    type="submit"
                    onClick={() => submitLoginData(inputData)}
                    ref={el => {
                      this.submit = el;
                    }}
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
    inputData: state.inputLoginData,
    submitErrors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {
    changeEmail: actions.changeLoginEmail,
    changePassword: actions.changeLoginPassword,
    resetData: actions.resetLoginData,
    submitLoginData: actions.submitLoginData
  }
)(Login);
