import React from "react";
import PostItem from "./PostItem";

export default ({ posts, auth }) => {
  return (
    <div>
      <div>
        {posts.map((item, key) => (
          <PostItem auth={auth} key={key} post={item} />
        ))}
      </div>
    </div>
  );
};
