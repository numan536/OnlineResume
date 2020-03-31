import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import TextFieldBootstrap from "../reuseableComponents/TextFieldBootstrap";
import TextFieldAreaBootstrap from "../reuseableComponents/TextFieldAreaBootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class AddExperience extends Component {
  render() {
    const {
      inputData,
      changeLocation,
      changeDegree,
      changeSchool,
      changeTo,
      changeFrom,
      changeCurrent,
      changeDescription,
      submitEducation,
      submitErrors,
      getProfile
    } = this.props;
    const {
      location,
      degree,
      school,
      to,
      from,
      current,
      description,
      errors
    } = inputData;
    return (
      <div class="section add-experience">
        <div class="container">
          {Object.keys(submitErrors).length ? (
            <div className="invalid-feedback">{submitErrors.message}</div>
          ) : (
            ""
          )}
          <div class="row">
            <div class="col-md-8 m-auto">
              <Link to="/dashboard" class="btn btn-light">
                Go Back
              </Link>
              <h1 class="display-4 text-center">Add Your Education</h1>
              <p class="lead text-center">
                Add any developer/programming positions that you have had in the
                past
              </p>
              <small class="d-block pb-3">* = required field</small>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  submitEducation(inputData);
                }}
              >
                <TextFieldBootstrap
                  placeholder="* Degree Name"
                  value={degree}
                  onChange={e => changeDegree(e.target.value)}
                  error={errors.degree}
                />
                <TextFieldBootstrap
                  placeholder="* School"
                  value={school}
                  onChange={e => changeSchool(e.target.value)}
                  error={errors.school}
                />
                <TextFieldBootstrap
                  placeholder="Location"
                  value={location}
                  onChange={e => changeLocation(e.target.value)}
                  error={errors.location}
                />
                <h6>From Date</h6>
                <TextFieldBootstrap
                  placeholder="From"
                  value={from}
                  onChange={e => changeFrom(e.target.value)}
                  error={errors.from}
                  type="date"
                />
                <h6>To Date</h6>
                <TextFieldBootstrap
                  placeholder="To"
                  value={to}
                  onChange={e => changeTo(e.target.value)}
                  error={errors.to}
                  disabled={current}
                  type="date"
                />
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value={current}
                    id="current"
                    onChange={e => changeCurrent(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="current">
                    Current Education
                  </label>
                </div>
                <TextFieldAreaBootstrap
                  name="description"
                  value={description}
                  onChange={e => changeDescription(e.target.value)}
                  error={errors.current}
                />
                <Button
                  class="btn btn-info btn-block mt-4"
                  onClick={() => {
                    submitEducation(inputData);
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
    );
  }
}

function mapStateToProps(state) {
  return {
    inputData: state.inputEducationData,
    submitErrors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {
    changeDegree: actions.changeEducationDegree,
    changeLocation: actions.changeEducationLocation,
    changeSchool: actions.changeEducationSchool,
    changeTo: actions.changeEducationTo,
    changeFrom: actions.changeEducationFrom,
    changeCurrent: actions.changeEducationCurrent,
    changeDescription: actions.changeEducationDescription,
    submitEducation: actions.submitEducationData,
    getProfile: actions.getCurrentProfile
  }
)(AddExperience);
