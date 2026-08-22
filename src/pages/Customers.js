import React, { useEffect, useState } from "react";

function Customers() {

  const [customers, setCustomers] = useState([]);


  useEffect(() => {

    fetch(
      "http://localhost:4000/tbl_customer"
    )

      .then(res => res.json())

      .then(data => {
        setCustomers(data);
      });

  }, []);


  return (

    <div style={{ padding: "25px" }}>

      <h2>Customers</h2>

      <p>View all customers</p>


      <div style={box}>

        <table
          border="1"
          width="100%"
          cellPadding="10"
        >

          <thead>

            <tr>

              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Joined On</th>

            </tr>

          </thead>


          <tbody>

            {customers.map((item, index) => (

              <tr key={item.id}>

                <td>{index + 1}</td>

                <td>{item.name}</td>

                <td>{item.email}</td>

                <td>{item.mobile}</td>

                <td>{item.joinedOn}</td>

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


export default Customers;