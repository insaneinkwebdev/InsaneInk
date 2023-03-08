import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Fifty from './pages/Fifty/Fifty';
import Contact from './pages/Contact/Contact';
import About from './pages/Contact/About'
import Process from './pages/MerchNMore/Process'
import Dtg from './pages/MerchNMore/Dtg';
import Roland from './pages/MerchNMore/Roland';
import Portfolio from './pages/Portfolio/Portfolio';
import TT from './pages/TreasureTrove/TT'

import NotFound from './pages/FouroFour/NotFound';

///////////////////////////////////////////////////////////////

import SignIn from './pagesStaff/signIn/SignIn';
import Dash from './pagesStaff/dash/DashBoard'

function App() {
  let subdomain;
  const host = window.location.host;
  const arr = host
    .split(".")
    .slice(0, host.includes("localhost") ? -1 : -2);

  if (arr.length > 0){
    subdomain = arr[0];
  }

  if (subdomain === "staff"){
    return(
      <Router>
        <Routes>
          <Route path='*' element={<SignIn />}/>
          <Route path='/dashboard' element={<Dash />}/>
        </Routes>
      </Router>
    )
  }

  return (
    <div className="App" data-theme="light">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route exact path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/treasuretrove' element={<TT />}/>
          <Route path='/howitworks' element={<Process />}/>
          <Route path='/dtg' element={<Dtg />}/>
          <Route path='/roland' element={<Roland />}/>
          <Route path='/our-portfolio' element={<Portfolio />}/>
          <Route path='/fiftyfifty' element={<Fifty />}/>
          <Route path='/aboutus' element={<About />}/>
          <Route path='/contactus' element={<Contact />}/>

          <Route path='/staff' element={<SignIn />}/>
          <Route path='/dashboard' element={<Dash />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
