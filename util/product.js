import axios from "axios";

export async function getAllProduct({ userId, accessToken }) {
    try {
        const url = "http://172.20.10.2:8081/v1/api/product/advanced-search";
        const response = await axios.get(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                // "x-client-id": userId,
                // Authorization: `${accessToken}`
            },
        });
        return response.data.metadata;
    } catch (error) {
        console.error("Error while fetching products:", error.message);
        throw error;
    }
}


