// src/pages/Brands.tsx (Final structure - UPDATED for better mobile spacing)

import React from 'react';
import { majorBrands } from '../data/mockServices'; 
import Footer from '../components/Footer';
import '../pages/OurServices.css'; // Keep existing imports

const Brands: React.FC = () => {
    return (
        <>
            <main style={{ backgroundColor: 'var(--dark-bg)', color: 'white' }}>
                {/* The ID #brands-page handles centering via Home.css */}
                <section id="brands-page" className="container"> 
                    
                    <h1 className="page-title" style={{ color: 'var(--secondary-color)', marginBottom: '10px' }}>
                        🤝 We Service All Major AC Brands
                    </h1>
                    <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto 40px', color: 'var(--white)', textAlign: 'center' }}>
                        At FixMyAc, we are multi-brand experts. Our certified technicians are equipped with the specialized knowledge and tools to provide sales, service, repair, and installation for every leading AC manufacturer.
                    </p>

                    <div className="brands-grid" style={{ 
                        display: 'grid', 
                        // Updated grid columns for better mobile stacking (min size 150px)
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                        gap: '15px',
                        maxWidth: '800px',
                        margin: '0 auto 40px', /* Center the grid wrapper */
                        width: '100%' /* Ensure it uses available width */
                    }}>
                        {majorBrands.map((brand, index) => (
                            <div key={index} className="brand-card" style={{ 
                                padding: '15px', 
                                borderRadius: '8px', 
                                backgroundColor: 'var(--white)', 
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ margin: '0', color: 'var(--text-color)' }}>{brand}</h3> 
                            </div>
                        ))}
                    </div>

                    <p style={{ marginTop: '20px', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--white)', textAlign: 'center' }}>
                        "If it cools, we can fix it! No matter the make, model, or age of your air conditioner, FixMyAc has the expertise to ensure it runs efficiently."
                    </p>
                    <a href="/#contact-form" className="btn-primary" style={{ textDecoration: 'none', marginTop: '20px', display: 'inline-block' }}>BOOK SERVICE NOW</a>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Brands;