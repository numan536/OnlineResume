import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

class CommentItem extends Component {
  render() {
    const { postId, comment, auth, removeCommentPost, errors } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to="">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
            </Link>
            <br />
            {Object.keys(errors).length ? (
              <div className="invalid-feedback">{errors.message}</div>
            ) : (
              ""
            )}
            <p className="text-center">John Doe</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{comment.text}</p>
            {comment.user === auth._id ? (
              <button
                class="btn btn-danger mr-1"
                onClick={() => {
                  removeCommentPost(postId, comment._id);
                }}
              >
                <i class="fas fa-times" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.profileData.data.user,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {
    removeCommentPost: actions.removeCommentPost
  }
)(CommentItem);
