import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import AboutmeCristian from './aboutme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
     <App/>
    </StoreContextProvider>
      <Routes>
         <Route path="about" element={<AboutmeCristian />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
