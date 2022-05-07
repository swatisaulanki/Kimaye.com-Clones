import './App.css';
import NavbarPage from './components/NavbarPage';
import Footer from './components/Footer';
import { OurStory } from './pages/OurStory';
import { Whykimaye } from './pages/Whykimaye';
import { Route, Routes } from 'react-router-dom';
import Address from './pages/Address';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavbarPage /> */}



        <Routes>
          <Route path='ourstory' element={<OurStory />} />
          <Route path='whykimaye' element={<Whykimaye />} />
        </Routes>



        {/* <Footer /> */}

        <Address />

      </header>
    </div>
  );
}

export default App;
