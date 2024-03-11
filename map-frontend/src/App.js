import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import Visitors from "./Visitors";
import Header from "./Header";

// axios.defaults.baseURL = "http://localost:5000";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/visit" element={<Visitors />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
