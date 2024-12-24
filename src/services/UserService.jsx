// login

import axios from "axios";
const api = `${import.meta.env.VITE_API_URL}/users`;
export function checkUser(user) {
    return axios.get(`${api}?email=${user.email}&password=${user.password}`);
}

// Profile
export function getUserById() {
    const id = JSON.parse(localStorage.getItem("userId"));
    return axios.get(api + "/" + id);
}

//register
export function addUser(user) {
    return axios.post(api, user);
}

//check if user exsist before register
export function checkUserExsist(user) {
    return axios.get(`${api}?email=${user.email}`);
}