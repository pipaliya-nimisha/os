import React, { useEffect, useState } from "react";

function Category() {

  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);

  // Form Show / Hide
  const [showForm, setShowForm] = useState(false);


  const getData = () => {

    fetch("http://localhost:4000/tbl_category")

      .then(res => res.json())

      .then(data => {
        setCategories(data);
      });

  };


  useEffect(() => {

    getData();

  }, []);


  // Add Category
  const addCategory = () => {

    if (name === "" || description === "") {

      alert("Please enter all details");

      return;
    }


    fetch("http://localhost:4000/tbl_category", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        name: name,
        description: description,
        status: "Active"

      })

    })

      .then(() => {

        setName("");
        setDescription("");

        setShowForm(false);

        getData();

      });

  };


  // Delete Category
  const deleteCategory = (id) => {

    fetch(
      "http://localhost:4000/tbl_category/" + id,
      {
        method: "DELETE"
      }
    )

      .then(() => {

        getData();

      });

  };


  // Edit Category
  const editCategory = (item) => {

    setEditId(item.id);

    setName(item.name);

    setDescription(item.description);

    setShowForm(true);

  };


  // Update Category
  const updateCategory = () => {

    fetch(
      "http://localhost:4000/tbl_category/" + editId,
      {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          id: editId,

          name: name,

          description: description,

          status: "Active"

        })

      }

    )

      .then(() => {

        setEditId(null);

        setName("");

        setDescription("");

        setShowForm(false);

        getData();

      });

  };


  // Cancel Button
  const cancelForm = () => {

    setName("");

    setDescription("");

    setEditId(null);

    setShowForm(false);

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Category</h2>

      <p>Manage all categories</p>


      {/* Add Category Button */}

      {!showForm && (

        <button
          onClick={() => setShowForm(true)}
          style={addButton}
        >
          + Add Category
        </button>

      )}


      <br />
      <br />


      {/* Category Form */}

      {showForm && (

        <div style={box}>

          <h3>
            {editId ? "Edit Category" : "Add Category"}
          </h3>


          <input
            placeholder="Category Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            style={input}
          />


          <input
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            style={input}
          />


          {editId ? (

            <button
              onClick={updateCategory}
              style={button}
            >
              Update Category
            </button>

          ) : (

            <button
              onClick={addCategory}
              style={button}
            >
              Save Category
            </button>

          )}


          <button
            onClick={cancelForm}
            style={cancelButton}
          >
            Cancel
          </button>

        </div>

      )}


      <br />


      {/* Category Table */}

      <div style={box}>

        <h3>Category List</h3>


        <table
          border="1"
          width="100%"
          cellPadding="10"
        >

          <thead>

            <tr>

              <th>No</th>

              <th>Category Name</th>

              <th>Description</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {categories.map((item, index) => (

              <tr key={item.id}>

                <td>
                  {index + 1}
                </td>

                <td>
                  {item.name}
                </td>

                <td>
                  {item.description}
                </td>

                <td>
                  {item.status}
                </td>

                <td>

                  {/* Edit Button */}

                  <button
                    onClick={() =>
                      editCategory(item)
                    }
                    style={editButton}
                  >
                    Edit
                  </button>


                  {/* Delete Button */}

                  <button
                    onClick={() =>
                      deleteCategory(item.id)
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

  width: "250px"

};


/* Add Category Button */

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


export default Category;