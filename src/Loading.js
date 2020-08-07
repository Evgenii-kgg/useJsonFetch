import React from "react";


import useJsonFetch from "./useJsonFetch";

function Loading(props) {


return (
  <div className="App">
    <div>
      <h3>{props.loading && "loading"}</h3>
    </div>
  </div>
);
}

export default Loading;