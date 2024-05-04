import axios from "axios";

const IP_ADD = "10.0.244.42";
const API_URL = `http://${IP_ADD}:8081`;

const api = axios.create({
    baseURL: API_URL
});

export default api;