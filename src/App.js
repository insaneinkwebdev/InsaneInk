import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Fifty from './pages/Fifty/Fifty';
import Contact from './pages/Contact/Contact';
import Dtg from './pages/MerchNMore/Dtg';
import Roland from './pages/MerchNMore/Roland';
import Portfolio from './pages/Portfolio/Portfolio';
import TT from './pages/TreasureTrove/TT'

import NotFound from './pages/FouroFour/NotFound';

function App() {
  return (
    <div className="App" data-theme="light">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route exact path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/treasuretrove' element={<TT />}/>
\          <Route path='/dtg' element={<Dtg />}/>
          <Route path='/roland' element={<Roland />}/>
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
