// import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';

// const QrCodeScanner = () => {
//   const [qrCodeData, setQrCodeData] = useState('');

//   const handleScan = (data) => {
//     if (data) {
//       setQrCodeData(data);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div>
//       <h1>QR Kod Scanner</h1>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '100%' }}
//       />
//       <p>QR Kod Məlumatı: {qrCodeData}</p>
//     </div>
//   );
// };

// export default QrCodeScanner;
