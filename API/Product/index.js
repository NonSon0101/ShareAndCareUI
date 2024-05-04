import api from "../API";

const PRODUCT_URL = '/v1/api/product/advanced-search';

export async function getAllProduct() {
    try {
        const respone = await api.get(`${PRODUCT_URL}`);
        return respone.data.metadata;
    } catch (error) {
        console.error("Error at getAllProduct", error);
    }
}