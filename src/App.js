import './App.css';
import React , {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path='/' element={<Hero/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/skills' element={<Skills/>}></Route>
          </Routes>
        </Suspense>
      </React.Fragment>
    </Router>
  );
}

export default App;
