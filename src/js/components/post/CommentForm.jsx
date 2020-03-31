import React from "react";
import TextFieldAreaBootstrap from "../reuseableComponents/TextFieldAreaBootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions";

class PostForm extends React.Component {
  render() {
    const {
      inputComment,
      addCommentPost,
      changeComment,
      postId,
      errors
    } = this.props;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form>
              <TextFieldAreaBootstrap
                placeholder="Add a Comment"
                value={inputComment.text}
                onChange={e => changeComment(e.target.value)}
                name="post"
                error={inputComment.errors.text}
              />
              {Object.keys(errors).length ? (
                <div className="invalid-feedback">{errors.message}</div>
              ) : (
                ""
              )}
              <div
                onClick={() => {
                  addCommentPost(postId, inputComment);
                }}
                className="btn btn-dark"
              >
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputComment: state.inputComment,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {
    changeComment: actions.changeComment,
    addCommentPost: actions.addCommentPost
  }
)(PostForm);
