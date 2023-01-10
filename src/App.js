import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className='App w-full h-screen bg-slate-800'>
        <Navbar/>
        
        <Routes>
          <Route exact path='/' element={<Hero/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
