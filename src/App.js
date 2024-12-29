import {Routes, Route} from "react-router-dom"

import Home from './components/Home'
import About from './components/About'


import './App.css';

const App = () => (
  <div className = "app-container">
    
    <div className = "app-body">
      <Routes>
        <Route  path = "/" element = {<Home />} />
        <Route path = "/about"  element = {<About />} />
      </Routes>
    </div>
  </div>
)

export default App;
