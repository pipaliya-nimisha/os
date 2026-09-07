import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Admin Components
import Login from "./components/admin/Login.js";
import Dashboard from "./components/admin/Dashboard.js";
import CategoryCRUD from "./components/admin/Categorycrud.js";
import Productcrud from "./components/admin/Productcrud.js";
import Stock from "./components/admin/Stock.js";
import Orders from "./components/admin/Orders.js";
import OrderStatus from "./components/admin/OrderStatus.js";
import Customers from "./components/admin/Customers.js";
import ManageFeedback from "./components/admin/ManageFeedback.js";
import Profile from "./components/admin/Profile.js";
import Logout from "./components/admin/Logouta.js";
import Sidebar from "./components/admin/Sidebar.js";

// Customer Components
import Home from "./components/customer/Home.js";
import Product from "./components/customer/Product.js";
import CustomerCategory from "./components/customer/Category.js";
import Feedback from "./components/customer/Feedback.js";
import Contact from "./components/customer/Contact.js";
import Header from "./components/customer/Header.js";
import Footer from "./components/customer/Footer.js";
import Register from "./components/customer/Register.js";
import CustomerLogin from "./components/customer/CustomerLogin.js";
import Cart from "./components/customer/Cart.js";
import Logoutc from "./components/customer/Logoutc.js";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("");
  const [adminName, setAdminName] = useState("");

  return (
    <BrowserRouter>

      <Toaster position="top-center" />

      <Routes>

        {/* ================= CUSTOMER ================= */}

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home setSelectedCategory={setSelectedCategory} />
              <Footer />
            </>
          }
        />

        <Route
          path="/product"
          element={
            <>
              <Header />
              <Product selectedCategory={selectedCategory} />
              <Footer />
            </>
          }
        />

        <Route
          path="/category"
          element={
            <>
              <Header />
              <CustomerCategory
                setSelectedCategory={setSelectedCategory}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/feedback"
          element={
            <>
              <Header />
              <Feedback />
              <Footer />
            </>
          }
        />

        <Route
          path="/customer-login"
          element={<CustomerLogin />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
        />

        <Route
          path="/logout"
          element={<Logoutc />}
        />


        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/login"
          element={
            <Login setAdminName={setAdminName} />
          }
        />

        <Route
          path="/admin/login"
          element={
            <Login setAdminName={setAdminName} />
          }
        />


        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <Sidebar>
              <Dashboard adminName={adminName} />
            </Sidebar>
          }
        />

        <Route
          path="/admin/category"
          element={
            <Sidebar>
              <CategoryCRUD />
            </Sidebar>
          }
        />

        <Route
          path="/admin/products"
          element={
            <Sidebar>
              <Productcrud />
            </Sidebar>
          }
        />

        <Route
          path="/admin/stock"
          element={
            <Sidebar>
              <Stock />
            </Sidebar>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />

        <Route
          path="/admin/order-status"
          element={
            <Sidebar>
              <OrderStatus />
            </Sidebar>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <Sidebar>
              <Customers />
            </Sidebar>
          }
        />

        <Route
          path="/admin/feedback"
          element={
            <Sidebar>
              <ManageFeedback />
            </Sidebar>
          }
        />

    <Route 
  path="/admin/profile" 
  element={ 
    <Sidebar> 
      <Profile adminName={adminName} />
    </Sidebar> 
  } 
/>

        <Route
          path="/admin/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;