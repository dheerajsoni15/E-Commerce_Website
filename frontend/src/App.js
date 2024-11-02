import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Login from './components/Login';
import Singhup from './components/Singhup';
import About from './components/AboutUs';
import Uploadinfo from './components/Uploadinfo';
import Product from './components/Product';
import Addtocart from './components/Addtocart';
import ProductList from './components/ProductList.js';
import UserList from './components/UserList.js';
import Adminindex from './components/Adminindex';
import AdminLogin from './components/Adminlog.js';
import ProtectedRoute from './components/ProtectedRoute'; 
import ProtectedAdmin from './components/ProtectAdmin.js';
import AdminPanel from './components/AdminPanel.js';



function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId));
  };

  return (
    <Router>
      <Header />
      <NavBar />
      <Slider />
      <Routes>
        <Route path="/" element={<Product onAddToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singhup />} />
        <Route path="/about" element={<About />} />
        <Route path="/uploadinfo" element={<Uploadinfo />} />

        {/* Protected Routes */}
        <Route
          path="/addtocart"
          element={
            <ProtectedRoute
              element={<Addtocart cart={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />}
              roleRequired="user" // Adjust as needed
            />
          }
        />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/userlist" element={<UserList />} />
        <Route
          path="/adminindex"
          element={
            <ProtectedAdmin
              element={<Adminindex />}
              roleRequired="admin"
            />
          }
        />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpanels" element={<AdminPanel />} />
        {/* Add more protected routes as needed */}
      </Routes>
      
      <Footer />
    </Router>
  );
}
export default App;
