import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';   


// Initialize Google Analytics
ReactGA.initialize('G-CJ76BC3WLR');

import App from './App';
// import reportWebVitals from './reportWebVitals';
import { GlobalStateProvider } from './GlobalStateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);

// reportWebVitals();
