import React, { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [editId, setEditId] = useState(null);

  // Form Show / Hide
  const [showForm, setShowForm] = useState(false);


  // Get Products
  const getProducts = () => {

    fetch("http://localhost:4000/tbl_product")

      .then(res => res.json())

      .then(data => {
        setProducts(data);
      });

  };


  // Get Categories
  const getCategories = () => {

    fetch("http://localhost:4000/tbl_category")

      .then(res => res.json())

      .then(data => {
        setCategories(data);
      });

  };


  useEffect(() => {

    getProducts();
    getCategories();

  }, []);


  // Add Product
  const addProduct = () => {

    if (
      name === "" ||
      category === "" ||
      price === "" ||
      stock === ""
    ) {

      alert("Please enter all details");

      return;
    }


    fetch("http://localhost:4000/tbl_product", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        name: name,

        category: category,

        price: price,

        stock: stock,

        status: "Active"

      })

    })

      .then(() => {

        clearData();

        setShowForm(false);

        getProducts();

      });

  };


  // Delete Product
  const deleteProduct = (id) => {

    fetch(
      "http://localhost:4000/tbl_product/" + id,
      {
        method: "DELETE"
      }
    )

      .then(() => {

        getProducts();

      });

  };


  // Edit Product
  const editProduct = (item) => {

    setEditId(item.id);

    setName(item.name);

    setCategory(item.category);

    setPrice(item.price);

    setStock(item.stock);

    setShowForm(true);

  };


  // Update Product
  const updateProduct = () => {

    fetch(
      "http://localhost:4000/tbl_product/" + editId,
      {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          id: editId,

          name: name,

          category: category,

          price: price,

          stock: stock,

          status: "Active"

        })

      }
    )

      .then(() => {

        clearData();

        setShowForm(false);

        getProducts();

      });

  };


  // Clear Form
  const clearData = () => {

    setName("");

    setCategory("");

    setPrice("");

    setStock("");

    setEditId(null);

  };


  // Cancel Form
  const cancelForm = () => {

    clearData();

    setShowForm(false);

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Products</h2>

      <p>Manage all products</p>


      {/* Add Product Button */}

      {!showForm && (

        <button
          onClick={() => setShowForm(true)}
          style={addButton}
        >
          + Add Product
        </button>

      )}


      <br />
      <br />


      {/* Product Form */}

      {showForm && (

        <div style={box}>

          <h3>
            {editId ? "Edit Product" : "Add Product"}
          </h3>


          {/* Product Name */}

          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            style={input}
          />


          {/* Category */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            style={input}
          >

            <option value="">
              Select Category
            </option>

            {categories.map(item => (

              <option
                key={item.id}
                value={item.name}
              >
                {item.name}
              </option>

            ))}

          </select>


          {/* Price */}

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            style={input}
          />


          {/* Stock */}

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
            style={input}
          />


          {/* Save / Update */}

          {editId ? (

            <button
              onClick={updateProduct}
              style={button}
            >
              Update Product
            </button>

          ) : (

            <button
              onClick={addProduct}
              style={button}
            >
              Save Product
            </button>

          )}


          {/* Cancel */}

          <button
            onClick={cancelForm}
            style={cancelButton}
          >
            Cancel
          </button>

        </div>

      )}


      <br />


      {/* Product Table */}

      <div style={box}>

        <h3>Product List</h3>


        <table
          border="1"
          width="100%"
          cellPadding="10"
        >

          <thead>

            <tr>

              <th>No</th>

              <th>Product Name</th>

              <th>Category</th>

              <th>Price</th>

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
                  ₹{item.price}
                </td>

                <td>
                  {item.stock}
                </td>

                <td>
                  {item.status}
                </td>

                <td>

                  {/* Edit Button */}

                  <button
                    onClick={() =>
                      editProduct(item)
                    }
                    style={editButton}
                  >
                    Edit
                  </button>


                  {/* Delete Button */}

                  <button
                    onClick={() =>
                      deleteProduct(item.id)
                    }
                    style={deleteButton}
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


/* Box */

const box = {

  background: "white",

  padding: "20px",

  borderRadius: "10px"

};


/* Input */

const input = {

  padding: "10px",

  margin: "5px",

  border: "1px solid #ccc",

  borderRadius: "5px",

  width: "200px"

};


/* Add Product Button */

const addButton = {

  padding: "11px 18px",

  background: "#6d28d9",

  color: "white",

  border: "none",

  borderRadius: "5px",

  cursor: "pointer"

};


/* Save / Update Button */

const button = {

  padding: "10px 15px",

  background: "#6d28d9",

  color: "white",

  border: "none",

  borderRadius: "5px",

  cursor: "pointer",

  margin: "5px"

};


/* Cancel Button */

const cancelButton = {

  padding: "10px 15px",

  background: "#777",

  color: "white",

  border: "none",

  borderRadius: "5px",

  cursor: "pointer",

  margin: "5px"

};


/* Edit Button */

const editButton = {

  padding: "8px 15px",

  background: "#2196F3",

  color: "white",

  border: "none",

  borderRadius: "5px",

  cursor: "pointer",

  marginRight: "10px"

};


/* Delete Button */

const deleteButton = {

  padding: "8px 15px",

  background: "#dc3545",

  color: "white",

  border: "none",

  borderRadius: "5px",

  cursor: "pointer"

};


export default Products;