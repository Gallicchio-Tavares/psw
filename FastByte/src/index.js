import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


reportWebVitals();
