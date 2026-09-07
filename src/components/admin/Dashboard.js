import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ adminName }) {

  return (
    <div
      className="p-4"
      style={{
        backgroundColor: "#f5f7fb",
        minHeight: "calc(100vh - 70px)"
      }}
    >

      <div
        className="rounded-4 p-4 mb-4 shadow-sm"
        style={{
          background:
            "linear-gradient(135deg, #0f766e, #2a9d8f)"
        }}
      >

        <h1 className="text-white fw-bold mb-2">
          Welcome, {adminName}
        </h1>

        <p className="text-white mb-0">
          Manage your Online Stationery Store
        </p>

      </div>

      <div className="mb-4">

        <h3
          className="fw-bold mb-1"
          style={{ color: "#243447" }}
        >
          Quick Access
        </h3>

        <p className="text-muted mb-0">
          Select an option to manage your store
        </p>

      </div>

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">

          <Link
            to="/admin/category"
            className="text-decoration-none"
          >

            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm"
              style={{
                transition: "0.3s"
              }}
            >

              <div style={{ fontSize: "40px" }}>
                📁
              </div>

              <h4
                className="fw-bold mt-3"
                style={{ color: "#0f766e" }}
              >
                Categories
              </h4>

            </div>

          </Link>

        </div>

        <div className="col-lg-3 col-md-6">

          <Link
            to="/admin/products"
            className="text-decoration-none"
          >

            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm"
            >

              <div style={{ fontSize: "40px" }}>
                📦
              </div>

              <h4
                className="fw-bold mt-3"
                style={{ color: "#0f766e" }}
              >
                Products
              </h4>

            </div>

          </Link>

        </div>

        <div className="col-lg-3 col-md-6">

          <Link
            to="/admin/customers"
            className="text-decoration-none"
          >

            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm"
            >

              <div style={{ fontSize: "40px" }}>
                👥
              </div>

              <h4
                className="fw-bold mt-3"
                style={{ color: "#0f766e" }}
              >
                Customers
              </h4>

            </div>

          </Link>

        </div>

        <div className="col-lg-3 col-md-6">

          <Link
            to="/admin/orders"
            className="text-decoration-none"
          >

            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm"
            >

              <div style={{ fontSize: "40px" }}>
                🛒
              </div>

              <h4
                className="fw-bold mt-3"
                style={{ color: "#0f766e" }}
              >
                Orders
              </h4>

            </div>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;