import axios from "axios";
import handleAxiosError from "../utils/handleAxiosError";
import {
  LoginResponse,
  ErrorResponse,
  RegisterResponse,
  ForgotPasswordResponse,
  ResetPasswordResponse,
} from "../types";

const API_URL = "http://localhost:4000/api/v1";

const login = async (credentials: {
  userName: string;
  password: string;
}): Promise<LoginResponse | ErrorResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
      userName: credentials.userName,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

const register = async (credentials: {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}): Promise<RegisterResponse | ErrorResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(`${API_URL}/register`, {
      userName: credentials.userName,
      password: credentials.password,
      email: credentials.email,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
    });
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

const forgotPassword = async (credentials: {
  email: string;
}): Promise<ForgotPasswordResponse | ErrorResponse> => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, {
      email: credentials.email,
    });
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

const resetPassword = async (credentials: {
  token: string;
  password: string;
}): Promise<ResetPasswordResponse | ErrorResponse> => {
  try {
    const response = await axios.post(`${API_URL}/reset-password/${credentials.token}`, {
      password: credentials.password,
    });

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export default { login, register, forgotPassword, resetPassword };
