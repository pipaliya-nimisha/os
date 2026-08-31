import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= ADMIN =================

import Login from "./components/admin/Login.js";
import Dashboard from "./components/admin/Dashboard.js";
import CategoryCRUD from "./components/admin/Categorycrud.js";
import Productcrud from "./components/admin/Productcrud.js";
import Stock from "./components/admin/Stock.js";
import Orders from "./components/admin/Orders.js";
import OrderStatus from "./components/admin/OrderStatus.js";
import Bill from "./components/admin/Bill.js";
import Customers from "./components/admin/Customers.js";
import Profile from "./components/admin/Profile.js";
import Logout from "./components/admin/Logouta.js";
import Sidebar from "./components/admin/Sidebar.js";

// ================= CUSTOMER =================

import Home from "./components/customer/Home.js";
import Product from "./components/customer/Product.js";
import CustomerCategory from "./components/customer/Category.js";
import Feedback from "./components/customer/Feedback.js";
import Header from "./components/customer/Header.js";
import Footer from "./components/customer/Footer.js";
import Register from "./components/customer/Register.js";
import CustomerLogin from "./components/customer/CustomerLogin.js";
import Cart from "./components/customer/Cart.js";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================================================= */}
        {/*                 CUSTOMER PANEL                   */}
        {/* ================================================= */}

        {/* Customer Home */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Customer Products */}
        <Route
          path="/product"
          element={
            <>
              <Header />
              <Product />
              <Footer />
            </>
          }
        />

        {/* Customer Category */}
        <Route
          path="/category"
          element={
            <>
              <Header />
              <CustomerCategory />
              <Footer />
            </>
          }
        />

        {/* Customer Feedback */}
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

        {/* Customer Login */}
        <Route
          path="/customer-login"
          element={<CustomerLogin />}
        />

        {/* Customer Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Customer Cart */}
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


        {/* ================================================= */}
        {/*                    LOGIN                          */}
        {/* ================================================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin/login"
          element={<Login />}
        />


        {/* ================================================= */}
        {/*                 ADMIN PANEL                       */}
        {/* ================================================= */}

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />

        {/* Admin Category CRUD */}
        <Route
          path="/admin/category"
          element={
            <Sidebar>
              <CategoryCRUD />
            </Sidebar>
          }
        />

        {/* Admin Product CRUD */}
        <Route
          path="/admin/products"
          element={
            <Sidebar>
              <Productcrud />
            </Sidebar>
          }
        />

        {/* Admin Stock */}
        <Route
          path="/admin/stock"
          element={
            <Sidebar>
              <Stock />
            </Sidebar>
          }
        />

        {/* Admin Orders */}
        <Route
          path="/admin/orders"
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />

        {/* Admin Order Status */}
        <Route
          path="/admin/order-status"
          element={
            <Sidebar>
              <OrderStatus />
            </Sidebar>
          }
        />

        {/* Admin Bill */}
        <Route
          path="/admin/bill"
          element={
            <Sidebar>
              <Bill />
            </Sidebar>
          }
        />

        {/* Admin Customers */}
        <Route
          path="/admin/customers"
          element={
            <Sidebar>
              <Customers />
            </Sidebar>
          }
        />

        {/* Admin Profile */}
        <Route
          path="/admin/profile"
          element={
            <Sidebar>
              <Profile />
            </Sidebar>
          }
        />

        {/* Admin Logout */}
        <Route
          path="/admin/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;