import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import "@shopify/polaris/build/esm/styles.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider i18n={enTranslations}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
