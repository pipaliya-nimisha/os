import React, { useEffect, useState } from "react";

function Customers() {

  const [customers, setCustomers] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "http://localhost:4000/tbl_customer"
    );

    const data = await res.json();

    setCustomers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const box = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse"
  };

  const th = {
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    color: "#222"
  };

  const td = {
    padding: "12px",
    borderBottom: "1px solid #ddd"
  };

  return (

    <div style={{ padding: "25px" }}>

      <h2>Customers</h2>
      <p>View all customers</p>

      <hr />

      <div style={box}>

        <table style={table}>

          <thead>
            <tr>
              <th style={th}>No</th>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Mobile</th>
              <th style={th}>Address</th>
            </tr>
          </thead>

          <tbody>

            {customers.map((item, index) => (

              <tr key={item.id}>

                <td style={td}>
                  {index + 1}
                </td>

                <td style={td}>
                  {item.name}
                </td>

                <td style={td}>
                  {item.email}
                </td>

                <td style={td}>
                  {item.mobile}
                </td>

                <td style={td}>
                  {item.address}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Customers;