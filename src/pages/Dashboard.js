import React, { useEffect, useState } from "react";

function Dashboard() {

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);


  useEffect(() => {

    fetch("http://localhost:4000/tbl_category")
      .then(res => res.json())
      .then(data => setCategory(data));


    fetch("http://localhost:4000/tbl_product")
      .then(res => res.json())
      .then(data => setProduct(data));


    fetch("http://localhost:4000/tbl_customer")
      .then(res => res.json())
      .then(data => setCustomer(data));


    fetch("http://localhost:4000/tbl_order")
      .then(res => res.json())
      .then(data => setOrder(data));

  }, []);


  return (

    <div style={{ padding: "25px" }}>

      <h2>Dashboard</h2>

      <p>Welcome to Online Stationery Management System</p>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px"
        }}
      >

        <div style={card}>
          <h3>📦</h3>
          <p>Total Products</p>
          <h2>{product.length}</h2>
        </div>


        <div style={card}>
          <h3>📁</h3>
          <p>Total Categories</p>
          <h2>{category.length}</h2>
        </div>


        <div style={card}>
          <h3>👥</h3>
          <p>Total Customers</p>
          <h2>{customer.length}</h2>
        </div>


        <div style={card}>
          <h3>🛒</h3>
          <p>Total Orders</p>
          <h2>{order.length}</h2>
        </div>

      </div>


      <br />


      <div style={box}>

        <h3>Recent Orders</h3>

        <table border="1" width="100%" cellPadding="10">

          <thead>

            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {order.slice(0, 5).map(item => (

              <tr key={item.id}>

                <td>#{item.id}</td>

                <td>{item.customerName}</td>

                <td>₹{item.amount}</td>

                <td>{item.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}


const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center"
};


const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px"
};


export default Dashboard;