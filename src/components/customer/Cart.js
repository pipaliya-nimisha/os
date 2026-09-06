import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const res = await axios.get("http://localhost:4000/tbl_cart");
    setCart(res.data);
  };

  const removeFromCart = async (id) => {
    await axios.delete(`http://localhost:4000/tbl_cart/${id}`);
    toast.success("Product removed from cart");
    getCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f8fafa", minHeight: "500px" }}>
      <div className="container">

        <div className="text-center mb-4">
          <p style={{ color: "#0d9488", fontWeight: "bold" }}>
            YOUR SHOPPING CART
          </p>
          <h2 style={{ color: "#243447", fontWeight: "bold" }}>
            My Cart
          </h2>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h4 style={{ color: "#53677b" }}>Your cart is empty</h4>
          </div>
        ) : (
          <div className="row">

            <div className="col-lg-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center justify-content-between mb-3 p-3"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                  }}
                >
                  <div>
                    <h5 style={{ color: "#08756f", marginBottom: "8px" }}>
                      {item.productName}
                    </h5>

                    <p style={{ margin: 0, color: "#53677b" }}>
                      Price: ₹{item.price}
                    </p>

                    <p style={{ margin: 0, color: "#53677b" }}>
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <div className="text-end">
                    <h5 style={{ color: "#243447" }}>
                      ₹{item.price * item.quantity}
                    </h5>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: "#e76f51",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "5px",
                        cursor: "pointer"
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div
                className="p-4"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #ddd",
                  borderRadius: "8px"
                }}
              >
                <h4 style={{ color: "#243447", fontWeight: "bold" }}>
                  Cart Summary
                </h4>

                <hr />

                <div className="d-flex justify-content-between">
                  <span>Total Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <strong>Total Amount</strong>
                  <strong style={{ color: "#0d9488" }}>
                    ₹{total}
                  </strong>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;