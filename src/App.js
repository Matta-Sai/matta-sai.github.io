import {Routes, Route} from "react-router-dom"

import ParticlesComponent from "./components/ParticlesComponent"
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Header from "./components/Header"


import './App.css';

const App = () => (
  <div className = "app-container">
    <ParticlesComponent />
    <Header className = "header" />
    <div className = "app-body">
      <Routes>
        <Route  path = "/" element = {<Home />} />
        <Route path = "/about"  element = {<About />} />
        <Route path = "/projects"  element = {<Projects />} />
      </Routes>
    </div>
    
  </div>
)

export default App;
