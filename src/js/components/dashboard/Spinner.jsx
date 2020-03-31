import React from "react";
import spinner from "../../../../dist/images/loading.gif";

export default () => {
  return (
    <div>
      <img
        style={{ width: 40, height: 40, margin: "auto" }}
        src={spinner}
        alt="loading..."
        title="this is the loading image"
      />
    </div>
  );
};
