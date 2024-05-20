import React, { useRef, useState } from "react";
import jsQR from "jsqr";

function QrRead() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef();

  const handleRead = () => {
    if (file) {
      console.log(file, "file");
    } else {
      fileRef.current.click();
    }
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];

    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
     
        if (code) {
          setData(code.data);
        } else {
          setData("QR kod okunamadı");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div>
      <h4>QR Kodu Oku</h4>
      <input
        ref={fileRef}
        type="file"
        accept=".jpeg, .png, .jpg"
        onChange={(e) => handleChange(e)}
        style={{ display: "none" }}
        placeholder="qr add"
      />
      <button onClick={handleRead}>QR Kodu Oku</button>
      {imageUrl && (
        <div>
          <h4>Yüklenen QR Kodu:</h4>
          <img
            src={imageUrl}
            alt="QR Kod"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
      {data && (
        <div>
          <h4>Sonuç:</h4>
          <p>{data}</p>
          {isValidUrl(data) ? (
            <a href={data} target="_blank" rel="noopener noreferrer">
              {data}
            </a>
          ) : (
            <p>{data}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default QrRead;
