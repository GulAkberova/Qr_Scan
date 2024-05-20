// QrCameraScan.jsx
import React from 'react';
import { QrReader } from 'react-qr-reader';

const QrCameraScan = ({ onResult  }) => {
  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrReader
        delay={300}
        style={previewStyle}
        onResult={onResult}

      />
    </div>
  );
};

export default QrCameraScan;
