// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Import Footer styles

const Footer: React.FC = () => {
    // You can also include links to social media or privacy policies here if needed
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                {/* Main Attribution Line */}
                <p className="footer-attribution">
                    <span className="copyright-info">
                        All rights to FixMyAc &copy; 2025
                    </span>
                    <span className="developer-info">
                        Developed by Krishzz Graphicz
                    </span>
                </p>
                
                {/* You can add a quick navigation or social links here if necessary */}
            </div>
        </footer>
    );
};

export default Footer;