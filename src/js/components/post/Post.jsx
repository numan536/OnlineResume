import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

class Post extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
  }
  render() {
    const { postData, errors } = this.props;
    const postContent = Object.keys(postData.data).length && (
      <div>
        <PostItem post={postData.data} showActions={false} />{" "}
      </div>
    );
    return (
      <div>
        <div className="post">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Link to="/feed" className="btn btn-light mb-4">
                  Back to Posts
                </Link>
                {Object.keys(errors).length ? (
                  <div className="invalid-feedback">{errors.message}</div>
                ) : (
                  ""
                )}
                {postContent}
                <CommentForm
                  postId={
                    Object.keys(postData.data).length && postData.data._id
                  }
                />
                {Object.keys(postData.data).length && (
                  <div>
                    <CommentFeed
                      postId={postData.data._id}
                      comments={postData.data.comments}
                    />
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
function mapStateToProps(state) {
  return {
    inputComment: state.inputComment,
    postData: state.singlePostData,
    errors: state.errors
  };
}
export default connect(
  mapStateToProps,
  { getSinglePost: actions.getSinglePost }
)(Post);
