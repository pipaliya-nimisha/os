import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:4000/tbl_feedback");
    setFeedbacks(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteFeedback = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );

    if (!confirmDelete) {
      return;
    }

    await axios.delete(`http://localhost:4000/tbl_feedback/${id}`);

    alert("Feedback deleted successfully!");

    loadData();
  };

  return (
    <div className="container-fluid p-0">
      <h3
        className="fw-bold mb-4"
        style={{ color: "#0f172a" }}
      >
        Manage Feedback
      </h3>

      <hr />

      <div
        className="card border-0 shadow-sm overflow-hidden"
        style={{
          borderRadius: "12px",
          backgroundColor: "#ffffff"
        }}
      >
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead
              style={{
                backgroundColor: "#0f172a",
                color: "#ffffff"
              }}
            >
              <tr>
                <th
                  style={{
                    width: "7%",
                    padding: "14px 20px"
                  }}
                >
                  #
                </th>
                <th
                  style={{
                    width: "20%",
                    padding: "14px 20px"
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    width: "25%",
                    padding: "14px 20px"
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    width: "33%",
                    padding: "14px 20px"
                  }}
                >
                  Feedback
                </th>
                <th
                  style={{
                    width: "15%",
                    padding: "14px 20px"
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {feedbacks.map((f, index) => (
                <tr
                  key={f.id}
                  style={{
                    borderBottom: "1px solid #f1f5f9"
                  }}
                >
                  <td
                    className="fw-semibold text-secondary"
                    style={{
                      padding: "14px 20px"
                    }}
                  >
                    {index + 1}
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    <span
                      className="fw-medium"
                      style={{
                        color: "#334155"
                      }}
                    >
                      {f.name}
                    </span>
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    {f.email}
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    {f.feedback}
                  </td>

                  <td style={{ padding: "14px 20px" }}>
                    <button
                      className="btn btn-sm fw-semibold"
                      onClick={() => deleteFeedback(f.id)}
                      style={{
                        backgroundColor: "#fef2f2",
                        color: "#dc2626",
                        border: "none",
                        borderRadius: "6px"
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {feedbacks.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 text-muted"
                  >
                    No feedback found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}