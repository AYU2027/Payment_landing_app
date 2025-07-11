// src/App.jsx
import React from 'react';
import PaymentLandingPage from './components/PayNow';
import './App.css'; // Ensure your Tailwind CSS is imported here

function App() {
  return (
    // The PaymentLandingPage component handles its own full-screen layout
    <PaymentLandingPage />
  );
}

export default App;
