import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#134e4a",
        color: "white",
        marginTop: "50px",
      }}
    >
      <div className="container py-5">

        <div className="row g-4">

          <div className="col-md-4">
            <h4
              className="fw-bold mb-3"
              style={{ color: "#0d9488" }}
            >
              Stationery Store
            </h4>

            <p className="text-light mb-0">
              Your one-stop online store for quality
              stationery products at the best prices.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <div className="d-flex flex-column gap-2">

              <NavLink
                to="/"
                className="text-light text-decoration-none"
              >
                Home
              </NavLink>

              <NavLink
                to="/product"
                className="text-light text-decoration-none"
              >
                Products
              </NavLink>

              <NavLink
                to="/category"
                className="text-light text-decoration-none"
              >
                Categories
              </NavLink>

              <NavLink
                to="/feedback"
                className="text-light text-decoration-none"
              >
                Feedback
              </NavLink>

              <NavLink
                to="/cart"
                className="text-light text-decoration-none"
              >
                Cart
              </NavLink>

            </div>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              Contact Information
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

        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0 text-light">
            © 2026 <strong>Stationery Store</strong>.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;