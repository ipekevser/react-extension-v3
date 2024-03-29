import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";

const root = document.createElement("div")
root.className = "orb-container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(<App />);
