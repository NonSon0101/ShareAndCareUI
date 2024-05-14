import api from "../API";

const COMMENT_URL = '/v1/api/comment';

export async function getProductComment(size, productId, userId, accessToken) {
    try {
        const response = await api.get(`${COMMENT_URL}/?page=1&size=${size}&productId=${productId}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-client-id": userId,
                "authorization": accessToken,
        }} );
            return response.data.metadata;
        } catch (error) {
            console.error("Error at getProductComment", error);
    }
}

export async function addComment({ productId, content, parentContentId }, userId, accessToken) {
    try {
        const response = await api.post(`${COMMENT_URL}`, { productId, content, parentContentId }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "x-client-id": userId,
                "authorization": accessToken,
            }
        });
        return response.data.metadata;
    } catch (error) {
        console.error(`Error at addComment: `, error);
    }
}

