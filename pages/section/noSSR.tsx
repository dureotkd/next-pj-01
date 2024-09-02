import React from "react";

function noSSR() {
  return <div>noSSR : {window.innerWidth}</div>;
}

export default noSSR;
