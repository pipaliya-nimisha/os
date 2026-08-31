import "./Category.css";

function Category() {
    return (
        <div className="category-page">

            <div className="category-banner">
                <h1>Shop by Categories</h1>
                <p>Find all your stationery essentials in one place</p>
            </div>

            <div className="row g-4 justify-content-center">

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/pen.webp" alt="Pens" className="ci" />
                        <h4>Pens</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/note.webp" alt="Notebooks" className="ci" />
                        <h4>Notebooks</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/marker.webp" alt="Markers" className="ci" />
                        <h4>Markers</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/era.jpg" alt="Erasers" className="ci" />
                        <h4>Erasers</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/pencils.jpg" alt="Pencils" className="ci" />
                        <h4>Pencils</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/color.jpg" alt="Colors" className="ci" />
                        <h4>Colors</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/g.jpg" alt="Geometry Box" className="ci" />
                        <h4>Geometry Box</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/file.jpg" alt="File Folders" className="ci" />
                        <h4>File Folders</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/sharpener.jpg" alt="Sharpener" className="ci" />
                        <h4>Sharpener</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="category-card">
                        <img src="./image/fe.jpg" alt="Feviquick" className="ci" />
                        <h4>Feviquick</h4>
                        <button className="category-btn">
                            View Products
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Category;