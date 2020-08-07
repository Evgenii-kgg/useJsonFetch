import React from "react";

import useJsonFetch from "./useJsonFetch";
import Error from './Error';
import Loading from "./Loading";

function App() {

  const success = useJsonFetch( 'http://localhost:7070/data', {});
  const error = useJsonFetch( 'http://localhost:7070/error', {});
  const loading = useJsonFetch( 'http://localhost:7070/loading', {});
    console.log(error)



if (!success.data) {
  return <div>Loading...</div>
}
const status = success.data.status
return (
  <div className="App">
    <div>
      <h3>{status}</h3>
    </div>
    <Error error={error.error} message={error.data.status} />
    <Loading loading={loading.loading}/>
  </div>
);
}

export default App;