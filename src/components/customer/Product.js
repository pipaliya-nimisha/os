import React, { useState } from "react";

function Product() {
  const [category, setCategory] = useState("");

  const categories = [
    "",
    "Pens",
    "Pencils",
    "Notebooks",
    "Office Supplies",
    "Art Supplies",
    "School Supplies",
  ];

  const products = [
    {
      id: 1,
      name: "Premium Pen",
      price: 120,
      category: "Pens",
      image: "/image/pen.jpg",
      description: "Smooth writing premium ball pen",
    },
    {
      id: 2,
      name: "Graphite Pencil",
      price: 10,
      category: "Pencils",
      image: "/image/pencil.jpg",
      description: "High quality HB graphite pencil",
    },
    {
      id: 3,
      name: "Spiral Notebook",
      price: 80,
      category: "Notebooks",
      image: "/image/notebook.jpg",
      description: "A5 size spiral bound notebook",
    },
    {
      id: 4,
      name: "Highlighter",
      price: 150,
      category: "School Supplies",
      image: "/image/highlighter.png",
      description: "Set of 5 colorful highlighters",
    },
    {
      id: 5,
      name: "Scissors",
      price: 60,
      category: "Office Supplies",
      image: "/image/scissors.jpg",
      description: "Sharp office scissors",
    },
    {
      id: 6,
      name: "Glue Stick",
      price: 40,
      category: "School Supplies",
      image: "/image/glue.jpg",
      description: "Strong adhesive glue stick",
    },
    {
      id: 7,
      name: "Eraser",
      price: 15,
      category: "Pencils",
      image: "/image/eraser.jpg",
      description: "Soft writing eraser",
    },
    {
      id: 8,
      name: "Adhesive Tape",
      price: 30,
      category: "Office Supplies",
      image: "/image/tape.jpg",
      description: "Clear stationery tape",
    },
  ];

  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  const addToCart = (product) => {
    alert(product.name + " added to cart");
  };

  return (
    <div>
      <style>{`

.product-page{
  width:100%;
  background:white;
  padding:30px 20px 50px;
  box-sizing:border-box;
}

.product-heading{
  margin-bottom:25px;
}

.product-heading h1{
  margin:0;
  color:#26384d;
  font-size:34px;
}

.product-heading p{
  color:#38516b;
  font-size:16px;
  margin-top:10px;
}

.product-container{
  display:flex;
  gap:25px;
  align-items:flex-start;
}

.category-box{
  width:240px;
  border:1px solid #ddd;
  border-radius:8px;
  padding:20px;
  background:white;
  box-sizing:border-box;
}

.category-box h2{
  margin-top:0;
  color:#075b66;
}

.category-item{
  width:100%;
  padding:12px;
  margin-bottom:5px;
  border:none;
  border-radius:5px;
  background:white;
  color:#42566d;
  text-align:left;
  cursor:pointer;
  font-size:15px;
}

.category-item:hover{
  background:#eef9f8;
}

.category-item.active{
  background:#e9f7f6;
  color:#087a79;
  font-weight:bold;
}

.products-grid{
  flex:1;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
}

.product-card{
  border:1px solid #ddd;
  border-radius:8px;
  background:white;
  overflow:hidden;
}

.product-image{
  width:100%;
  height:170px;
  display:flex;
  justify-content:center;
  align-items:center;
  background:white;
}

.product-image img{
  max-width:90%;
  max-height:150px;
  object-fit:contain;
}

.product-info{
  padding:15px;
}
.product-info h3{
  margin:0 0 10px;
  color:#08756f;
  font-size:19px;
}

.product-info h4{
  margin:0 0 10px;
  color:#07816f;
  font-size:18px;
}

.product-info p{
  color:#53677b;
  font-size:14px;
  min-height:40px;
}

.cart-btn{
  background:#078a83;
  color:white;
  border:none;
  padding:10px 15px;
  border-radius:5px;
  cursor:pointer;
  font-size:14px;
}

.cart-btn:hover{
  background:#056e69;
}

.no-product{
  text-align:center;
  padding:50px;
  color:#52677d;
}

      `}</style>

      <div className="product-page">

        <div className="product-heading">
          <h1>Our Products</h1>
          <p>Browse our stationery products</p>
        </div>

        <div className="product-container">

          <div className="category-box">
            <h2>Categories</h2>

            {categories.map((item, index) => (
              <button
                key={index}
                className={
                  category === item
                    ? "category-item active"
                    : "category-item"
                }
                onClick={() => setCategory(item)}
              >
                {item === "" ? "All Products" : item}
              </button>
            ))}
          </div>

          <div className="products-grid">

            {filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (

                <div
                  className="product-card"
                  key={product.id}
                >

                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div className="product-info">

                    <h3>{product.name}</h3>

                    <h4>₹{product.price}</h4>

                    <p>{product.description}</p>

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
                <p>Products are not available.</p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Product;