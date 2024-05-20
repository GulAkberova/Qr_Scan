import './App.css'
import QrCreate from './components/QrCreate'
import QrRead from './components/QrRead'

function App() {


  return (
    <>
    <section>
      <h2>QR Code Genarate</h2>
      <div className='qr_bigdiv'>
        <QrCreate/>
        <QrRead/>
        {/* <QrCameraScan/> */}
     
      </div>
    </section>
    </>
  )
}

export default App
