import React from "react";
import CommentItem from "./CommentItem";

export default ({ comments, postId }) => {
  return comments.map(comment => (
    <div>
      <CommentItem key={comment._id} comment={comment} postId={postId} />
    </div>
  ));
};
