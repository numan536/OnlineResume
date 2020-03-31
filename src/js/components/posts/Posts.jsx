import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Proptypes from "prop-types";

class Posts extends Component {
  componentDidMount() {
    setTimeout(() => this.props.getPosts(), 1000);
    this.props.getProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(this.props.postData.data) !==
      JSON.stringify(nextProps.postData.data)
    ) {
      // Check if it's a new user, you can also use some unique, like the ID
      this.props.getPosts();
    }
  }

  render() {
    const { postData, errors, profileData } = this.props;
    const postContent = postData.data.length && (
      <PostFeed
        auth={Object.keys(profileData.data).length && profileData.data.user._id}
        posts={postData.data}
      />
    );
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
              {Object.keys(errors).length ? (
                <div className="invalid-feedback">{errors.message}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postData: state.postsData,
    errors: state.errors,
    profileData: state.profileData
  };
}

Posts.propTypes = {
  postData: Proptypes.object.isRequired
};

export default connect(
  mapStateToProps,
  {
    getPosts: actions.getPosts,
    getProfile: actions.getCurrentProfile
  }
)(Posts);
