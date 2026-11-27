import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function CategoryCRUD() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState("");
  const nameInputRef = useRef(null);

  const loadData = async () => {
    const res = await axios.get("http://localhost:4000/tbl_category");
    setCategories(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addCategory = async () => {
    if (!name.trim()) {
      nameInputRef.current.focus();
      return;
    }

    if (!image) {
      alert("Please select an image!");
      return;
    }

    await axios.post("http://localhost:4000/tbl_category", {
      name: name,
      description: description,
      image: "/image/" + image
    });

    alert("Category added successfully!");
    setName("");
    setDescription("");
    setImage("");
    loadData();

    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 0);
  };

  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) {
      return;
    }

    await axios.delete(`http://localhost:4000/tbl_category/${id}`);
    alert("Category deleted successfully!");
    loadData();
  };

  const startEdit = (id, currentName, currentDescription, currentImage) => {
    setEditId(id);
    setEditName(currentName);
    setEditDescription(currentDescription);
    setEditImage(currentImage || "");
  };

  const saveEdit = async (id) => {
    if (!editName.trim()) {
      alert("Category name is required!");
      return;
    }

    await axios.put(`http://localhost:4000/tbl_category/${id}`, {
      id: id,
      name: editName,
      description: editDescription,
      image: editImage
    });

    alert("Category updated successfully!");
    setEditId(null);
    setEditName("");
    setEditDescription("");
    setEditImage("");
    loadData();
  };

  return (
    <div className="container-fluid p-0">
      <h3 className="fw-bold mb-4" style={{ color: "#0f172a" }}>
        Manage Categories
      </h3>

      <hr />

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
              placeholder="Enter category name..."
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
            <input
              type="text"
              className="form-control py-2 px-3"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1",
                fontSize: "14px"
              }}
            />
          </div>

          <div className="col-md-4">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setImage(e.target.files[0].name);
                }
              }}
            />
          </div>

          <div className="col-md-2 d-grid">
            <button
              type="button"
              className="btn text-white fw-semibold py-2"
              onClick={addCategory}
              style={{
                backgroundColor: "#0d9488",
                borderRadius: "8px"
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
                <th style={{ padding: "14px 20px" }}>#</th>
                <th style={{ padding: "14px 20px" }}>Category Name</th>
                <th style={{ padding: "14px 20px" }}>Description</th>
                <th style={{ padding: "14px 20px" }}>Image</th>
                <th style={{ padding: "14px 20px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((c, index) => (
                <tr key={c.id}>
                  <td style={{ padding: "14px 20px" }}>{index + 1}</td>

                  <td style={{ padding: "14px 20px" }}>
                    {editId === c.id ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      c.name
                    )}
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    {editId === c.id ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                      />
                    ) : (
                      c.description
                    )}
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    {editId === c.id ? (
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={(e) => {
                          if (e.target.files.length > 0) {
                            setEditImage(
                              "/image/" + e.target.files[0].name
                            );
                          }
                        }}
                      />
                    ) : (
                      <img
                        src={c.image}
                        alt={c.name}
                        style={{
                          width: "55px",
                          height: "55px",
                          objectFit: "contain"
                        }}
                      />
                    )}
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    {editId === c.id ? (
                      <>
                        <button
                          className="btn btn-sm text-white fw-semibold me-2"
                          onClick={() => saveEdit(c.id)}
                          style={{
                            backgroundColor: "#0d9488",
                            borderRadius: "6px"
                          }}
                        >
                          Save
                        </button>

                        <button
                          className="btn btn-sm btn-light fw-semibold border"
                          onClick={() => {
                            setEditId(null);
                            setEditName("");
                            setEditDescription("");
                            setEditImage("");
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
                              c.description,
                              c.image
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
                          onClick={() => deleteCategory(c.id)}
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
                    colSpan="5"
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