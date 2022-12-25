import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ProgressBar from './components/ProgressBar';
import GoToTop from './components/GoToTop';
import './App.scss';

function App() {
    return (
        <div className="App">
            <ProgressBar />
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <GoToTop />
        </div>
    );
}

export default App;
