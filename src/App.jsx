import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrCreate from './components/QrCreate'
import QrRead from './components/QrRead'
import QrCameraScan from './components/QrCameraScan'

function App() {
  const [scanResult, setScanResult] = useState('');

  const handleResult = (result, error) => {
    if (result) {
      setScanResult(result.text);
    }
    if (error) {
      console.error(error);
    }
  };


  return (
    <>
    <section>
      <h2>QR Code Genarate</h2>
      <div className='qr_bigdiv'>
        <QrCreate/>
        <QrRead/>
        {/* <QrCameraScan/> */}
        <div className="App">
      <h1>QR Code Scanner</h1>
      <QrCameraScan onResult={handleResult} />
      <p>Scan Result: {scanResult}</p>
    </div>
      </div>
    </section>
    </>
  )
}

export default App
