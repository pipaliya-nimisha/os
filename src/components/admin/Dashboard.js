import React, { useEffect, useState } from "react";

function Dashboard() {

  const main = {
    padding: "25px",
    background: "#FFFDF7",
  };

  const heading = {
    margin: "0",
    fontSize: "28px",
    color: "#222",
  };

  const welcome = {
    marginTop: "8px",
    color: "#777",
  };

  const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "25px",
  };

  const card = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const icon = {
    fontSize: "35px",
  };

  const cardTitle = {
    margin: "0",
    color: "#777",
    fontSize: "14px",
  };

  const number = {
    margin: "5px 0 0",
    fontSize: "25px",
    color: "#222",
  };

  const box = {
    background: "white",
    marginTop: "25px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const boxHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const boxTitle = {
    margin: "0",
    fontSize: "20px",
  };

  const orderCount = {
    background: "#f0f0f0",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    color: "#555",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const th = {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
  };

  const td = {
    padding: "13px 12px",
    borderBottom: "1px solid #eee",
    fontSize: "14px",
  };

  const status = {
    background: "#e7f7ed",
    color: "#218838",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  };

  const noData = {
    textAlign: "center",
    padding: "25px",
    color: "#777",
  };

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const getData = async () => {

    const categoryRes = await fetch(
      "http://localhost:4000/tbl_category"
    );
    const categoryData = await categoryRes.json();
    setCategory(categoryData);

    const productRes = await fetch(
      "http://localhost:4000/tbl_product"
    );
    const productData = await productRes.json();
    setProduct(productData);

    const customerRes = await fetch(
      "http://localhost:4000/tbl_customer"
    );
    const customerData = await customerRes.json();
    setCustomer(customerData);

    const orderRes = await fetch(
      "http://localhost:4000/tbl_order"
    );
    const orderData = await orderRes.json();
    setOrder(orderData);

    const feedbackRes = await fetch(
      "http://localhost:4000/tbl_feedback"
    );
    const feedbackData = await feedbackRes.json();
    setFeedback(feedbackData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={main}>

      <h2 style={heading}>Dashboard</h2>

      <p style={welcome}>
        Welcome to Online Stationery Management System
      </p>

      <hr />

      {/* ================= CARDS ================= */}

      <div style={cardContainer}>

        {/* Products */}
        <div style={card}>
          <div style={icon}>📦</div>

          <div>
            <p style={cardTitle}>Total Products</p>
            <h2 style={number}>{product.length}</h2>
          </div>
        </div>

        {/* Categories */}
        <div style={card}>
          <div style={icon}>📁</div>

          <div>
            <p style={cardTitle}>Total Categories</p>
            <h2 style={number}>{category.length}</h2>
          </div>
        </div>

        {/* Customers */}
        <div style={card}>
          <div style={icon}>👥</div>

          <div>
            <p style={cardTitle}>Total Customers</p>
            <h2 style={number}>{customer.length}</h2>
          </div>
        </div>

        {/* Orders */}
        <div style={card}>
          <div style={icon}>🛒</div>

          <div>
            <p style={cardTitle}>Total Orders</p>
            <h2 style={number}>{order.length}</h2>
          </div>
        </div>

        {/* Feedback */}
        <div style={card}>
          <div style={icon}>💬</div>

          <div>
            <p style={cardTitle}>Total Feedback</p>
            <h2 style={number}>{feedback.length}</h2>
          </div>
        </div>

      </div>

      {/* ================= RECENT ORDERS ================= */}

      <div style={box}>

        <div style={boxHeader}>

          <h3 style={boxTitle}>
            Recent Orders
          </h3>

          <span style={orderCount}>
            {order.length} Orders
          </span>

        </div>

        <table style={table}>

          <thead>
            <tr>
              <th style={th}>Order ID</th>
              <th style={th}>Customer</th>
              <th style={th}>Amount</th>
              <th style={th}>Status</th>
            </tr>
          </thead>

          <tbody>

            {order.length > 0 ? (

              order.slice(0, 5).map(item => (

                <tr key={item.id}>

                  <td style={td}>
                    <b>{item.id}</b>
                  </td>

                  <td style={td}>
                    {item.customerName}
                  </td>

                  <td style={td}>
                    ₹{item.amount}
                  </td>

                  <td style={td}>
                    <span style={status}>
                      {item.status}
                    </span>
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="4" style={noData}>
                  No Orders Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;
