import { useFormik } from "formik";
import * as yup from "yup";
import { addProduct } from "../services/ProductsService";

function AddProduct({ onHide, requestRender }) {
    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            category: "",
            description: "",
            image: "",
        },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            price: yup.number().required().moreThan(0),
            category: yup.string().required().min(2),
            description: yup.string().required().min(2),
            image: yup.string().required().url(),
        }),
        onSubmit: (values) => {
            addProduct(values)
                .then(() => {
                    onHide();
                    requestRender();
                    alert(`${values.name} was added successfuly`);
                })
                .catch((err) => console.log(err));
        },
    });
    return (
        <>
            <div className="container w-75">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Product Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Product Name</label>
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-danger">{formik.errors.name}</p>
                        )}
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Price</label>
                        {formik.touched.price && formik.errors.price && (
                            <p className="text-danger">{formik.errors.price}</p>
                        )}
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            placeholder="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Category</label>
                        {formik.touched.category && formik.errors.category && (
                            <p className="text-danger">{formik.errors.category}</p>
                        )}
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Product Description</label>
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-danger">{formik.errors.description}</p>
                        )}
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            placeholder="image"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="floatingInput">Product Image</label>
                        {formik.touched.image && formik.errors.image && (
                            <p className="text-danger">{formik.errors.image}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success w-100 mt-3"
                        disabled={!formik.dirty || !formik.isValid}
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;