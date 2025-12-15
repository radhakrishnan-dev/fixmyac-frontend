// src/App.tsx (VERIFIED STRUCTURE)

import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home';
import Brands from './pages/Brands'; 
import OurServices from './pages/OurServices'; // <--- Ensure this IMPORT exists
import WhatsAppButton from './components/WhatsAppButton'; 

function App() {
    return (
        <>
            <Header />
            
            <main className="single-page-app"> 
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Brands Route */}
                    <Route path="/brands" element={<Brands />} /> 
                    
                    {/* CRITICAL: Services Route */}
                    <Route path="/services" element={<OurServices />} /> 
                </Routes>
            </main>
            
            <WhatsAppButton /> 
            
        </>
    );
}

export default App;