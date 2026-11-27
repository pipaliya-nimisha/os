
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({ adminName }) {
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    const [categoryRes, productRes, customerRes, orderRes] =
      await Promise.all([
        fetch("http://localhost:4000/tbl_category"),
        fetch("http://localhost:4000/tbl_product"),
        fetch("http://localhost:4000/tbl_customer"),
        fetch("http://localhost:4000/tbl_order")
      ]);

    const categories = await categoryRes.json();
    const products = await productRes.json();
    const customers = await customerRes.json();
    const orders = await orderRes.json();

    setTotalCategories(categories.length);
    setTotalProducts(products.length);
    setTotalCustomers(customers.length);

    const sortedOrders = [...orders].sort(
      (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
    );

    setRecentOrders(sortedOrders.slice(0, 5));
  };

  const summaryCard = {
    backgroundColor: "#ffffff",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
    height: "100%"
  };

  const statusStyle = (status) => {
    const value = (status || "Pending").toLowerCase();

    if (value === "confirmed") {
      return {
        backgroundColor: "#d1fae5",
        color: "#047857"
      };
    }

    if (value === "shipped") {
      return {
        backgroundColor: "#dbeafe",
        color: "#1d4ed8"
      };
    }

    if (value === "delivered") {
      return {
        backgroundColor: "#ccfbf1",
        color: "#0f766e"
      };
    }

    if (value === "cancelled") {
      return {
        backgroundColor: "#fee2e2",
        color: "#b91c1c"
      };
    }

    return {
      backgroundColor: "#fef3c7",
      color: "#92400e"
    };
  };

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
          background: "linear-gradient(135deg, #0f766e, #2a9d8f)"
        }}
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <p className="text-white mb-2">
              ONLINE STATIONERY STORE
            </p>

            <h1 className="text-white fw-bold mb-2">
              Welcome, {adminName}
            </h1>

            <p className="text-white mb-0">
              Manage your stationery store easily from one place.
            </p>
          </div>

          <div style={{ fontSize: "65px" }}>
            📚
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="fw-bold mb-1" style={{ color: "#243447" }}>
          Quick Access
        </h3>

        <p className="text-muted mb-0">
          Select an option to manage your store
        </p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-3 col-md-6">
          <Link to="/admin/category" className="text-decoration-none">
            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm h-100"
              style={{ borderBottom: "4px solid #0f766e" }}
            >
              <div style={{ fontSize: "38px" }}>📁</div>
              <h5 className="fw-bold mt-3 mb-0" style={{ color: "#0f766e" }}>
                Categories
              </h5>
              <p className="text-muted small mt-2 mb-0">
                Manage Categories
              </p>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <Link to="/admin/products" className="text-decoration-none">
            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm h-100"
              style={{ borderBottom: "4px solid #2a9d8f" }}
            >
              <div style={{ fontSize: "38px" }}>📦</div>
              <h5 className="fw-bold mt-3 mb-0" style={{ color: "#0f766e" }}>
                Products
              </h5>
              <p className="text-muted small mt-2 mb-0">
                Manage Products
              </p>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <Link to="/admin/customers" className="text-decoration-none">
            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm h-100"
              style={{ borderBottom: "4px solid #e9a23b" }}
            >
              <div style={{ fontSize: "38px" }}>👥</div>
              <h5 className="fw-bold mt-3 mb-0" style={{ color: "#0f766e" }}>
                Customers
              </h5>
              <p className="text-muted small mt-2 mb-0">
                View Customers
              </p>
            </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <Link to="/admin/orders" className="text-decoration-none">
            <div
              className="bg-white text-center p-4 rounded-4 shadow-sm h-100"
              style={{ borderBottom: "4px solid #64748b" }}
            >
              <div style={{ fontSize: "38px" }}>🛒</div>
              <h5 className="fw-bold mt-3 mb-0" style={{ color: "#0f766e" }}>
                Orders
              </h5>
              <p className="text-muted small mt-2 mb-0">
                Manage Orders
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="fw-bold mb-1" style={{ color: "#243447" }}>
          Store Overview
        </h3>

        <p className="text-muted mb-0">
          Your store information at a glance
        </p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-4 col-md-6">
          <div style={summaryCard}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2">Total Categories</p>
                <h2 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
                  {totalCategories}
                </h2>
              </div>
              <div
                className="rounded-3 p-3"
                style={{ backgroundColor: "#e0f2f1", fontSize: "27px" }}
              >
                📁
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div style={summaryCard}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2">Total Products</p>
                <h2 className="fw-bold mb-0" style={{ color: "#2a9d8f" }}>
                  {totalProducts}
                </h2>
              </div>
              <div
                className="rounded-3 p-3"
                style={{ backgroundColor: "#e6f4f1", fontSize: "27px" }}
              >
                📦
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div style={summaryCard}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2">Total Customers</p>
                <h2 className="fw-bold mb-0" style={{ color: "#d18b22" }}>
                  {totalCustomers}
                </h2>
              </div>
              <div
                className="rounded-3 p-3"
                style={{ backgroundColor: "#fff4df", fontSize: "27px" }}
              >
                👥
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-4 shadow-sm p-4"
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <h3 className="fw-bold mb-1" style={{ color: "#243447" }}>
              Recent Orders
            </h3>
            <p className="text-muted mb-0">
              Latest 5 customer orders
            </p>
          </div>

          <Link
            to="/admin/orders"
            className="text-decoration-none fw-semibold"
            style={{ color: "#0f766e" }}
          >
            View All Orders →
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr style={{ backgroundColor: "#f5f7fb" }}>
                <th className="py-3">Order ID</th>
                <th className="py-3">Customer</th>
                <th className="py-3">Date</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.length > 0 ? (
                recentOrders.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3 fw-semibold">
                      {item.id}
                    </td>

                    <td className="py-3">
                      {item.customerName}
                    </td>

                    <td className="py-3">
                      {item.date || "-"}
                    </td>

                    <td className="py-3 fw-semibold">
                      ₹{Number(item.amount || 0).toLocaleString("en-IN")}
                    </td>

                    <td className="py-3">
                      <span
                        className="badge px-3 py-2"
                        style={{
                          ...statusStyle(item.status),
                          borderRadius: "20px"
                        }}
                      >
                        {item.status || "Pending"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    No Orders Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
