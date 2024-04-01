import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import NavBar from './navbar';
import Homepage from './homepage';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
