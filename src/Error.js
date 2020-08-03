import React from "react";


import useJsonFetch from "./useJsonFetch";

function Error() {

  const res = useJsonFetch( 'http://localhost:7070/error', {});
console.log('Error',res);

if (!res.data.status) {
  return <div>ошибка сети...</div>
}if(res.data.status > 200) {
  return <div>ошибка ответа</div>
 }
 //if(res.data.status != JSON.parse(res.data.status)) {
//   return <div>ошибка ответа</div>
// }
const error = res.error
return (
  <div className="App">
    <div>
      <h3>{error}</h3>
    </div>
  </div>
);
}

export default Error;