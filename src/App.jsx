import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrCreate from './components/QrCreate'
import QrRead from './components/QrRead'
// import QrCameraScan from './components/QrCameraScan'

function App() {
  const [count, setCount] = useState(0)

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
