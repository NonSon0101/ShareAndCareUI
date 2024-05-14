import api from 'API';

const CART_URL = "/v1/api/cart"

export async function addToCart(data, userId) {
    try {
        const respone = await api.post(`${CART_URL}/?userId=${userId}`, data)
        return respone.data.metadata
    } catch (error) {
        console.error(`Error at addToCart: `, error);
    }
}

export async function getListCart() {
    try {
        const respone = await api.post(`${CART_URL}`)
        return respone.data.metadata
    } catch (error) {
        console.error(`Error at getListCart: `, error);
    }
}
