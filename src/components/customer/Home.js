import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Home({ setSelectedCategory }) {
  const navigate = useNavigate();

  const addToCart = async (product) => {
  const res = await axios.get(
    `http://localhost:4000/tbl_cart?productId=${product.id}`
  );

  if (res.data.length > 0) {
    const cartItem = res.data[0];

    await axios.patch(
      `http://localhost:4000/tbl_cart/${cartItem.id}`,
      {
        quantity: cartItem.quantity + 1,
      }
    );

    toast.success("Quantity increased");
  } else {
    await axios.post("http://localhost:4000/tbl_cart", {
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1,
    });

    toast.success(product.name + " added to cart");
  }
};

  return (
    <>
      <section
        style={{
          position: "relative",
          backgroundColor: "#eef8f7",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            width: "65%",
            height: "100%",
            backgroundImage: "url('/image/banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "60%",
            height: "100%",
            background:
              "linear-gradient(to right, #eef8f7 65%, rgba(238,248,247,0.85) 82%, rgba(238,248,247,0) 100%)",
          }}
        ></div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="row align-items-center"
            style={{
              minHeight: "450px",
            }}
          >
            <div className="col-lg-7 col-md-7">
              <p
                className="fw-bold mb-2"
                style={{
                  color: "#2a9d8f",
                  fontSize: "17px",
                }}
              >
                BEST STATIONERY COLLECTIONS
              </p>

              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#243447",
                  fontSize: "52px",
                  margin: 0,
                }}
              >
                Buy Stationery
                <br />
                Online
              </h1>

              <h3
                className="fw-bold mb-1"
                style={{
                  color: "#243447",
                  fontSize: "26px",
                }}
              >
                SALE UP TO <span style={{ color: "#e76f51" }}>90% OFF</span>
              </h3>

              <p
                className="mb-4"
                style={{
                  color: "#243447",
                  fontSize: "17px",
                }}
              >
                Get Best Cost and Quick Shipment
              </p>

              <button
                className="btn text-white fw-semibold px-4 py-2"
                onClick={() => {
                  setSelectedCategory("");
                  navigate("/product");
                }}
                style={{
                  backgroundColor: "#2a9d8f",
                  border: "none",
                  borderRadius: "7px",
                  fontSize: "16px",
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "50px 0",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <p
              style={{
                color: "#0d9488",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              SHOP BY CATEGORY
            </p>

            <h2
              style={{
                color: "#243447",
                fontWeight: "bold",
                fontSize: "32px",
              }}
            >
              Explore Our Categories
            </h2>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div
                className="card text-center border-0 shadow-sm p-3"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="/image/pen.jpg"
                  alt="Pens"
                  className="img-fluid"
                  style={{
                    height: "140px",
                    objectFit: "contain",
                  }}
                />

                <h4
                  className="fw-bold mt-2"
                  style={{ color: "#243447" }}
                >
                  Pens
                </h4>

                <p className="text-secondary">Smooth writing pens</p>

                <button
                  className="btn text-white"
                  onClick={() => {
                    setSelectedCategory("Pens");
                    navigate("/product");
                  }}
                  style={{
                    backgroundColor: "#0d9488",
                    borderRadius: "6px",
                  }}
                >
                  View Products
                </button>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card text-center border-0 shadow-sm p-3"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="/image/markers.jpg"
                  alt="Markers"
                  className="img-fluid"
                  style={{
                    height: "140px",
                    objectFit: "contain",
                  }}
                />

                <h4
                  className="fw-bold mt-2"
                  style={{ color: "#243447" }}
                >
                  Markers
                </h4>

                <p className="text-secondary">Bright & long lasting</p>

                <button
                  className="btn text-white"
                  onClick={() => {
                    setSelectedCategory("Markers");
                    navigate("/product");
                  }}
                  style={{
                    backgroundColor: "#0d9488",
                    borderRadius: "6px",
                  }}
                >
                  View Products
                </button>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card text-center border-0 shadow-sm p-3"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="/image/pencil.jpg"
                  alt="Pencil"
                  className="img-fluid"
                  style={{
                    height: "140px",
                    objectFit: "contain",
                  }}
                />

                <h4
                  className="fw-bold mt-2"
                  style={{ color: "#243447" }}
                >
                  Pencil
                </h4>

                <p className="text-secondary">Smooth writing pencils</p>

                <button
                  className="btn text-white"
                  onClick={() => {
                    setSelectedCategory("Pencil");
                    navigate("/product");
                  }}
                  style={{
                    backgroundColor: "#0d9488",
                    borderRadius: "6px",
                  }}
                >
                  View Products
                </button>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card text-center border-0 shadow-sm p-3"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="/image/notebook.jpg"
                  alt="Notebooks"
                  className="img-fluid"
                  style={{
                    height: "140px",
                    objectFit: "contain",
                  }}
                />

                <h4
                  className="fw-bold mt-2"
                  style={{ color: "#243447" }}
                >
                  Notebooks
                </h4>

                <p className="text-secondary">Quality notebooks</p>

                <button
                  className="btn text-white"
                  onClick={() => {
                    setSelectedCategory("Notebooks");
                    navigate("/product");
                  }}
                  style={{
                    backgroundColor: "#0d9488",
                    borderRadius: "6px",
                  }}
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "50px 0",
          backgroundColor: "#f8fafa",
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <p
              style={{
                color: "#2a9d8f",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              OUR PRODUCTS
            </p>

            <h2
              style={{
                color: "#243447",
                fontWeight: "bold",
                fontSize: "32px",
              }}
            >
              Popular Products
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/image/pnote1.jpg"
                  alt="Notebook"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />

                <div className="card-body text-center">
                  <h5
                    style={{
                      color: "#243447",
                      fontWeight: "bold",
                    }}
                  >
                    Premium Notebook
                  </h5>

                  <p
                    style={{
                      color: "#2a9d8f",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹120
                  </p>

                  <button
                    className="btn text-white"
                    onClick={() =>
                      addToCart({
                        id: 1,
                        name: "Premium Notebook",
                        price: 120,
                      })
                    }
                    style={{
                      backgroundColor: "#2a9d8f",
                      border: "none",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/image/ppen.webp"
                  alt="Pen"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />

                <div className="card-body text-center">
                  <h5
                    style={{
                      color: "#243447",
                      fontWeight: "bold",
                    }}
                  >
                    Premium Ball Pen
                  </h5>

                  <p
                    style={{
                      color: "#2a9d8f",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹50
                  </p>

                  <button
                    className="btn text-white"
                    onClick={() =>
                      addToCart({
                        id: 2,
                        name: "Premium Ball Pen",
                        price: 50,
                      })
                    }
                    style={{
                      backgroundColor: "#2a9d8f",
                      border: "none",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/image/pencil.jpg"
                  alt="Pencil"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />

                <div className="card-body text-center">
                  <h5
                    style={{
                      color: "#243447",
                      fontWeight: "bold",
                    }}
                  >
                    Pencil Set
                  </h5>

                  <p
                    style={{
                      color: "#2a9d8f",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹80
                  </p>

                  <button
                    className="btn text-white"
                    onClick={() =>
                      addToCart({
                        id: 3,
                        name: "Pencil Set",
                        price: 80,
                      })
                    }
                    style={{
                      backgroundColor: "#2a9d8f",
                      border: "none",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="card h-100"
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/image/artkit.jpg"
                  alt="Art Kit"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />

                <div className="card-body text-center">
                  <h5
                    style={{
                      color: "#243447",
                      fontWeight: "bold",
                    }}
                  >
                    Art Kit
                  </h5>

                  <p
                    style={{
                      color: "#2a9d8f",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹250
                  </p>

                  <button
                    className="btn text-white"
                    onClick={() =>
                      addToCart({
                        id: 4,
                        name: "Art Kit",
                        price: 250,
                      })
                    }
                    style={{
                      backgroundColor: "#2a9d8f",
                      border: "none",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "50px 0",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <p
              style={{
                color: "#2a9d8f",
                fontWeight: "bold",
              }}
            >
              WHY CHOOSE US
            </p>

            <h2
              style={{
                color: "#243447",
                fontWeight: "bold",
                fontSize: "32px",
              }}
            >
              We Make Shopping Easy
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div style={{ fontSize: "40px" }}>🚚</div>

                <h5
                  style={{
                    color: "#243447",
                    fontWeight: "bold",
                  }}
                >
                  Fast Delivery
                </h5>

                <p style={{ color: "#666" }}>
                  Quick and safe delivery to your doorstep.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div style={{ fontSize: "40px" }}>💰</div>

                <h5
                  style={{
                    color: "#243447",
                    fontWeight: "bold",
                  }}
                >
                  Best Prices
                </h5>

                <p style={{ color: "#666" }}>
                  Quality stationery at affordable prices.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div style={{ fontSize: "40px" }}>🔒</div>

                <h5
                  style={{
                    color: "#243447",
                    fontWeight: "bold",
                  }}
                >
                  Secure Payment
                </h5>

                <p style={{ color: "#666" }}>
                  Safe and secure payment process.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div style={{ fontSize: "40px" }}>⭐</div>

                <h5
                  style={{
                    color: "#243447",
                    fontWeight: "bold",
                  }}
                >
                  Best Quality
                </h5>

                <p style={{ color: "#666" }}>
                  Good quality products for every need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;