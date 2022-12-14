import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { AppProvider } from './components/context';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById("root"));