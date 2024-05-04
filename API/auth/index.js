import api from '../API';

const AUTH_URL = '/v1/api/auth';


export async function auth({ mode, email, password }) {
    try {
        const response = await api.post(`${AUTH_URL}/${mode}`, { email, password });
        return response.data.metadata;
    } catch (error) {
        console.error(`Error at ${mode}: `, error);
    }
}

export async function verifyAccount({ email, otpCode }) {
    try {
        console.info('log at at verifyAccoount', email, otpCode);

        const respone = await api.post(`${AUTH_URL}/verify-email`, { email: email, otp: otpCode });
        return respone.data.metadata;
    } catch (error) {
        console.error('Error at verifyAccoount', error);
    }
}

export async function resetPassword({ email }) {
    try {
        const response = await api.post(`${AUTH_URL}/reset-password`, { email });
        return response.data.metadata;
    } catch (error) {
        console.error("Error at resetPassword", error);
    }
}

export async function resendOtp({ email }) {
    try {
        const response = await api.post(`${AUTH_URL}/resend-otp`, { email });
        return response.data.metadata;
    } catch (error) {
        console.error("Error at resendOtp", error);
    }
}

