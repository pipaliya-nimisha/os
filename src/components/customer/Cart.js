import React from "react";

function Cart() {
  return (
    <div style={{ padding: "40px" }}>

      <h2 style={{ textAlign: "center", color: "#0f766e" }}>
        My Cart
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "30px auto",
          border: "1px solid #cbd5e1",
          padding: "20px"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            borderBottom: "1px solid #cbd5e1"
          }}
        >
          <div>
            <h4>Ball Pen</h4>
            <p>Price: ₹10</p>
          </div>

          <div>
            <p>Quantity: 2</p>
            <p>Total: ₹20</p>
          </div>

          <button
            style={{
              background: "#dc3545",
              color: "white",
              border: "none",
              padding: "7px 12px",
              borderRadius: "5px"
            }}
          >
            Remove
          </button>
        </div>


        <div
          style={{
            textAlign: "right",
            marginTop: "20px"
          }}
        >
          <h3 style={{ color: "#334155" }}>
            Grand Total: ₹20
          </h3>

          <button
            style={{
              background: "#0f766e",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px"
            }}
          >
            Place Order
          </button>
        </div>

      </div>

    </div>
  );
}

export default Cart;