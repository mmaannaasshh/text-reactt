import React from 'react'
import Navbar from './componants/Navbar'
import Text from './componants/Text'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import About from './componants/About'
import { useState } from 'react'
import Alert from './componants/Alert'

function App() {
  const [mode, setmode] = useState('light');
  const toglr = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style = 'background:grey;'
      showalert("Dark mode enabled",'success')
    } else {
      setmode('light');
      document.body.style = 'background:#fff;';
      showalert("Light mode enabled",'success')

    }
  }

  const [alert, setalert] = useState(null)
  const showalert = (mgs, type) => {
    setalert(
      {
        messege: mgs,
        type: type
      }
    )
    setTimeout(()=>{
      setalert(null)
    },1000 )
  }



  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} toglr={toglr} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Text mode={mode} showalert={showalert} />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
