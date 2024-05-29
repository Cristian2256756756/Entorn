import React from 'react';
import './App.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../Home/Home';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Cart from '../Cart/Cart';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <>
     <div className="App">
      <header className="App-header">
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
   
  );
};

// Wrap the App component with BrowserRouter to enable routing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
