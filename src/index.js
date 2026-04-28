import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Suppress benign ResizeObserver errors in development
const suppressResizeObserverError = () => {
  window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('ResizeObserver loop')) {
      e.stopImmediatePropagation();
      const overlay = document.getElementById('webpack-dev-server-client-overlay');
      const overlayDiv = document.getElementById('webpack-dev-server-client-overlay-div');
      if (overlay) overlay.style.display = 'none';
      if (overlayDiv) overlayDiv.style.display = 'none';
    }
  });
};
suppressResizeObserverError();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
