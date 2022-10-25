import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
