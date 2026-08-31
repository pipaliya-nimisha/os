import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");

  const nameInputRef = useRef(null);

  // Load Products
  const loadProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/tbl_product"
      );

      setProducts(res.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  // Load Categories
  const loadCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/tbl_category"
      );

      setCategories(res.data);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  // Add Product
  const addProduct = async () => {

    if (
      !name.trim() ||
      !category ||
      !price ||
      stock === ""
    ) {
      alert("Please fill all fields!");
      nameInputRef.current.focus();
      return;
    }

    try {

      await axios.post(
        "http://localhost:4000/tbl_product",
        {
          name,
          category,
          price,
          stock,
          status: "Active"
        }
      );

      alert("Product added successfully!");

      setName("");
      setCategory("");
      setPrice("");
      setStock("");

      loadProducts();

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 0);

    } catch (error) {

      console.error("Error adding product:", error);
      alert("Error adding product!");

    }
  };

  // Delete Product
  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `http://localhost:4000/tbl_product/${id}`
      );

      alert("Product deleted successfully!");

      loadProducts();

    } catch (error) {

      console.error("Error deleting product:", error);
      alert("Error deleting product!");

    }
  };

  // Start Edit
  const startEdit = (
    id,
    currentName,
    currentCategory,
    currentPrice,
    currentStock
  ) => {

    setEditId(id);
    setEditName(currentName);
    setEditCategory(currentCategory);
    setEditPrice(currentPrice);
    setEditStock(currentStock);

  };

  // Save Edit
  const saveEdit = async (id) => {

    if (
      !editName.trim() ||
      !editCategory ||
      !editPrice ||
      editStock === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {

      await axios.put(
        `http://localhost:4000/tbl_product/${id}`,
        {
          id,
          name: editName,
          category: editCategory,
          price: editPrice,
          stock: editStock,
          status: "Active"
        }
      );

      alert("Product updated successfully!");

      setEditId(null);
      setEditName("");
      setEditCategory("");
      setEditPrice("");
      setEditStock("");

      loadProducts();

    } catch (error) {

      console.error("Error updating product:", error);
      alert("Error updating product!");

    }
  };

  return (
    <div className="container-fluid p-0">
      <h3 className="fw-bold mb-4" style={{ color: "#0f172a" }}>Manage Products</h3><hr />

      <div
        className="card border-0 shadow-sm p-4 mb-4"
        style={{
          borderRadius: "12px",
          backgroundColor: "#ffffff"
        }}
      >

        <div className="row g-3 align-items-center">
          <div className="col-md-3">

            <input
              ref={nameInputRef}
              type="text"
              className="form-control py-2 px-3"
              placeholder="Enter product name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            />

          </div>

          <div className="col-md-3">

            <select
              className="form-select py-2 px-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            >

              <option value="">
                Select Category
              </option>

              {categories.map((item) => (

                <option
                  key={item.id}
                  value={item.name}
                >
                  {item.name}
                </option>

              ))}

            </select>

          </div>

          <div className="col-md-2">

            <input
              type="number"
              className="form-control py-2 px-3"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            />

          </div>

          <div className="col-md-2">

            <input
              type="number"
              className="form-control py-2 px-3"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            />

          </div>

          <div className="col-md-2 d-grid">

            <button
              type="button"
              className="btn text-white fw-semibold py-2"
              onClick={addProduct}
              style={{
                backgroundColor: "#0d9488",
                borderRadius: "8px"
              }}
            >
              + Add Product
            </button>

          </div>
        </div>
      </div>

      <div
        className="card border-0 shadow-sm overflow-hidden"
        style={{
          borderRadius: "12px",
          backgroundColor: "#ffffff"
        }}
      >

        <div className="table-responsive">

          <table className="table align-middle mb-0">

            <thead
              style={{
                backgroundColor: "#0f172a",
                color: "#ffffff"
              }}
            >

              <tr>

                <th
                  style={{
                    width: "7%",
                    padding: "14px 20px"
                  }}
                >
                  #
                </th>

                <th
                  style={{
                    width: "20%",
                    padding: "14px 20px"
                  }}
                >
                  Product Name
                </th>

                <th
                  style={{
                    width: "18%",
                    padding: "14px 20px"
                  }}
                >
                  Category
                </th>

                <th
                  style={{
                    width: "12%",
                    padding: "14px 20px"
                  }}
                >
                  Price
                </th>

                <th
                  style={{
                    width: "12%",
                    padding: "14px 20px"
                  }}
                >
                  Stock
                </th>

                <th
                  style={{
                    width: "12%",
                    padding: "14px 20px"
                  }}
                >
                  Status
                </th>

                <th
                  style={{
                    width: "19%",
                    padding: "14px 20px"
                  }}
                >
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((p, index) => (

                <tr
                  key={p.id}
                  style={{
                    borderBottom: "1px solid #f1f5f9"
                  }}
                >

                  <td
                    className="fw-semibold text-secondary"
                    style={{
                      padding: "14px 20px"
                    }}
                  >
                    {index + 1}
                  </td>

                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === p.id ? (

                      <input
                        type="text"
                        className="form-control"
                        value={editName}
                        onChange={(e) =>
                          setEditName(e.target.value)
                        }
                        style={{
                          borderRadius: "6px",
                          borderColor: "#0d9488"
                        }}
                      />

                    ) : (

                      <span
                        className="fw-medium"
                        style={{
                          color: "#334155"
                        }}
                      >
                        {p.name}
                      </span>

                    )}

                  </td>

                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === p.id ? (

                      <select
                        className="form-select"
                        value={editCategory}
                        onChange={(e) =>
                          setEditCategory(e.target.value)
                        }
                        style={{
                          borderRadius: "6px",
                          borderColor: "#0d9488"
                        }}
                      >

                        <option value="">
                          Select Category
                        </option>

                        {categories.map((item) => (

                          <option
                            key={item.id}
                            value={item.name}
                          >
                            {item.name}
                          </option>

                        ))}

                      </select>

                    ) : (

                      <span
                        className="fw-medium"
                        style={{
                          color: "#334155"
                        }}
                      >
                        {p.category}
                      </span>

                    )}

                  </td>

                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === p.id ? (

                      <input
                        type="number"
                        className="form-control"
                        value={editPrice}
                        onChange={(e) =>
                          setEditPrice(e.target.value)
                        }
                        style={{
                          borderRadius: "6px",
                          borderColor: "#0d9488"
                        }}
                      />

                    ) : (

                      <>₹{p.price}</>

                    )}

                  </td>
                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === p.id ? (
                      <input
                        type="number"
                        className="form-control"
                        value={editStock}
                        onChange={(e) =>
                          setEditStock(e.target.value)
                        }
                        style={{
                          borderRadius: "6px",
                          borderColor: "#0d9488"
                        }}
                      />

                    ) : (
                      p.stock
                    )}

                  </td>

                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    <span
                      style={{
                        color: "#0f766e",
                        fontWeight: "600"
                      }}
                    >
                      {p.status}
                    </span>

                  </td>

                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === p.id ? (

                      <>

                        <button
                          className="btn btn-sm text-white fw-semibold me-2"
                          onClick={() =>
                            saveEdit(p.id)
                          }
                          style={{
                            backgroundColor: "#0d9488",
                            borderRadius: "6px"
                          }}
                        >
                          Save
                        </button>

                        <button
                          className="btn btn-sm btn-light fw-semibold text-secondary border"
                          onClick={() => {
                            setEditId(null);
                            setEditName("");
                            setEditCategory("");
                            setEditPrice("");
                            setEditStock("");
                          }}
                          style={{
                            borderRadius: "6px"
                          }}
                        >
                          Cancel
                        </button>

                      </>

                    ) : (

                      <>

                        <button
                          className="btn btn-sm me-2 fw-semibold"
                          onClick={() =>
                            startEdit(
                              p.id,
                              p.name,
                              p.category,
                              p.price,
                              p.stock
                            )
                          }
                          style={{
                            backgroundColor: "#ccfbf1",
                            color: "#0f766e",
                            border: "none",
                            borderRadius: "6px"
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm fw-semibold"
                          onClick={() =>
                            deleteProduct(p.id)
                          }
                          style={{
                            backgroundColor: "#fef2f2",
                            color: "#dc2626",
                            border: "none",
                            borderRadius: "6px"
                          }}
                        >
                          Delete
                        </button>
                      </>

                    )}
                  </td>
                </tr>
              ))}

              {products.length === 0 && (

                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted"> No products found.</td>
                </tr>

              )}

            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}