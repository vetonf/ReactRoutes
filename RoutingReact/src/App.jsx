 import './App.css';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './navbar.jsx'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Stuff from './pages/Stuff';

function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/home"  element={<Home />}/>
      <Route path="/stuff"  element={<Stuff/>}/>
    </Routes>
    </div>
    </>
   
  );
}

export default App;