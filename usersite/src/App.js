import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap';

import Home from './routes/Home';
import CV from './routes/CV';
import Service from './routes/Service';
import Teaching from './routes/Teaching';
import Navbar from '.Navbar';
import Footer from '.Footer';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/CV" element={<CV />}/>
          <Route path="/Service" element={<Service />}/>
          <Route path="/Teaching" element={<Teaching />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
