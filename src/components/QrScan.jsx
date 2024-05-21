import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { useNavigate } from "react-router-dom";

function QrScan(props) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleScan = (data) => {
    console.log(data,"dsagcbsjknc");
    console.log(hasScanned.current,"zscs");

    if (data && !hasScanned.current) { // İlk taramada ve yönlendirme yapılmadıysa
      hasScanned.current = true; // Yönlendirme yapıldığını işaretle
      console.log(data);
      navigate("https://chatgpt.com/c/a74c77b7-0bbe-443f-bc2b-651f0ce94300");
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <div>
      <h1>QR Code Scanner</h1>
      {error && <p>Error: {error.message}</p>}
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
    </div>
  );
}

export default QrScan;
