import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Product({ selectedCategory }) {
  const [category, setCategory] = useState(selectedCategory || "");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    setCategory(selectedCategory || "");
  }, [selectedCategory]);

  const getCategories = async () => {
    const res = await axios.get("http://localhost:4000/tbl_category");
    setCategories(res.data);
  };

  const getProducts = async () => {
    const res = await axios.get("http://localhost:4000/tbl_product");
    setProducts(res.data);
  };

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      category === "" || item.category === category;

    const searchMatch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const addToCart = async (product) => {
    await axios.post("http://localhost:4000/tbl_cart", {
      productId: product.id,
      productName: product.name,
      price: Number(product.price),
      quantity: 1
    });

    toast.success(product.name + " added to cart");
  };

  return (
    <div>
      <style>{`
        .product-page {
          background: #f7fbfa;
          min-height: 100vh;
          padding: 50px 20px;
        }

        .product-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        .product-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .product-heading h1 {
          font-size: 38px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .product-heading p {
          color: #64748b;
          font-size: 16px;
        }

        .search-box {
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .search-box input {
          height: 48px;
          border: 1px solid #d1d5db;
          border-radius: 8px 0 0 8px;
          box-shadow: none;
        }

        .search-box input:focus {
          border-color: #0f766e;
          box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.1);
        }

        .search-btn {
          background: #0f766e;
          color: white;
          border: none;
          padding: 0 22px;
          border-radius: 0 8px 8px 0;
          font-weight: 600;
        }

        .product-container {
          display: flex;
          gap: 30px;
          align-items: flex-start;
        }

        .category-box {
          width: 230px;
          background: white;
          border-radius: 12px;
          padding: 22px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          flex-shrink: 0;
        }

        .category-box h2 {
          font-size: 21px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 18px;
        }

        .category-item {
          width: 100%;
          border: none;
          background: transparent;
          text-align: left;
          padding: 11px 14px;
          margin-bottom: 7px;
          border-radius: 7px;
          color: #475569;
          font-weight: 600;
          cursor: pointer;
        }

        .category-item:hover {
          background: #e8f5f3;
          color: #0f766e;
        }

        .category-item.active {
          background: #0f766e;
          color: white;
        }

        .products-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          transition: 0.3s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          height: 190px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .product-info {
          padding: 18px;
          text-align: center;
        }

        .product-info h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .product-info h4 {
          color: #0f766e;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .product-info p {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .cart-btn {
          width: 100%;
          border: none;
          background: #0f766e;
          color: white;
          padding: 10px;
          border-radius: 7px;
          font-weight: 600;
          cursor: pointer;
        }

        .cart-btn:hover {
          background: #0d625c;
        }

        .cart-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .no-product {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
        }

        .no-product h3 {
          color: #0f172a;
          margin-bottom: 8px;
        }

        .no-product p {
          color: #64748b;
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

          .product-heading h1 {
            font-size: 30px;
          }

          .search-box .input-group {
            display: flex;
          }

          .search-btn {
            padding: 0 14px;
          }
        }
      `}</style>

      <div className="product-page">
        <div className="product-wrapper">

          <div className="product-heading">
            <h1>Our Products</h1>
            <p>Find the perfect stationery for your needs</p>
          </div>

          <div className="search-box">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button className="search-btn">
                🔍 Search
              </button>
            </div>
          </div>

          <div className="product-container">

            <div className="category-box">
              <h2>Categories</h2>

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

              {categories.map((item) => (
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

            {filteredProducts.length > 0 ? (
              <div className="products-grid">

                {filteredProducts.map((product) => (
                  <div className="product-card" key={product.id}>

                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </div>

                    <div className="product-info">

                      <h3>{product.name}</h3>

                      <h4>
                        ₹{product.price}
                      </h4>

                      <p>
                        Category: {product.category}
                      </p>

                      <button
                        className="cart-btn"
                        onClick={() => addToCart(product)}
                        disabled={product.status === "Out of Stock"}
                      >
                        {product.status === "Out of Stock"
                          ? "Out of Stock"
                          : "Add to Cart"}
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            ) : (
              <div className="no-product">
                <h3>No Products Found</h3>
                <p>No products match your search.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;