
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./components/admin/Login.js";
import Dashboard from "./components/admin/Dashboard.js";
import CategoryCRUD from "./components/admin/Categorycrud.js";
import Productcrud from "./components/admin/Productcrud.js";
import Stock from "./components/admin/Stock.js";
import Orders from "./components/admin/Orders.js";
import Customers from "./components/admin/Customers.js";
import ManageFeedback from "./components/admin/ManageFeedback.js";
import Profile from "./components/admin/Profile.js";
import Logout from "./components/admin/Logouta.js";
import Sidebar from "./components/admin/Sidebar.js";

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
import CustomerProfile from "./components/customer/CustomerProfile";

function AdminProtectedRoute({ children }) {

  const admin = localStorage.getItem("admin");

  return admin ? children : <Navigate to="/login" replace />;

}

function App() {

  const [selectedCategory, setSelectedCategory] = useState("");

  const [adminName, setAdminName] = useState(() => {
    const admin = JSON.parse(localStorage.getItem("admin") || "null");
    return admin ? admin.name : "";
  });

  return (
    <BrowserRouter>

      <Toaster position="top-center" />

      <Routes>

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

        <Route path="/customer-login" element={<CustomerLogin />} />

        <Route path="/register" element={<Register />} />

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

        <Route path="/logout" element={<Logoutc />} />

        <Route
          path="/login"
          element={<Login setAdminName={setAdminName} />}
        />

        <Route
          path="/admin/login"
          element={<Login setAdminName={setAdminName} />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Dashboard adminName={adminName} />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/category"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <CategoryCRUD />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Productcrud />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/stock"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Stock />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Orders />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <Customers />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/feedback"
          element={
            <AdminProtectedRoute>
              <Sidebar>
                <ManageFeedback />
              </Sidebar>
            </AdminProtectedRoute>
          }
        />

        <Route
  path="/admin/profile"
  element={
    <AdminProtectedRoute>
      <Sidebar>
        <Profile
          adminName={adminName}
          setAdminName={setAdminName}
        />
      </Sidebar>
    </AdminProtectedRoute>
  }
/>

        <Route
  path="/admin/logout"
  element={
    <AdminProtectedRoute>
      <Logout setAdminName={setAdminName} />
    </AdminProtectedRoute>
  }
/>

<Route
  path="/customer-profile"
  element={
    <>
      <Header />
      <CustomerProfile />
      <Footer />
    </>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
