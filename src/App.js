import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./auth/Login";
export default function App() {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Login />} />
    </Routes>
  </Router>
  );
}
