import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // The default CSS file for global styles
import App from './App'; // Import the main App component

// Create a root and render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
