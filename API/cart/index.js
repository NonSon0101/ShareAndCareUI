import api from 'API';
import get from 'lodash/get'
const CART_URL = "/v1/api/cart"

export async function addToCart(data, userId) {
    try {
        const respone = await api.post(`${CART_URL}/?userId=${userId}`, data)
        return respone.data.metadata
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}

export async function getListCart() {
    try {
        const respone = await api.post(`${CART_URL}`)
        return respone.data.metadata
    } catch (error) {
        const errorMessage = get(error, 'data.error.message', '') || JSON.stringify(error);
        throw new Error(errorMessage);
    }
}
