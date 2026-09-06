import React from "react";

function Contact() {
  return (
    <div style={{ backgroundColor: "#f7fbfa", minHeight: "500px" }}>
      <div className="container py-5">


        <div className="row justify-content-center">
          <div className="col-lg-9">

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">

                <h3
                  className="fw-bold text-center mb-4"
                  style={{ color: "#243447" }}
                >
                  Get In Touch
                </h3>

                <div className="row g-4">

                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 border rounded">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e8f5f3",
                          fontSize: "22px"
                        }}
                      >
                        📍
                      </div>

                      <div>
                        <h6 className="fw-bold mb-1">
                          Address
                        </h6>
                        <p className="text-muted mb-0">
                          Surat, Gujarat, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 border rounded">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e8f5f3",
                          fontSize: "22px"
                        }}
                      >
                        📞
                      </div>

                      <div>
                        <h6 className="fw-bold mb-1">
                          Phone
                        </h6>
                        <p className="text-muted mb-0">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 border rounded">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e8f5f3",
                          fontSize: "22px"
                        }}
                      >
                        ✉️
                      </div>

                      <div>
                        <h6 className="fw-bold mb-1">
                          Email
                        </h6>
                        <p className="text-muted mb-0">
                          info@stationery.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 border rounded">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e8f5f3",
                          fontSize: "22px"
                        }}
                      >
                        🕐
                      </div>

                      <div>
                        <h6 className="fw-bold mb-1">
                          Business Hours
                        </h6>
                        <p className="text-muted mb-0">
                          Monday - Saturday
                          <br />
                          9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;