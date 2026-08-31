import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function CategoryCRUD() {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const nameInputRef = useRef(null);

  const loadData = async () => {
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
    loadData();
  }, []);
  const addCategory = async () => {
    if (!name.trim()) {
      nameInputRef.current.focus();
      return;
    }

    try {
      await axios.post(
        "http://localhost:4000/tbl_category",
        {
          name,
          description
        }
      );

      alert("Category added successfully!");

      setName("");
      setDescription("");

      loadData();

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 0);

    } catch (error) {
      console.error("Error adding category:", error);
      alert("Error adding category!");
    }
  };
  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:4000/tbl_category/${id}`
      );

      alert("Category deleted successfully!");

      loadData();

    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Error deleting category!");
    }
  };
  const startEdit = (
    id,
    currentName,
    currentDescription
  ) => {
    setEditId(id);
    setEditName(currentName);
    setEditDescription(currentDescription);
  };

  const saveEdit = async (id) => {
    if (!editName.trim()) {
      alert("Category name is required!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:4000/tbl_category/${id}`,
        {
          id,
          name: editName,
          description: editDescription
        }
      );

      alert("Category updated successfully!");

      setEditId(null);
      setEditName("");
      setEditDescription("");

      loadData();

    } catch (error) {
      console.error("Error updating category:", error);
      alert("Error updating category!");
    }
  };

  return (
    <div className="container-fluid p-0">

      <h3 className="fw-bold mb-4"style={{ color: "#0f172a" }}>Manage Categories</h3>
      <hr />
      <div
        className="card border-0 shadow-sm p-4 mb-4"
        style={{
          borderRadius: "12px",
          backgroundColor: "#ffffff"
        }}
      >

        <div className="row g-3 align-items-center">
          <div className="col-md-5">

            <input
              ref={nameInputRef}
              type="text"
              className="form-control py-2 px-3"
              placeholder="Enter new category name..."
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            />

          </div>

          <div className="col-md-4">

            <input
              type="text"
              className="form-control py-2 px-3"
              placeholder="Enter description..."
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            />

          </div>

          <div className="col-md-3 d-grid">

            <button
              type="button"
              className="btn text-white fw-semibold py-2"
              onClick={addCategory}
              style={{
                backgroundColor: "#0d9488",
                borderRadius: "8px",
                boxShadow:
                  "0 2px 6px rgba(13, 148, 136, 0.2)"
              }}
            >
              + Add Category
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
                    width: "10%",
                    padding: "14px 20px"
                  }}
                >
                  #
                </th>

                <th
                  style={{
                    width: "35%",
                    padding: "14px 20px"
                  }}
                >
                  Category Name
                </th>

                <th
                  style={{
                    width: "30%",
                    padding: "14px 20px"
                  }}
                >
                  Description
                </th>

                <th
                  style={{
                    width: "25%",
                    padding: "14px 20px"
                  }}
                >
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {categories.map((c, index) => (

                <tr
                  key={c.id}
                  style={{
                    borderBottom:
                      "1px solid #f1f5f9"
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

                    {editId === c.id ? (

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
                        {c.name}
                      </span>

                    )}

                  </td>

                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === c.id ? (

                      <input
                        type="text"
                        className="form-control"
                        value={editDescription}
                        onChange={(e) =>
                          setEditDescription(
                            e.target.value
                          )
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
                        {c.description}
                      </span>

                    )}

                  </td>
                  <td
                    style={{
                      padding: "14px 20px"
                    }}
                  >

                    {editId === c.id ? (

                      <>

                        <button
                          className="btn btn-sm text-white fw-semibold me-2"
                          onClick={() =>
                            saveEdit(c.id)
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
                            setEditDescription("");
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
                              c.id,
                              c.name,
                              c.description
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

                        {/* Delete */}

                        <button
                          className="btn btn-sm fw-semibold"
                          onClick={() =>
                            deleteCategory(c.id)
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

              {categories.length === 0 && (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center py-4 text-muted"
                  >
                    No categories found.
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