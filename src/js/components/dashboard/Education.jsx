import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Moment from "react-moment";
import { arrayOf, func, any } from "prop-types";

const Education = ({ education, deleteEducation, errors }) => {
  const renderData =
    education.length &&
    education.map(item => {
      return (
        <tr>
          <td>{item.school}</td>
          <td>{item.degree}</td>
          <td>
            {" "}
            <Moment format="YYYY/MM/DD">{item.from}</Moment> -{" "}
            {item.to === null ? (
              "Now"
            ) : (
              <Moment format="YYYY/MM/DD">{item.to}</Moment>
            )}
          </td>
          <td>
            <button
              onClick={() => {
                deleteEducation(item._id);
              }}
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
          <td>{errors && Object.keys(errors).length ? errors.message : ""}</td>
        </tr>
      );
    });

  return (
    <div>
      <h4 class="mb-2">Education Credentials</h4>
      <table class="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody className="col-md-12">
          {education.length && renderData.length ? (
            renderData
          ) : (
            <div>There is no Education Added yet</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

Education.propTypes = {
  deleteEducation: func.isRequired,
  education: arrayOf(any).isRequired
};

function mapStateToProps({ errors }) {
  return {
    errors
  };
}

export default connect(
  mapStateToProps,
  {
    deleteEducation: actions.deleteEducation
  }
)(Education);
