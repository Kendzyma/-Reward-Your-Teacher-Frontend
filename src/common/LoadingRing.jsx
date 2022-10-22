import React from 'react'
import { ColorRing } from "react-loader-spinner";

export default function LoadingRing() {
    console.log("this was fired")
  return (
    <div>
      <ColorRing
        visible="true"
        height="40"
        width="80"
        margin-left="40px"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
      />
    </div>
  );
}
