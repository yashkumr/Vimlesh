import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import PrivateRoute from "./components/Routes/Privates.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="user" element={<AdminDashboard />} />
         
        </Route>


      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
