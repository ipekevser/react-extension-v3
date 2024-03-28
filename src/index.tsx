import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.createElement("div")
root.className = "containerrr"
root.id = 'tet'
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(<App />);
