import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Navbar from '@/Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer';
import { Franchise } from './Pages/Franchise';

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Navbar className="navbar" />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Franchise' element={<Franchise />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
