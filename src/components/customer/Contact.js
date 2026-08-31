
import React from "react";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#f6fbfa",
        minHeight: "100vh",
      }}
    >

      {/* Banner */}
      <div
        style={{
          backgroundColor: "#eef8f7",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#243447",
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            color: "#64748b",
            margin: 0,
          }}
        >
          We are here to help you with your stationery needs
        </p>
      </div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-md-5">
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                height: "100%",
              }}
            >
              <h3
                style={{
                  color: "#243447",
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Get in Touch
              </h3>

              <p style={{ color: "#64748b", lineHeight: "1.6" }}>
                Have any questions or need help? Feel free to contact us.
              </p>

              <div style={{ marginTop: "25px" }}>
                <h5 style={{ color: "#0d9488" }}>📍 Address</h5>
                <p style={{ color: "#64748b" }}>
                  Ahmedabad, Gujarat, India
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#0d9488" }}>📞 Phone</h5>
                <p style={{ color: "#64748b" }}>
                  +91 98765 43210
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#0d9488" }}>✉️ Email</h5>
                <p style={{ color: "#64748b" }}>
                  support@stationery.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  color: "#243447",
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Send Us a Message
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <input
                type="text"
                placeholder="Subject"
                className="form-control mb-3"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="form-control mb-3"
              ></textarea>

              <button
                style={{
                  backgroundColor: "#0d9488",
                  color: "#ffffff",
                  border: "none",
                  padding: "11px 25px",
                  borderRadius: "6px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
