import React from "react";

import useJsonFetch from "./useJsonFetch";
import Error from './Error';
import Loading from "./Loading";

function App() {

  const res = useJsonFetch( 'http://localhost:7070/data', {});
console.log(res);

if (!res.data) {
  return <div>Loading...</div>
}
const status = res.data.status
return (
  <div className="App">
    <div>
      <h3>{status}</h3>
    </div>
    <Error />
    <Loading />
  </div>
);
}

export default App;