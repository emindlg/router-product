import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/details/:id" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
