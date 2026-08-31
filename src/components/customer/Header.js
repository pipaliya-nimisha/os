import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-white border-bottom">
        <div className="container py-3">
          <div className="row align-items-center">

            {/* Logo */}
            <div className="col-md-3">
              <Link to="/">
                <img
                  src="/image/logo.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{
                    height: "65px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>

            {/* Search */}
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                />

                <button
                  className="btn text-white px-4"
                  style={{
                    backgroundColor: "#0f766e",
                  }}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Account & Cart */}
            <div className="col-md-3">
              <div className="d-flex justify-content-end gap-3">

                <div className="text-center">
                  <Link
                    to="/login"
                    className="text-decoration-none"
                  >
                    <button
                      className="btn rounded-circle"
                      style={{
                        backgroundColor: "#e8f5f3",
                        color: "#0f766e",
                      }}
                    >
                      👤
                    </button>

                    <small
                      className="d-block fw-semibold"
                      style={{ color: "#0f766e" }}
                    >
                      Account
                    </small>
                  </Link>
                </div>

                <div className="text-center">
                  <Link
                    to="/cart"
                    className="text-decoration-none"
                  >
                    <button
                      className="btn rounded-circle"
                      style={{
                        backgroundColor: "#e8f5f3",
                        color: "#0f766e",
                      }}
                    >
                      🛒
                    </button>

                    <small
                      className="d-block fw-semibold"
                      style={{ color: "#0f766e" }}
                    >
                      Cart
                    </small>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar navbar-expand bg-white border-bottom">
        <div className="container">
          <div className="navbar-nav mx-auto gap-2">

            <Link
              to="/"
              className="nav-link fw-semibold px-4 rounded"
              style={{
                color: "#ffffff",
                backgroundColor: "#0f766e",
              }}
            >
              Home
            </Link>

            <Link
              to="/product"
              className="nav-link fw-semibold px-4"
              style={{ color: "#0f766e" }}
            >
              Product
            </Link>

            <Link
              to="/category"
              className="nav-link fw-semibold px-4"
              style={{ color: "#0f766e" }}
            >
              Categories
            </Link>

            <Link
              to="/contact"
              className="nav-link fw-semibold px-4"
              style={{ color: "#0f766e" }}
            >
              Contact
            </Link>

            <Link
              to="/feedback"
              className="nav-link fw-semibold px-4"
              style={{ color: "#0f766e" }}
            >
              Feedback
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;