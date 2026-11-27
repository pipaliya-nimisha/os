
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const navigate = useNavigate();

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
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  const placeOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const customer = JSON.parse(
      localStorage.getItem("customer") || "null"
    );

    if (!customer) {
      toast.error("Please login first");
      return;
    }

    setPlacingOrder(true);

    try {
      const products = [];

      for (const item of cart) {
        const res = await axios.get(
          `http://localhost:4000/tbl_product/${item.productId}`
        );

        const product = res.data;
        const availableStock = Number(product.stock);
        const requiredQuantity = Number(item.quantity);

        if (
          !Number.isFinite(requiredQuantity) ||
          requiredQuantity <= 0 ||
          !Number.isFinite(availableStock) ||
          availableStock < requiredQuantity
        ) {
          toast.error(
            `${item.productName} has only ${product.stock || 0} items in stock`
          );
          return;
        }

        products.push({
          id: product.id,
          stock: availableStock,
          quantity: requiredQuantity
        });
      }

      const orderRes = await axios.post(
        "http://localhost:4000/tbl_order",
        {
          customerId: customer.id,
          customerName: customer.name,
          date: new Date().toLocaleDateString("en-IN"),
          amount: total,
          status: "Pending",
          payment: "Cash on Delivery"
        }
      );

      const orderId = orderRes.data.id;

      for (const item of cart) {
        await axios.post(
          "http://localhost:4000/tbl_order_details",
          {
            orderId: orderId,
            productId: item.productId,
            productName: item.productName,
            price: Number(item.price),
            quantity: Number(item.quantity),
            subtotal: Number(item.price) * Number(item.quantity)
          }
        );
      }

      for (const product of products) {
        const newStock = product.stock - product.quantity;

        const status =
          newStock === 0
            ? "Out of Stock"
            : newStock <= 10
            ? "Low Stock"
            : "Available";

        await axios.patch(
          `http://localhost:4000/tbl_product/${product.id}`,
          {
            stock: newStock,
            status: status
          }
        );
      }

      for (const item of cart) {
        await axios.delete(
          `http://localhost:4000/tbl_cart/${item.id}`
        );
      }

      setOrderSuccess({
        orderId: orderId,
        customerName: customer.name,
        amount: total,
        payment: "Cash on Delivery"
      });

      setCart([]);
      toast.success("Order placed successfully!");

    } catch (error) {
      toast.error("Unable to place order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        backgroundColor: "#f8fafa",
        minHeight: "500px"
      }}
    >
      <div className="container">

        {orderSuccess ? (
          <div
            className="mx-auto text-center p-4 p-md-5"
            style={{
              maxWidth: "600px",
              backgroundColor: "#ffffff",
              border: "1px solid #ddd",
              borderRadius: "12px",
              marginTop: "30px"
            }}
          >
            <div
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                backgroundColor: "#d1fae5",
                color: "#0f766e",
                fontSize: "38px",
                margin: "0 auto 20px"
              }}
            >
              ✓
            </div>

            <h2 style={{ color: "#0f766e", fontWeight: "bold" }}>
              Order Placed Successfully!
            </h2>

            <p style={{ color: "#53677b" }}>
              Thank you for shopping with us.
            </p>

            <hr />

            <div className="text-start mt-4">
              <div className="d-flex justify-content-between mb-3">
                <strong>Order ID</strong>
                <span>{orderSuccess.orderId}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <strong>Customer Name</strong>
                <span>{orderSuccess.customerName}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <strong>Total Amount</strong>
                <strong style={{ color: "#0f766e" }}>
                  ₹{orderSuccess.amount}
                </strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <strong>Payment Method</strong>
                <span>{orderSuccess.payment}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <strong>Order Status</strong>
                <span style={{ color: "#d97706" }}>
                  Pending
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/product")}
              style={{
                width: "100%",
                backgroundColor: "#0f766e",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "6px",
                fontWeight: "bold",
                marginTop: "20px",
                cursor: "pointer"
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
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
                <h4 style={{ color: "#53677b" }}>
                  Your cart is empty
                </h4>

                <button
                  onClick={() => navigate("/product")}
                  style={{
                    backgroundColor: "#0f766e",
                    color: "white",
                    border: "none",
                    padding: "10px 22px",
                    borderRadius: "6px",
                    marginTop: "15px",
                    cursor: "pointer"
                  }}
                >
                  Continue Shopping
                </button>
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
                        <h5
                          style={{
                            color: "#08756f",
                            marginBottom: "8px"
                          }}
                        >
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
                          ₹{Number(item.price) * Number(item.quantity)}
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
                    <h4
                      style={{
                        color: "#243447",
                        fontWeight: "bold"
                      }}
                    >
                      Cart Summary
                    </h4>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <span>Total Items</span>
                      <span>{totalItems}</span>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                      <strong>Total Amount</strong>

                      <strong style={{ color: "#0d9488" }}>
                        ₹{total}
                      </strong>
                    </div>

                    <div className="mt-3">
                      <p
                        style={{
                          color: "#53677b",
                          marginBottom: "12px"
                        }}
                      >
                        Payment Method: Cash on Delivery
                      </p>

                      <button
                        onClick={placeOrder}
                        disabled={placingOrder}
                        style={{
                          width: "100%",
                          backgroundColor: "#0f766e",
                          color: "white",
                          border: "none",
                          padding: "12px",
                          borderRadius: "6px",
                          fontWeight: "bold",
                          cursor: placingOrder ? "not-allowed" : "pointer"
                        }}
                      >
                        {placingOrder
                          ? "Placing Order..."
                          : "Place Order"}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;
