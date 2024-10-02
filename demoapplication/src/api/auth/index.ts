import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';


const login = async (credentials: { userName: string, password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            userName: credentials.userName,
            password: credentials.password,
        });

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

const register = async (credentials: { userName: string, password: string, email: string, firstName: string, lastName: string }) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            userName: credentials.userName,
            password: credentials.password,
            email: credentials.email,
            firstName: credentials.firstName,
            lastName: credentials.lastName,
        });

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

const forgotPassword = async (credentials: { email: string }) => {
    try {
        const response = await axios.post(`${API_URL}/forgot-password`, {
            email: credentials.email,
        });

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
const resetPassword = async (credentials: { token: string, password: string }) => {
    try {

        const uri = `${API_URL}/reset-password/${credentials.token}`
        console.log(uri)
        const response = await axios.post(`${API_URL}/reset-password/${credentials.token}`, {
            password: credentials.password,
        });

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export default { login , register, forgotPassword, resetPassword}; 