import axios from "axios";

const IP_ADD = "192.168.1.17";
const API_URL = `http://${IP_ADD}:8081`;

const api = axios.create({
    baseURL: API_URL
});

export default api;
