import {React} from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import NavBar from './Components/NavBar';
import Footer from './Footer';
import ProjectDisplay from './Pages/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path='/Projects/:id' element={<ProjectDisplay />}> </Route>
        
      
          
        </Routes>
        <Footer />
      </Router>
    </div>);
  
}

export default App;
