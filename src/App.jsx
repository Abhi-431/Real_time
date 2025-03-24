import { useState } from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar';
import LandingPage from './Component/home/LandingPage';
import CollabTool from './Pages/CollabTool';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'; // Make sure to create the Dashboard page if you haven't
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<CollabTool />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
 
 
      
 
  );
}

export default App;
