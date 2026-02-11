import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ScrollToTop from "react-scroll-to-top";
import {BrowserRouter} from "react-router-dom";
import { ChevronUp } from "lucide-react";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <ScrollToTop
            smooth
            top={300}
            component={
                <div className="flex items-center justify-center w-full h-full">
                <ChevronUp size={18} />
                </div>
            }
            style={{
                backgroundColor: "#2563eb",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.35)",
                right: "10px",
            }}
            className="text-white hover:scale-110 transition-transform"
        />
    </BrowserRouter>
)