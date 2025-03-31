import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Blogs from "./components/Blogs";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="footer" element={<Footer />} />
    
    <Route element={<Layout />}>
      <Route path="products" element={<Products />} />
      <Route path="blogs" element={<Blogs />} />
    </Route>
    </Routes>
  </BrowserRouter>
);
