import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.createElement("div")
root.className = "orb-container"
root.id = 'tet'
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(<App />);
