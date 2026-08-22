import React, { useEffect, useState } from "react";

function Orders() {

  const [orders, setOrders] = useState([]);


  const getData = () => {

    fetch("http://localhost:4000/tbl_order")

      .then(res => res.json())

      .then(data => {
        setOrders(data);
      });

  };


  useEffect(() => {

    getData();

  }, []);


  const deleteOrder = (id) => {

    fetch(
      "http://localhost:4000/tbl_order/" + id,
      {
        method: "DELETE"
      }
    )

      .then(() => {
        getData();
      });

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Orders</h2>

      <p>Manage customer orders</p>


      <div style={box}>

        <table
          border="1"
          width="100%"
          cellPadding="10"
        >

          <thead>

            <tr>

              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {orders.map(item => (

              <tr key={item.id}>

                <td>#{item.id}</td>

                <td>
                  {item.customerName}
                </td>

                <td>{item.date}</td>

                <td>₹{item.amount}</td>

                <td>{item.status}</td>

                <td>

                  <button
                    onClick={() =>
                      deleteOrder(item.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}


const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px"
};


export default Orders;