import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Fifty from './pages/Fifty/Fifty';
import Contact from './pages/Contact/Contact';
import Merch from './pages/MerchNMore/Merch';
import Portfolio from './pages/Portfolio/Portfolio';
import TT from './pages/TreasureTrove/TT'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/treasuretrove' element={<TT />}/>
          <Route path='/merchandmore' element={<Merch />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/5050concept' element={<Fifty />}/>
          <Route path='/contactus' element={<Contact />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
