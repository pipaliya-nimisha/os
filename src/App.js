import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= COMMON LOGIN =================

import Login from "./components/admin/Login";

// ================= ADMIN PANEL =================

import Dashboard from "./components/admin/Dashboard";
import AdminCategory from "./components/admin/Category";
import Products from "./components/admin/Products";
import Stock from "./components/admin/Stock";
import Orders from "./components/admin/Orders";
import OrderStatus from "./components/admin/OrderStatus";
import Bill from "./components/admin/Bill";
import Customers from "./components/admin/Customers";
import Profile from "./components/admin/Profile";
import Logout from "./components/admin/Logout";
import Sidebar from "./components/admin/Sidebar";

// ================= CUSTOMER PANEL =================

import Home from "./components/customer/Home";
import Product from "./components/customer/Product";
import CustomerCategory from "./components/customer/Category";
import Contact from "./components/customer/Contact";
import Feedback from "./components/customer/Feedback";
import Header from "./components/customer/Header";
import Footer from "./components/customer/Footer";
import Register from "./components/customer/Register";
import CustomerLogin from "./components/customer/CustomerLogin";
import Cart from "./components/customer/Cart";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ========================================= */}
        {/*             CUSTOMER HOME                 */}
        {/* ========================================= */}

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


        {/* ========================================= */}
        {/*             CUSTOMER PRODUCT              */}
        {/* ========================================= */}

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


        {/* ========================================= */}
        {/*             CUSTOMER CATEGORY             */}
        {/* ========================================= */}

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


        {/* ========================================= */}
        {/*             CUSTOMER CONTACT              */}
        {/* ========================================= */}

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


        {/* ========================================= */}
        {/*             CUSTOMER FEEDBACK             */}
        {/* ========================================= */}

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


        {/* ========================================= */}
        {/*              COMMON LOGIN                 */}
        {/* ========================================= */}

        {/* 
          Admin Login:
          /login
          
          Admin select kare → Admin Dashboard
          Customer select kare → Customer Home
        */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* ========================================= */}
        {/*             CUSTOMER LOGIN                */}
        {/* ========================================= */}

        {/* 
          Registration successful થયા પછી
          direct Customer Login page open થશે.
        */}

        <Route
          path="/customer-login"
          element={<CustomerLogin />}
        />


        {/* ========================================= */}
        {/*             CUSTOMER REGISTER             */}
        {/* ========================================= */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ========================================= */}
        {/*              CUSTOMER CART                */}
        {/* ========================================= */}

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


        {/* ========================================= */}
        {/*                ADMIN LOGIN                */}
        {/* ========================================= */}

        <Route
          path="/admin/login"
          element={<Login />}
        />


        {/* ========================================= */}
        {/*             ADMIN DASHBOARD               */}
        {/* ========================================= */}

        <Route
          path="/admin/Dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*             ADMIN CATEGORY                */}
        {/* ========================================= */}

        <Route
          path="/admin/category"
          element={
            <Sidebar>
              <AdminCategory />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*             ADMIN PRODUCTS                */}
        {/* ========================================= */}

        <Route
          path="/admin/products"
          element={
            <Sidebar>
              <Products />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*               ADMIN STOCK                 */}
        {/* ========================================= */}

        <Route
          path="/admin/stock"
          element={
            <Sidebar>
              <Stock />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*              ADMIN ORDERS                 */}
        {/* ========================================= */}

        <Route
          path="/admin/orders"
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*           ADMIN ORDER STATUS              */}
        {/* ========================================= */}

        <Route
          path="/admin/order-status"
          element={
            <Sidebar>
              <OrderStatus />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*                ADMIN BILL                 */}
        {/* ========================================= */}

        <Route
          path="/admin/bill"
          element={
            <Sidebar>
              <Bill />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*             ADMIN CUSTOMERS               */}
        {/* ========================================= */}

        <Route
          path="/admin/customers"
          element={
            <Sidebar>
              <Customers />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*              ADMIN PROFILE                */}
        {/* ========================================= */}

        <Route
          path="/admin/profile"
          element={
            <Sidebar>
              <Profile />
            </Sidebar>
          }
        />


        {/* ========================================= */}
        {/*              ADMIN LOGOUT                 */}
        {/* ========================================= */}

        <Route
          path="/admin/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;