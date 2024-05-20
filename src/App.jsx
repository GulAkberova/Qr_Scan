import './App.css'
import QrCreate from './components/QrCreate'
import QrRead from './components/QrRead'
import QrScan from "./components/QrScan.jsx";

function App() {


  return (
    <>
    <section>
      <h2>QR Code Genarate</h2>
      <div className='qr_bigdiv'>
        <QrCreate/>
        <QrRead/>
        <QrScan/>
        {/* <QrCameraScan/> */}

      </div>
    </section>
    </>
  )
}

export default App
