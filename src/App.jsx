import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Component/Navbar'

import Lipstick from './Component/Lipstick'
import Lipstick2 from './Component/Lipstick2'
import Makeup from './Component/Makeup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Makeup/>}/>
      <Route path="/Lipstick" element={<Lipstick/>}/>
      <Route path="/Lipstick2" element={<Lipstick2/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
