import React from "react";


import useJsonFetch from "./useJsonFetch";

function Loading() {

  const res = useJsonFetch( 'http://localhost:7070/loading', {});
console.log("Loading",res);

if (!res.data) {
  return <div>Loading...</div>
}
const loading = res.data.loading
return (
  <div className="App">
    <div>
      <h3>{loading}</h3>
    </div>
  </div>
);
}

export default Loading;