import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://127.0.0.1:8000', // Change this to your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});
const api = axios.create({
    baseURL: "http://127.0.0.1:8000"
})
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default instance;