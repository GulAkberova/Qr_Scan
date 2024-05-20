import React, { useState } from "react";
import QRCode from "qrcode";

function QrCreate() {
  const [qrValue, setQrValue] = useState("");
  const [qrImgUrl, serQrImgUrl] = useState("");
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    if (!qrValue) {
      return alert("Datani doldur");
    }
    const response = await QRCode.toDataURL(qrValue);
    serQrImgUrl(response);
  };
  return (
    <div>
      <h4>Qr code Create</h4>
      <form className="qr_create_div" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          id="text"
          onChange={(e) => setQrValue(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      {qrImgUrl && (
        <div>
          <a href={qrImgUrl} download="qr.png">
            <img src={qrImgUrl} alt="qr" />
          </a>
        </div>
      )}
    </div>
  );
}

export default QrCreate;
