// src/pages/Home.tsx (FINAL COMPLETE CODE - UPDATED)

import React from 'react';
import BookingForm from '../components/BookingForm'; 
import Footer from '../components/Footer'; 
import '../pages/OurServices.css'; 
import '../pages/WhyChooseUs.css';
import '../pages/Contact.css';
import './Home.css'; 
import { mockServices, Service } from '../data/mockServices'; 
import heroBackground from '../assets/ac-bg.jpeg'; 

// --- DATA: Services and Features ---
const features = [
    { icon: '🏅', title: 'Expert & Certified', description: 'Our team comprises industry-trained professionals with deep knowledge of multi-brand AC systems.' },
    { icon: '💸', title: 'Upfront & Honest Pricing', description: 'No hidden charges. We provide a clear breakdown of the service required before any work begins.' },
    { icon: '⚡', title: 'Hassle-Free & Fast Service', description: 'Easily book online or via call. We prioritize prompt response times and flexible scheduling.' },
    { icon: '🛡️', title: 'Guaranteed Work', description: 'All repairs come with a service guarantee, ensuring your complete satisfaction and continued support.' },
];

const brands = ['Daikin', 'Samsung', 'LG', 'Voltas', 'Hitachi', 'Blue Star']; 


const Home: React.FC = () => {
    const phoneNumber = '+919787207758';
    const officeAddress = 'FixMyAc, Coimbatore';
    const AdminEmail = 'fixmyaccoimbatore@gmail.com'; 

    return (
        <> 
            {/* 1. HOME/HERO SECTION (ID: home-section) */}
<section id="home-section">
    <div className="container"> 
        <div className="hero-content-wrapper">
            <div 
                className="hero-left-content"
                style={{ 
                    backgroundImage: `url(${heroBackground})`,
                }}
            > 
                <div className="hero-text-and-cta">
                    <h1>Your Trusted Partner for Expert AC Service & Repair in Coimbatore</h1>
                    <p className="lead">
                        Keep your cool all year long. FixMyAc provides **reliable, fast, and high-quality** air conditioner service, repair, and installation.
                    </p>
                    
                    <ul style={{ listStyle: 'none', padding: '0', marginTop: '20px' }}>
                        <li style={{ marginBottom: '10px', color: 'white' }}>✅ Multi-Brand Expertise</li>
                        <li style={{ marginBottom: '10px', color: 'white' }}>✅ Trained & Experienced Professionals</li>
                    </ul>

                    {/* --- UPDATED CTA BOX --- */}
                    <div className="callout-feature" style={{ background: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ margin: '0 0 15px 0', color: 'var(--secondary-color)' }}>Service Starts from Just ₹ 599!</h3>
                        
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            {/* Call Button */}
                            <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none', flex: '1', minWidth: '200px' }}>
                                <button className="btn-primary" style={{ 
                                    backgroundColor: '#25d366', // Green for Call/WhatsApp feel
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    fontSize: '1.1rem'
                                }}>
                                    <span>📞</span> CALL: {phoneNumber}
                                </button>
                            </a>

                            {/* Book Button */}
                            <a href="#contact-form" style={{ textDecoration: 'none', flex: '1', minWidth: '200px' }}>
                                <button className="btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
                                    📅 BOOK ONLINE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="booking-form-container" id="contact-form"> 
                <BookingForm />
            </div>
        </div>
    </div>
</section>

            {/* 2. OUR SERVICES SECTION (ID: services-section) */}
            <section id="services-section" className="services-page" style={{ padding: '60px 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="page-title">What We Do: Quick Glance</h1>
                    <p className="page-subtitle">Quick glimpse of our core services: AC Service (Cleaning/Maintenance), AC Repair (Troubleshooting/Fixes), AC Installation.</p>
                    
                    <div className="services-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', margin: '30px 0' }}>
                        {mockServices.slice(0, 3).map((service: Service) => ( 
                            <div key={service.id} className="service-card" style={{ flex: '1 1 300px', maxWidth: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                
                                {/* The .service-image-container and .service-image styles are now in Home.css */}
                                <div className="service-image-container">
                                    <img src={service.icon} alt={service.title} className="service-image"/>
                                </div>

                                <h2 style={{ fontSize: '1.4rem', margin: '10px 0' }}>{service.title}</h2>
                                <p style={{ fontSize: '0.95rem', color: '#666', minHeight: '50px' }}>{service.description.split('. ')[0]}.</p> 
                                <a href="#contact-form"><button className="btn-primary service-cta">Book This Service</button></a>
                            </div>
                        ))}
                    </div> 
                    <a href="/services" className="btn-primary" style={{ marginTop: '30px', display: 'inline-block' }}>VIEW ALL SERVICES</a>
                </div> 
            </section>

            {/* 3. WHY CHOOSE US SECTION (ID: whyus-section) */}
            <section id="whyus-section" className="why-us-page" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="page-title">Why Choose FixMyAc?</h1>
                    <p className="page-subtitle">We combine unparalleled expertise with transparent service.</p>

                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{ padding: '25px', border: '1px solid #eee', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', backgroundColor: '#f9f9f9' }}>
                                <div className="feature-icon" style={{ fontSize: '2rem', marginBottom: '10px' }}>{feature.icon}</div>
                                <h3 style={{ margin: '5px 0 10px 0' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#666' }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BRANDS SHOWCASE SECTION (ID: brands-showcase) */}
            <section id="brands-showcase" style={{ padding: '60px 0', backgroundColor: '#f0f0f0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="page-title">We Service All Major AC Brands</h1>
                    <p className="page-subtitle">From Voltas and Daikin to Samsung and LG, our technicians are certified to handle all your cooling needs.</p>
                    
                    <div className="brands-list-preview" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
                        {brands.map(brand => (
                            <span key={brand} style={{ 
                                fontSize: '1.2rem', 
                                padding: '8px 15px', 
                                border: '1px solid #ccc', 
                                borderRadius: '5px', 
                                backgroundColor: 'white',
                                color: 'var(--text-color)' 
                            }}>{brand}</span>
                        ))}
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <a href="/brands" className="btn-primary" style={{ textDecoration: 'none' }}>See All Brands</a>
                    </div>
                </div>
            </section>
            
            {/* 5. CONTACT SECTION (ID: contact-section) */}
            {/* REDUCED VERTICAL PADDING HERE TO MAKE THE PAGE LESS LENGTHY */}
            <section id="contact-section" className="contact-page" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <h1 className="page-title">Get in Touch with FixMyAc</h1>
                    <p className="page-subtitle">For urgent bookings, please use the WhatsApp form at the top of the page.</p>

                    <div className="contact-layout" style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* REDUCED PADDING INSIDE THIS CONTAINER */}
                        <div className="contact-details-container" style={{ flex: 1, maxWidth: '500px', textAlign: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                            <h3>Our Professional Contact Details</h3>
                            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '15px 0' }} />
                            <div className="detail-item" style={{ margin: '10px 0' }}> 
                                <h4>📞 Phone Support (Calls Only)</h4>
                                <p><a href={`tel:${phoneNumber}`} style={{ fontWeight: 'bold' }}>{phoneNumber}</a></p>
                            </div>
                            <div className="detail-item" style={{ margin: '10px 0' }}>
                                <h4>📧 Professional Email</h4>
                                <p><a href={`mailto:${AdminEmail}`}>{AdminEmail}</a></p>
                            </div>
                            <div className="detail-item" style={{ margin: '10px 0' }}>
                                <h4>📍 Office Location</h4>
                                <p>{officeAddress}</p>
                            </div>
                            {/* Location Note */}
                            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '15px' }}>
                                <p><strong>Serving Coimbatore:</strong> We are dedicated to providing prompt service across the entire Coimbatore district. </p>
                                <a href={`tel:${phoneNumber}`} className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>Call to Book</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FOOTER */}
            <Footer />
        </>
    );
};

export default Home;