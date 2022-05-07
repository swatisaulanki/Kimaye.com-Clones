import './App.css';
import NavbarPage from './components/NavbarPage';
import Footer from './components/Footer';
import { OurStory } from './pages/OurStory';
import { Whykimaye } from './pages/Whykimaye';
import { Route, Routes } from 'react-router-dom';
import Address from './pages/Address';
import Home from './other pages/Home';
import Login from './other pages/Login';
import Cart from './other pages/Cart';
import About from './other pages/About';
import Nav from './other pages/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavbarPage /> */}

        {/* <Home /> */}

        <NavbarPage />



        <Routes>
          <Route path='allfruits' element={<Home />} />
          <Route path='freshcuts' element={<Login />} />
          <Route path='fruitcombos' element={<About />} />
          <Route path='gifts' element={<Nav />} />
          <Route path='ourstory' element={<OurStory />} />
          <Route path='whykimaye' element={<Whykimaye />} />
          <Route path='cart' element={<Cart />} />
          <Route path='address' element={<Address />} />
        </Routes>



        {/* <Footer /> */}

        {/* <Address /> */}

      </header>
    </div>
  );
}

export default App;
