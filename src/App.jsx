import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@/pages/auth/login";
import ForgotPassword from "@/pages/auth/forgot-password";
import Home from "@/pages/home";
import ResetPassword from "./pages/auth/reset-password";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
