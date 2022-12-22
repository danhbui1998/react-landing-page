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
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/react-landing-page" exact element={<Home />} />
                <Route path="/react-landing-page/about" element={<About />} />
                <Route path="/react-landing-page/services" element={<Services />} />
                <Route path="/react-landing-page/blog" element={<Blog />} />
                <Route path="/react-landing-page/pricing" element={<Pricing />} />
                <Route path="/react-landing-page/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
