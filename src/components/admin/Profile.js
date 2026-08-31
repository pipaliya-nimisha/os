import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {

  const [admin, setAdmin] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const [edit, setEdit] = useState(false);

  const loadAdmin = async () => {
    try {

      const res = await axios.get(
        "http://localhost:4000/tbl_admin"
      );

      if (res.data.length > 0) {

        const data = res.data[0];

        setAdmin(data);

        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setCity(data.city);
      }

    } catch (error) {
      console.error("Error loading admin:", error);
    }
  };

  useEffect(() => {
    loadAdmin();
  }, []);

  const saveProfile = async () => {

    try {

      const updatedAdmin = {
        ...admin,
        name: name,
        email: email,
        mobile: mobile,
        city: city
      };

      await axios.put(
        `http://localhost:4000/tbl_admin/${admin.id}`,
        updatedAdmin
      );

      alert("Profile updated successfully!");

      setAdmin(updatedAdmin);

      setEdit(false);

    } catch (error) {

      console.error("Error updating profile:", error);

      alert("Error updating profile!");
    }
  };

  if (!admin) {
    return (
      <div className="text-center mt-5">
        <h5>Loading...</h5>
      </div>
    );
  }

  return (

    <div className="container-fluid p-0">

      <h3
        className="fw-bold mb-4"
        style={{ color: "#0f172a" }}
      >
        Admin Profile
      </h3>

      <hr />

      <div
        className="card border-0 shadow-sm"
        style={{
          maxWidth: "650px",
          borderRadius: "12px",
          backgroundColor: "#ffffff"
        }}
      >

        <div className="card-body p-4">

          {/* Name */}

          <div className="mb-3">

            <label className="fw-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              value={name}
              disabled={!edit}
              onChange={(e) => setName(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1"
              }}
            />

          </div>


          {/* Email */}

          <div className="mb-3">

            <label className="fw-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              value={email}
              disabled={!edit}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1"
              }}
            />

          </div>


          {/* Mobile */}

          <div className="mb-3">

            <label className="fw-semibold mb-2">
              Mobile
            </label>

            <input
              type="text"
              className="form-control"
              value={mobile}
              disabled={!edit}
              onChange={(e) => setMobile(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1"
              }}
            />

          </div>


          {/* City */}

          <div className="mb-4">

            <label className="fw-semibold mb-2">
              City
            </label>

            <input
              type="text"
              className="form-control"
              value={city}
              disabled={!edit}
              onChange={(e) => setCity(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#cbd5e1"
              }}
            />

          </div>


          {/* Buttons */}

          {!edit && (

            <button
              type="button"
              className="btn text-white fw-semibold"
              onClick={() => setEdit(true)}
              style={{
                backgroundColor: "#0d9488",
                borderRadius: "8px",
                padding: "9px 25px"
              }}
            >
              Edit Profile
            </button>

          )}


          {edit && (

            <>

              <button
                type="button"
                className="btn text-white fw-semibold me-2"
                onClick={saveProfile}
                style={{
                  backgroundColor: "#0d9488",
                  borderRadius: "8px",
                  padding: "9px 25px"
                }}
              >
                Save
              </button>

              <button
                type="button"
                className="btn btn-light fw-semibold border"
                onClick={() => {
                  setName(admin.name);
                  setEmail(admin.email);
                  setMobile(admin.mobile);
                  setCity(admin.city);
                  setEdit(false);
                }}
                style={{
                  borderRadius: "8px",
                  padding: "9px 25px"
                }}
              >
                Cancel
              </button>

            </>

          )}

        </div>

      </div>

    </div>
  );
}