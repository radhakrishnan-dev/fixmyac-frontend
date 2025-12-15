// src/pages/WhyChooseUs.tsx
import React from 'react';
import './WhyChooseUs.css'; // We'll create this CSS file next

// Define features array
const features = [
  {
    icon: '🏆',
    title: 'Certified & Vetted Technicians',
    description: 'Every technician is rigorously trained, background-checked, and certified to work on all major AC brands, ensuring professional service every time.',
  },
  {
    icon: '💰',
    title: 'Upfront & Transparent Pricing',
    description: 'No hidden costs. You receive a detailed quote before any work begins, so you know exactly what you are paying for.',
  },
  {
    icon: '⏱️',
    title: 'Same-Day Service Guarantee',
    description: 'We prioritize urgent repairs. Book before noon and we guarantee a technician will visit your location the same day.',
  },
  {
    icon: '✅',
    title: '30-Day Service Warranty',
    description: 'We stand behind our work. All repairs and services are covered by a 30-day warranty for complete peace of mind.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-us-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="page-title">Why FixMyAc is Your Best Choice</h1>
        <p className="page-subtitle">We combine unparalleled expertise with transparent service to deliver the best AC repair experience.</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;