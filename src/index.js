import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './LogIn_Register_Logout/Login';
import Register from './LogIn_Register_Logout/Register';
import Error from './LogIn_Register_Logout/Error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/operations" exact element={<App />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
