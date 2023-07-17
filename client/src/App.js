import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProd from "./pages/CompareProd";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Forgotpassword from "./pages/Forgotpassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsnCondition from "./pages/TermsnCondition";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct/>} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProd />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="forgot-password" element={<Forgotpassword/>} />
            <Route path="reset-password" element={<ResetPassword/>} />
            <Route path="privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="shipping-policy" element={<ShippingPolicy/>} />
            <Route path="refund-policy" element={<RefundPolicy/>} />
            <Route path="terms-and-conditions" element={<TermsnCondition/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App;
