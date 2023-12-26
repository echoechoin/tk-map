import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import './index.css';
import theme from './config/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}> 
        <Router>
          <App />
        </Router>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
