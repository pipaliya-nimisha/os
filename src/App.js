import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Stock from "./pages/Stock";
import Orders from "./pages/Orders";
import OrderStatus from "./pages/OrderStatus";
import Bill from "./pages/Bill";
import Customers from "./pages/Customers";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

import Sidebar from "./components/Sidebar";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* Admin Pages */}

        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />


        <Route
          path="/category"
          element={
            <Sidebar>
              <Category />
            </Sidebar>
          }
        />


        <Route
          path="/products"
          element={
            <Sidebar>
              <Products />
            </Sidebar>
          }
        />


        <Route
          path="/stock"
          element={
            <Sidebar>
              <Stock />
            </Sidebar>
          }
        />


        <Route
          path="/orders"
          element={
            <Sidebar>
              <Orders />
            </Sidebar>
          }
        />


        <Route
          path="/order-status"
          element={
            <Sidebar>
              <OrderStatus />
            </Sidebar>
          }
        />


        <Route
          path="/bill"
          element={
            <Sidebar>
              <Bill />
            </Sidebar>
          }
        />


        <Route
          path="/customers"
          element={
            <Sidebar>
              <Customers />
            </Sidebar>
          }
        />


        <Route
          path="/profile"
          element={
            <Sidebar>
              <Profile />
            </Sidebar>
          }
        />


        <Route
          path="/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;