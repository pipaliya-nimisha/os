import React from "react";

function Feedback() {
    return (
        <div
            className="container-fluid"
            style={{
                backgroundColor: "#f5faf9",
                padding: "50px 20px",
            }}
        >
            <div
                className="card mx-auto"
                style={{
                    maxWidth: "500px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "30px",
                }}
            >
                <h2
                    className="text-center"
                    style={{
                        color: "#243447",
                        marginBottom: "8px",
                    }}
                >
                    Feedback
                </h2>

                <p
                    className="text-center"
                    style={{
                        color: "#777",
                        marginBottom: "25px",
                    }}
                >
                    We value your feedback
                </p>

                <div className="mb-3">
                    <label style={{ color: "#243447", fontWeight: "500" }}>Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                    <label style={{ color: "#243447", fontWeight: "500" }}>Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                    <label className="form-label" style={{ color: "#243447", fontWeight: "500" }}>Feedback</label>

                    <textarea className="form-control" rows="4" placeholder="Write your feedback..."></textarea>
                </div>

                <button
                    className="btn w-100"
                    style={{
                        backgroundColor: "#0d9488",
                        color: "white",
                        padding: "10px",
                        borderRadius: "6px",
                        fontWeight: "500",
                    }}
                >Submit Feedback </button>
            </div>
        </div>
    );
}

export default Feedback;