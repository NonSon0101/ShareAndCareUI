import axios from "axios";

const IP_ADD = "172.20.10.2";
const API_URL = `http://${IP_ADD}:3000`;

const api = axios.create({
    baseURL: API_URL
});
export default api;
