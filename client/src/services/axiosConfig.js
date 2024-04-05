
import axios from 'axios';
import ApiInfo from "../utils/apiInfo";

const axiosInstance = axios.create({
    baseURL: ApiInfo.baseUrl,
});

// Opcjonalnie, dodanie interceptora do dołączania tokena autoryzacyjnego do zapytań
axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
