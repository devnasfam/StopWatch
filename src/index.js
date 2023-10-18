import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const destination = document.querySelector("#root");
const root = createRoot(destination);
root.render(
      <App />
);
