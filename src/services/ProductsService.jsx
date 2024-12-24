import axios from "axios";

const api = `${import.meta.env.VITE_API_URL}/products`;
// get all products
export function getAllProducts() {
    return axios.get(api);
}

// get product by id
export function getProductById(id) {
    return axios.get(`${api}/${id}`);
}

// add new product
export function addProduct(product) {
    return axios.post(api, product);
}

// update product
export function updateProduct(product) {
    return axios.put(`${api}/${product.id}`, product);
}

// delete product
export function deleteProduct(id) {
    return axios.delete(`${api}/${id}`);
}