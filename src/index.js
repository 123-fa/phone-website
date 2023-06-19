import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter  as Router, } from "react-router-dom";// holds information about all our routes
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
  <Router>
    {/* gives access to all the app we are to be creating */}
    <App />
  </Router>,
  </ProductProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

