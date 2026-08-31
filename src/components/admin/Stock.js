import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Stock() {
  const [products, setProducts] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editStock, setEditStock] = useState("");

  const stockInputRef = useRef(null);

  const loadData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/tbl_product"
      );

      setProducts(res.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Start Edit Stock
  const startEdit = (id, currentStock) => {
    setEditId(id);
    setEditStock(currentStock);

    setTimeout(() => {
      stockInputRef.current?.focus();
    }, 0);
  };

  // Save Stock
  const saveStock = async (id, product) => {
    if (editStock === "" || Number(editStock) < 0) {
      stockInputRef.current?.focus();
      return;
    }

    try {
      let status = "Available";

      if (Number(editStock) === 0) {
        status = "Out of Stock";
      } else if (Number(editStock) <= 10) {
        status = "Low Stock";
      }

      await axios.put(
        `http://localhost:4000/tbl_product/${id}`,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          stock: editStock,
          status: status
        }
      );

      setEditId(null);
      setEditStock("");

      loadData();

    } catch (error) {
      console.error("Error updating stock:", error);
    }
  };

  // Get Stock Status
  const getStockStatus = (stock) => {
    if (Number(stock) === 0) {
      return {
        text: "Out of Stock",
        color: "#dc2626",
        background: "#fef2f2"
      };
    }

    if (Number(stock) <= 10) {
      return {
        text: "Low Stock",
        color: "#d97706",
        background: "#fffbeb"
      };
    }

    return {
      text: "Available",
      color: "#0f766e",
      background: "#f0fdfa"
    };
  };

  return (
    <div className="container-fluid p-0">

      <h3
        className="fw-bold mb-4" style={{ color: "#0f172a" }}>Manage Stock</h3> <hr />

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
                    width: "8%",
                    padding: "14px 20px"
                  }}
                >
                  #
                </th>

                <th
                  style={{
                    width: "25%",
                    padding: "14px 20px"
                  }}
                >
                  Product Name
                </th>

                <th
                  style={{
                    width: "22%",
                    padding: "14px 20px"
                  }}
                >
                  Category
                </th>

                <th
                  style={{
                    width: "15%",
                    padding: "14px 20px"
                  }}
                >
                  Current Stock
                </th>

                <th
                  style={{
                    width: "15%",
                    padding: "14px 20px"
                  }}
                >
                  Status
                </th>

                <th
                  style={{
                    width: "15%",
                    padding: "14px 20px"
                  }}
                >
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((p, index) => {

                const stockStatus = getStockStatus(p.stock);

                return (

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

                      <span
                        className="fw-medium"
                        style={{
                          color: "#334155"
                        }}
                      >
                        {p.name}
                      </span>

                    </td>

                    <td
                      style={{
                        padding: "14px 20px"
                      }}
                    >

                      <span
                        className="fw-medium"
                        style={{
                          color: "#334155"
                        }}
                      >
                        {p.category}
                      </span>

                    </td>

                    <td
                      style={{
                        padding: "14px 20px"
                      }}
                    >

                      {editId === p.id ? (

                        <input
                          ref={stockInputRef}
                          type="number"
                          className="form-control"
                          value={editStock}
                          onChange={(e) =>
                            setEditStock(e.target.value)
                          }
                          style={{
                            width: "100px",
                            borderRadius: "6px",
                            borderColor: "#0d9488"
                          }}
                        />

                      ) : (

                        <span
                          className="fw-semibold"
                          style={{
                            color: "#334155"
                          }}
                        >
                          {p.stock}
                        </span>

                      )}

                    </td>

                    <td
                      style={{
                        padding: "14px 20px"
                      }}
                    >

                      <span
                        style={{
                          backgroundColor:
                            stockStatus.background,
                          color: stockStatus.color,
                          padding: "6px 10px",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: "600"
                        }}
                      >
                        {stockStatus.text}
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
                              saveStock(p.id, p)
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

                        <button
                          className="btn btn-sm fw-semibold"
                          onClick={() =>
                            startEdit(p.id, p.stock)
                          }
                          style={{
                            backgroundColor: "#ccfbf1",
                            color: "#0f766e",
                            border: "none",
                            borderRadius: "6px"
                          }}
                        >
                          Update Stock
                        </button>

                      )}

                    </td>

                  </tr>

                );

              })}

              {products.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-4 text-muted"
                  >
                    No products found.
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