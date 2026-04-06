console.log("BOOSTRAPPING START");
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log("ROOT ELEMENT FOUND, MOUNTING...");
  createRoot(rootElement).render(<App />);
} else {
  console.log("ROOT ELEMENT NOT FOUND!");
}
