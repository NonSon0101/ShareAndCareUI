import api from "../API";

const PRODUCT_URL = '/v1/api/product';

export async function getAllProduct() {
    try {
        const respone = await api.get(`${PRODUCT_URL}/advanced-search`);
        return respone.data.metadata;
    } catch (error) {
        console.error("Error at getAllProduct", error);
    }
}

export async function getProductDetail(productId) {
    try {
        const respone = await api.get(`${PRODUCT_URL}/${productId}`)
        return respone.data.metadata
    } catch (error) {
        console.error("Error at getProductDetail", error);
    }
}

export async function searchProduct(productName) {
    try {
        const respone = await api.get(`${PRODUCT_URL}/search/${productName}`)
        return respone.data.metadata
    } catch (error) {
        console.error("Error at searchProduct", error);
    }
}

export async function getProductById(id) {
    try {
        const response = await api.get(`${PRODUCT_URL}/${id}`);
        return response.data.metadata;
    } catch (error) {
        console.error("Error at getProductById", error);
    }
}