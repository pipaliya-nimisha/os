
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CustomerProfile() {
  const navigate = useNavigate();

  const customer = JSON.parse(localStorage.getItem("customer") || "null");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!customer) {
      navigate("/customer-login");
      return;
    }

    const getProfile = async () => {
      const res = await axios.get(
        `http://localhost:4000/tbl_customer/${customer.id}`
      );

      setProfile({
        name: res.data.name || "",
        email: res.data.email || "",
        mobile: res.data.mobile || "",
        address: res.data.address || "",
      });
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `http://localhost:4000/tbl_customer/${customer.id}`
    );

    await axios.put(
      `http://localhost:4000/tbl_customer/${customer.id}`,
      {
        ...res.data,
        name: profile.name,
        email: profile.email,
        mobile: profile.mobile,
        address: profile.address,
      }
    );

    localStorage.setItem(
      "customer",
      JSON.stringify({
        id: customer.id,
        name: profile.name,
        email: profile.email,
      })
    );

    toast.success("Profile Updated Successfully");
    setEdit(false);
    navigate("/");
  };

  if (!customer) {
    return null;
  }

  return (
    <div
      className="container"
      style={{
        minHeight: "85vh",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#f5f7fb",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="bg-white shadow rounded-4 p-4">
            <div className="text-center mb-4">
              <div
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                style={{
                  width: "85px",
                  height: "85px",
                  backgroundColor: "#e8f5f3",
                  fontSize: "38px",
                }}
              >
                👤
              </div>

              <h3
                className="fw-bold mt-3"
                style={{ color: "#0f766e" }}
              >
                My Profile
              </h3>

              <p className="text-muted">
                Manage your personal information
              </p>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={profile.name}
                  onChange={handleChange}
                  readOnly={!edit}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={profile.email}
                  onChange={handleChange}
                  readOnly={!edit}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  value={profile.mobile}
                  onChange={handleChange}
                  readOnly={!edit}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Address
                </label>

                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={profile.address}
                  onChange={handleChange}
                  readOnly={!edit}
                  required
                />
              </div>

              {edit ? (
                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn text-white w-100 fw-semibold"
                    style={{ backgroundColor: "#0f766e" }}
                  >
                    Update Profile
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={() => window.location.reload()}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn text-white w-100 fw-semibold"
                  style={{ backgroundColor: "#0f766e" }}
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
