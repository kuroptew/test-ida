import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App/App";
import './style/style.scss'


const container = ReactDOM.createRoot(document.getElementById('root'));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
