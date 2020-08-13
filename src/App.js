import React from "react";

import useJsonFetch from "./useJsonFetch";

function Fetch({ url }) {
    const [data, loading, error] = useJsonFetch(
        url, {});
    console.log(data, loading, error);
    return (
        loading
            ? <div>Loading...</div>
            : error
                ? <div>Error</div>
                : [data.status]
    )
}

function App() {

    return (
        <>
            <Fetch url={"http://localhost:7070/data"}  />
            <Fetch url={"http://localhost:7070/error"} />
            <Fetch url={"http://localhost:7070/loading"} />
        </>
    )

}

export default App;