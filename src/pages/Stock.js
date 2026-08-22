import React, { useEffect, useState } from "react";

function Stock() {

  const [products, setProducts] = useState([]);


  const getData = () => {

    fetch("http://localhost:4000/tbl_product")

      .then(res => res.json())

      .then(data => {
        setProducts(data);
      });

  };


  useEffect(() => {

    getData();

  }, []);


  // Stock Status
  const getStatus = (stock) => {

    if (stock == 0) {

      return "Out of Stock";

    }

    if (stock < 10) {

      return "Low Stock";

    }

    return "Available";

  };


  // Update Stock
  const updateStock = (item) => {

    const newStock = prompt(
      "Enter New Stock",
      item.stock
    );


    if (newStock != null) {

      fetch(
        "http://localhost:4000/tbl_product/" +
        item.id,
        {

          method: "PATCH",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            stock: newStock
          })

        }
      )

        .then(() => {

          getData();

        });

    }

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Stock Management</h2>

      <p>Manage product stock</p>


      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >

        <table
          border="1"
          width="100%"
          cellPadding="10"
        >

          <thead>

            <tr>

              <th>No</th>

              <th>Product</th>

              <th>Category</th>

              <th>Stock</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {products.map((item, index) => (

              <tr key={item.id}>

                <td>
                  {index + 1}
                </td>

                <td>
                  {item.name}
                </td>

                <td>
                  {item.category}
                </td>

                <td>
                  {item.stock}
                </td>

                <td>
                  {getStatus(item.stock)}
                </td>

                <td>

                  <button
                    onClick={() =>
                      updateStock(item)
                    }
                    style={{
                      padding: "8px 15px",
                      background: "#2196F3",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Update Stock
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


export default Stock;