import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#134e4a",
        color: "white",
        marginTop: "50px",
      }}
    >
      <div className="container py-4">

        <div className="row">

          {/* About */}
          <div className="col-md-4">
            <h4
              className="fw-bold"
              style={{ color: "#0d9488" }}
            >
              Stationery Store
            </h4>

            <p>
              Your one-stop online store for quality
              stationery products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <p className="mb-2">Home</p>
            <p className="mb-2">Products</p>
            <p className="mb-2">Categories</p>
            <p className="mb-2">Contact Us</p>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p className="mb-2">
              📧 stationery@gmail.com
            </p>

            <p className="mb-2">
              📞 +91 98765 43210
            </p>

            <p className="mb-2">
              📍 Gujarat, India
            </p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2026 Stationery Store. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;