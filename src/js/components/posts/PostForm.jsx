import React from "react";
import TextFieldAreaBootstrap from "../reuseableComponents/TextFieldAreaBootstrap";
import { connect } from "react-redux";
import * as actions from "../../actions";

class PostForm extends React.Component {
  render() {
    const { inputPost, submitPost, changePost, errors, getPosts } = this.props;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form>
              <TextFieldAreaBootstrap
                placeholder="Create a post"
                value={inputPost.text}
                onChange={e => changePost(e.target.value)}
                name="post"
                error={inputPost.errors.text}
              />
              {Object.keys(errors).length ? (
                <div className="invalid-feedback">{errors.message}</div>
              ) : (
                ""
              )}
              <div
                onClick={() => {
                  submitPost(inputPost);
                  // !Object.keys(errors).length &&
                  //   setTimeout(() => getPosts(), 2000);
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
    inputPost: state.inputPost,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  {
    changePost: actions.changePost,
    submitPost: actions.submitPost,
    getPosts: actions.getPosts
  }
)(PostForm);
