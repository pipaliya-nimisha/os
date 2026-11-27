
import React, { useEffect, useState } from "react";

function Profile({ adminName, setAdminName }) {

  const [admin, setAdmin] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const getData = async () => {

    const loginAdmin = JSON.parse(
      localStorage.getItem("admin") || "null"
    );

    if (!loginAdmin) return;

    const res = await fetch(
      "http://localhost:4000/tbl_admin"
    );

    const data = await res.json();

    const currentAdmin = data.find(
      (item) => String(item.id) === String(loginAdmin.id)
    );

    if (currentAdmin) {

      setAdmin(currentAdmin);
      setName(currentAdmin.name);
      setEmail(currentAdmin.email);
      setMobile(currentAdmin.mobile || "");
      setCity(currentAdmin.city || "");

    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateProfile = async () => {

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (!mobile.trim()) {
      alert("Mobile is required");
      return;
    }

    if (!city.trim()) {
      alert("City is required");
      return;
    }

    if (!admin) return;

    const res = await fetch(
      "http://localhost:4000/tbl_admin/" + admin.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          mobile: mobile.trim(),
          city: city.trim()
        })
      }
    );

    if (res.ok) {

      const updatedAdmin = await res.json();

      localStorage.setItem(
        "admin",
        JSON.stringify({
          id: updatedAdmin.id,
          name: updatedAdmin.name,
          email: updatedAdmin.email
        })
      );

      setAdmin(updatedAdmin);
      setAdminName(updatedAdmin.name);

      alert("Profile updated successfully!");

    } else {
      alert("Profile update failed!");
    }
  };

  return (
    <div style={{ padding: "25px" }}>

      <h2>My Profile</h2>

      <p>View and update your profile</p>

      <hr />

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          maxWidth: "600px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}
      >

        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button
          onClick={updateProfile}
          className="btn text-white"
          style={{
            backgroundColor: "#0d9488"
          }}
        >
          Update Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;
