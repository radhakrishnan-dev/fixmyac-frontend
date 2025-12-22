// src/components/WhatsAppButton.tsx
import React from 'react';
import './WhatsAppButton.css'; // Create this CSS file next

const WhatsAppButton: React.FC = () => {
  // Replace with your actual WhatsApp number including country code (no +, spaces, or dashes)
  const whatsappNumber = '919787207758'; 
  const defaultMessage = 'Hello, I would like to book an AC repair service.';
  
  // URL format for WhatsApp API
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      {/* Simple circle icon */}
      <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 14.88c-.14.24-.31.32-.51.31-.22 0-.48-.09-.77-.18s-.68-.23-1.3-.47c-.6-.23-1.12-.5-1.66-.82-.55-.32-1.05-.72-1.42-1.19-.36-.47-.59-1.02-.69-1.63-.09-.61.02-1.18.27-1.74.25-.56.62-1.01 1.09-1.38.47-.37 1.05-.62 1.74-.75.69-.14 1.34-.14 1.95.03.61.17 1.15.52 1.63.99.48.47.85 1.05 1.09 1.74.25.69.29 1.36.1 2.01-.19.65-.62 1.16-1.28 1.54-.66.38-1.42.59-2.3.62z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;