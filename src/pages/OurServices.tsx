// src/pages/OurServices.tsx
import React from 'react';
import Footer from '../components/Footer';
import './OurServices.css'; 
import { mockServices, Service } from '../data/mockServices';

const OurServices: React.FC = () => {
    return (
        <>
            <main style={{ padding: '80px 0 40px 0', backgroundColor: 'var(--light-bg)' }}>
                <section id="services-page" className="container" style={{ textAlign: 'center' }}>
                    
                    <h1 className="page-title" style={{ marginTop: '0', color: '#ff9900' }}>Our Complete Range of AC Services</h1>
                    <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                        We offer reliable and guaranteed solutions for every AC need, specializing in multi-brand repair and maintenance across Coimbatore.
                    </p>

                    <div className="services-grid">
                        {mockServices.map((service: Service) => ( 
                            <div key={service.id} className="service-card">
                                
                                <div className="service-image-container">
                                    <img 
                                        src={service.icon} 
                                        alt={service.title} 
                                        className="service-image" 
                                    />
                                </div>
                                
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                
                                {/* ✂️ Price tag div removed from here */}
                                
                                <a href="/#home-section">
                                    <button className="btn-primary service-cta">Book This Service</button>
                                </a>
                            </div>
                        ))}
                    </div>

                    <p style={{ marginTop: '40px', fontSize: '1.1rem' }}>
                        <strong>Location Note:</strong> Our primary service area is Coimbatore. For service requests outside, please call us to inquire.
                    </p>
                    
                </section>
            </main>
            <Footer />
        </>
    );
};

export default OurServices;