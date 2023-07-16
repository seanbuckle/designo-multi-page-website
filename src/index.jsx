import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppDesign from './pages/AppDesign';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import Locations from './pages/Locations';
import WebDesign from './pages/WebDesign';
import './style.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/app-design" element={<AppDesign/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/graphic-design" element={<GraphicDesign/>} />
          <Route path="/locations" element={<Locations/>} />
          <Route path="/web-design" element={<WebDesign/>} />
        </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

