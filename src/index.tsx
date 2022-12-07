
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App1';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  );



reportWebVitals();
