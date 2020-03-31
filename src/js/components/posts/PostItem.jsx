import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { ENGINE_METHOD_DIGESTS } from "constants";

class PostItem extends Component {
  state = {
    auth: ""
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.post !== nextProps.post) {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.auth) !== JSON.stringify(nextProps.auth)) {
      // Check if it's a new user, you can also use some unique, like the ID
      this.setState({
        auth: nextProps.auth
      });
    }
  }

  render() {
    const {
      post,
      deletePost,
      addLikePost,
      removeLikePost,
      showActions,
      errors
    } = this.props;
    this.setState({
      auth: this.props.auth
    });
    const { auth } = this.state;
    return (
      <div>
        <div class="posts">
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-2">
                <a href="profile.html">
                  <img
                    class="rounded-circle d-none d-md-block"
                    src={post.avatar}
                    alt=""
                  />
                </a>
                <br />
                <p class="text-center">{post.name}</p>
              </div>
              <div class="col-md-10">
                <p class="lead">{post.text}</p>
                {showActions && (
                  <span>
                    <button
                      type="button"
                      class="btn btn-light mr-1"
                      onClick={() => {
                        addLikePost(post._id);
                      }}
                    >
                      <i class="text-info fas fa-thumbs-up" />
                      <span class="badge badge-light">
                        {post.likes && post.likes.length}
                      </span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-light mr-1"
                      onClick={() => {
                        removeLikePost(post._id);
                      }}
                    >
                      <i class="text-secondary fas fa-thumbs-down" />
                    </button>
                    <Link to={`/post/${post._id}`} class="btn btn-info mr-1">
                      Comments
                    </Link>
                    {post.user === auth ? (
                      <button
                        class="btn btn-danger mr-1"
                        onClick={() => {
                          deletePost(post._id);
                        }}
                      >
                        <i class="fas fa-times" />
                      </button>
                    ) : (
                      ""
                    )}
                    {Object.keys(errors).length ? (
                      <div className="invalid-feedback">{errors.message}</div>
                    ) : (
                      ""
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PostItem.defaultProps = {
  showActions: true
};
function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}
export default connect(
  mapStateToProps,
  {
    deletePost: actions.deletePost,
    addLikePost: actions.addLikePost,
    removeLikePost: actions.removeLikePost
  }
)(PostItem);
