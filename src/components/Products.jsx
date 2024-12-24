import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductsService";
import Navbar from "./Navbar";
import { getUserById } from "../services/UserService";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";

function Products() {
    const [products, setProducte] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [productsChanged, setProductsChanged] = useState(false);
    const [productId, setProductId] = useState("");

    useEffect(() => {
        //check if admin
        if (localStorage.getItem("userId") != null) {
            getUserById()
                .then((res) => setIsAdmin(res.data.isAdmin))
                .catch((err) => console.log(err));
        }
    }, []);
    useEffect(() => {
        getAllProducts()
            .then((res) => setProducte(res.data))
            .catch((err) => console.log(err));
    }, [productsChanged]);

    let handleAddProduct = () => {
        //open add product modal
        setOpenModal(true);
    };

    let requestRender = () => {
        setProductsChanged(!productsChanged);
    };
    return (
        <>
            <Navbar />
            <div className="container">
                <h4 className="display-4 my-3">Products</h4>
                {isAdmin && (
                    <button className="btn btn-success" onClick={handleAddProduct}>
                        Add Product
                    </button>
                )}
                <div className="row mt-3">
                    {products.length ? (
                        products.map((product) => (
                            <div
                                className="card col-md-4"
                                key={product.id}
                                style={{ width: "18rem" }}
                            >
                                <div className="card-header">{product.category}</div>
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="text-success">{product.price}$</p>
                                    <button className="btn btn-primary">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    {isAdmin && (
                                        <span>
                                            <button
                                                className="btn btn-warning mx-1"
                                                onClick={() => {
                                                    setOpenUpdateModal(true);
                                                    setProductId(product.id);
                                                }}
                                            >
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </button>
                                            <button className="btn btn-danger">
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Sorry, No products found</p>
                    )}
                </div>
            </div>
            <AddProductModal
                show={openModal}
                onHide={() => setOpenModal(false)}
                requestRender={requestRender}
            />
            <UpdateProductModal
                show={openUpdateModal}
                onHide={() => setOpenUpdateModal(false)}
                requestRender={requestRender}
                productId={productId}
            />
        </>
    );
}

export default Products;