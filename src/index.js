import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Toaster position="bottom-right" reverseOrder={false} />
      <App />
    </Router>
  </React.StrictMode>,
  // document.getElementById('root')
);

reportWebVitals();
