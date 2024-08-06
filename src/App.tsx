import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Header2 from "./components/header2"

import './App.css'
import Main2 from './components/main2'
import Footerpart from './components/footerpart'

function App() {

  return (
    <div>
      <Header />
      <br />
      <Main/>
      <br /><br />
      <Header2 />
      <br />
      <Main2 />
      <br />
      <Footerpart />
    </div>
  )
}

export default App
