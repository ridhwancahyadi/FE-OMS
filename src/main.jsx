import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.jsx";
import Navbar from "@/components/section/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Navbar />

        <App />
        <Toaster />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
