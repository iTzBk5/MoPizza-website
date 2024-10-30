import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Navbar from '@/Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer';
import { Franchise } from './Pages/Franchise';
import Game from './Components/Game/Game';
import { Loader } from './Components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <BrowserRouter basename="/MoPizza-website/">
      <div id="root">
        {loading ? (
          <Loader />  // Show loader while loading
        ) : (
          <>
            <Navbar className="navbar" />
            <div className="main-content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Franchise' element={<Franchise />} />
                <Route path='/Game' element={<Game />} />
              </Routes>
            </div>
            <Footer className="footer" />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
