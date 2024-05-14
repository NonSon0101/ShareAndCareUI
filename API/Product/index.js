import api from "../API";
import get from 'lodash/get'
const PRODUCT_URL = '/v1/api/product';

export async function getAllProduct() {
    try {
        const respone = await api.get(`${PRODUCT_URL}/advanced-search`);
        return respone.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function getProductDetail(productId) {
    try {
        const respone = await api.get(`${PRODUCT_URL}/${productId}`)
        return respone.data.metadata
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function searchProduct(productName) {
    try {
        const respone = await api.get(`${PRODUCT_URL}/search/${productName}`)
        return respone.data.metadata
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function getProductById(id) {
    try {
        const response = await api.get(`${PRODUCT_URL}/${id}`);
        return response.data.metadata;
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}