import './App.css';
import React , {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'))

function App() {
  return (
    <Router>
      <div className='App w-full h-screen bg-sharp-glass'>
        <Navbar/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path='/' element={<Hero/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
