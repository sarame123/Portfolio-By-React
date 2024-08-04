import logo from './logo.svg';
import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Projects from './component/Projects/Projects';
import Navbar from './component/Navbar/Navbar';

function App() {
 
  
  
  
  return (
    <>
     <Navbar />
      <div className='min-vh-100'>
        <Home/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
     
    
    </>
  );
}

export default App;
