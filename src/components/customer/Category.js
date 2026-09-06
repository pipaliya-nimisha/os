import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Category.css";

function Category({ setSelectedCategory }) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const res = await axios.get("http://localhost:4000/tbl_category");
        setCategories(res.data);
    };

    return (
        <div className="category-page">

            <div className="category-banner">
                <h1>Shop by Categories</h1>
                <p>Find all your stationery essentials in one place</p>
            </div>

            <div className="row g-4 justify-content-center">

                {categories.map((item) => (
                    <div
                        className="col-xl-3 col-lg-4 col-md-6"
                        key={item.id}
                    >
                        <div className="category-card">

                            <img
                                src={
                                    item.name === "Pens"
                                        ? "./image/pen.webp"
                                        : item.name === "Notebooks"
                                        ? "./image/note.webp"
                                        : item.name === "Markers"
                                        ? "./image/marker.webp"
                                        : item.name === "Pencil"
                                        ? "./image/pencil.jpg"
                                        : "./image/category.jpg"
                                }
                                alt={item.name}
                                className="ci"
                            />

                            <h4>{item.name}</h4>

                            <p>{item.description}</p>

                            <button
                                className="category-btn"
                                onClick={() => {
                                    setSelectedCategory(item.name);
                                    navigate("/product");
                                }}
                            >
                                View Products
                            </button>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Category;