import React, { useEffect, useState } from "react";

function Profile() {

  const [admin, setAdmin] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");


  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("admin")
    );


    if (data) {

      setAdmin(data);

      setName(data.name);
      setEmail(data.email);
      setMobile(data.mobile);

    }

  }, []);


  const updateProfile = () => {

    fetch(
      "http://localhost:4000/tbl_admin/" +
      admin.id,
      {

        method: "PUT",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          id: admin.id,
          name: name,
          email: email,
          password: admin.password,
          mobile: mobile

        })

      }
    )

      .then(() => {

        const newData = {

          id: admin.id,
          name: name,
          email: email,
          password: admin.password,
          mobile: mobile

        };


        localStorage.setItem(
          "admin",
          JSON.stringify(newData)
        );


        setAdmin(newData);

        alert("Profile Updated");

      });

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Profile</h2>

      <p>Manage your profile</p>


      <div style={box}>

        <div
          style={{
            textAlign: "center",
            fontSize: "60px"
          }}
        >
          👨‍💼
        </div>


        <label>Name</label>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={input}
        />


        <label>Email</label>

        <input
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={input}
        />


        <label>Mobile</label>

        <input
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
          style={input}
        />


        <button
          onClick={updateProfile}
          style={button}
        >
          Update Profile
        </button>

      </div>

    </div>
  );
}


const box = {
  background: "white",
  padding: "25px",
  width: "450px",
  borderRadius: "10px"
};


const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 15px",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "5px"
};


const button = {
  width: "100%",
  padding: "11px",
  background: "#6d28d9",
  color: "white",
  border: "none",
  borderRadius: "5px"
};


export default Profile;