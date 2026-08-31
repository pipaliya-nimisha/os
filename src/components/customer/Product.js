import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get products and categories from JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:4000/tbl_product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Product Error:", error);
      });

    axios
      .get("http://localhost:4000/tbl_category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log("Category Error:", error);
      });
  }, []);

  // Filter products according to category
  const filteredProducts = category
    ? products.filter(
        (item) =>
          item.category &&
          item.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  // Add to Cart
  const addToCart = (product) => {
    alert(product.name + " added to cart");
  };

  return (
    <div>
      <style>{`

        .product-page {
          width: 100%;
          background: white;
          padding: 30px 40px 50px;
          box-sizing: border-box;
        }

        .product-heading {
          margin-bottom: 25px;
        }

        .product-heading h1 {
          margin: 0;
          color: #26384d;
          font-size: 34px;
        }

        .product-heading p {
          color: #38516b;
          font-size: 16px;
          margin-top: 10px;
        }

        .product-container {
          display: flex;
          gap: 25px;
          align-items: flex-start;
        }

        .category-box {
          width: 240px;
          min-width: 240px;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          background: white;
          box-sizing: border-box;
        }

        .category-box h2 {
          margin-top: 0;
          color: #075b66;
        }

        .category-item {
          width: 100%;
          padding: 12px;
          margin-bottom: 5px;
          border: none;
          border-radius: 5px;
          background: white;
          color: #42566d;
          text-align: left;
          cursor: pointer;
          font-size: 15px;
        }

        .category-item:hover {
          background: #eef9f8;
        }

        .category-item.active {
          background: #e9f7f6;
          color: #087a79;
          font-weight: bold;
        }

        .products-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .product-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8fafb;
        }

        .product-icon {
          font-size: 65px;
        }

        .product-info {
          padding: 15px;
        }

        .product-info h3 {
          margin: 0 0 10px;
          color: #08756f;
          font-size: 19px;
        }

        .product-info h4 {
          margin: 0 0 10px;
          color: #07816f;
          font-size: 18px;
        }

        .product-info p {
          color: #53677b;
          font-size: 14px;
          min-height: 25px;
        }

        .stock-text {
          color: #53677b;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .cart-btn {
          background: #078a83;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }

        .cart-btn:hover {
          background: #056e69;
        }

        .no-product {
          text-align: center;
          padding: 50px;
          color: #52677d;
        }

        @media (max-width: 1100px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 850px) {
          .product-container {
            flex-direction: column;
          }

          .category-box {
            width: 100%;
          }

          .products-grid {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <div className="product-page">

        {/* Heading */}
        <div className="product-heading">
          <h1>Our Products</h1>
          <p>Browse our stationery products</p>
        </div>

        <div className="product-container">

          {/* Categories */}
          <div className="category-box">

            <h2>Categories</h2>

            {/* All Products */}
            <button
              className={
                category === ""
                  ? "category-item active"
                  : "category-item"
              }
              onClick={() => setCategory("")}
            >
              All Products
            </button>

            {/* Categories from db.json */}
            {categories
              .filter((item) => item.status === "Active")
              .map((item) => (
                <button
                  key={item.id}
                  className={
                    category === item.name
                      ? "category-item active"
                      : "category-item"
                  }
                  onClick={() => setCategory(item.name)}
                >
                  {item.name}
                </button>
              ))}

          </div>

          {/* Products */}
          <div className="products-grid">

            {filteredProducts.length > 0 ? (

              filteredProducts
                .filter((product) => product.status === "Active")
                .map((product) => (

                  <div
                    className="product-card"
                    key={product.id}
                  >

                    {/* Product Image */}
                    <div className="product-image">
                      <div className="product-icon">
                        📚
                      </div>
                    </div>

                    {/* Product Information */}
                    <div className="product-info">

                      <h3>
                        {product.name}
                      </h3>

                      <h4>
                        ₹{product.price}
                      </h4>

                      <p>
                        Category: {product.category}
                      </p>

                      <div className="stock-text">
                        Stock: {product.stock}
                      </div>

                      <button
                        className="cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>

                    </div>

                  </div>

                ))

            ) : (

              <div className="no-product">
                <h3>No Products Found</h3>
                <p>
                  Products are not available.
                </p>
              </div>

            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Product;