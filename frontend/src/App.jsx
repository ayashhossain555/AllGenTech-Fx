import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminLoginAccess from "./components/AdminLogin/AdminLoginAccess";
import PrivateAdminRoute from "./utils/PrivateAdminRoute";
import RedirectRoutes from "./utils/RedirectRoutes";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Register from "./components/Client/Register";
import Login from "./components/Client/Login";
import Profile from "./components/Client/Profile";
import { Toaster } from "react-hot-toast";

const App = () => (
  <div>
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adminLogin" element={<AdminLoginAccess />} />

      {/* Private routes that require authentication */}
      <Route element={<PrivateAdminRoute />}>
        <Route path="/admin" element={<AdminLogin />} />
      </Route>

      {/* Routes that redirect based on auth status */}
      <Route element={<RedirectRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
    <Toaster />
  </div>
);

export default App;
