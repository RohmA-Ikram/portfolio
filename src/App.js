import React from 'react'
import { Header,Test, About, Work, Skills} from "./container"
import Navbar from './components/Navbar/Navbar'
import "./App.scss"
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Test/>
      <Work/>
      <Skills/>

    </div>
  )
}

export default App