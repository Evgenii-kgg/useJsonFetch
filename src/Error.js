import React from "react";


import useJsonFetch from "./useJsonFetch";

function Error(props) {

if (props.error) {

return (
  <div className="App">
    <div>
      <h3>{props.error && props.message}</h3>
    </div>
  </div>
);
}
return <div />
}


export default Error;