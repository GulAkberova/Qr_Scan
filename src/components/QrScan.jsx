import React from "react";

function QrScan(props) {
  return (
    <div>
      <input type="file" accept="image/*, video/*" capture />
    </div>
  );
}

export default QrScan;
