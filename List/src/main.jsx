import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Globalstyled } from './globalstyledcompany.js';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyled />
    <App />
  </StrictMode>,
);
