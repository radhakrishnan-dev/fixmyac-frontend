// src/index.tsx (Verify this structure)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Make sure global CSS is here

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* The Router must only be here */}
    <Router> 
      <App />
    </Router>
  </React.StrictMode>
);