
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Navbar from '@/Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
