import React from "react";

function QrScan(props) {
  return (
    <div>
      <input type="file" accept="image/*, video/*" capture />


      <input type="file" accept="image/*" capture="camera"></input>
    </div>
  );
}

export default QrScan;
