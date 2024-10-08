import { ErrorResponse, ForgotPasswordResponse, LoginResponse, RegisterResponse } from "../types";


 const isLoginResponse = (response: LoginResponse | ErrorResponse): response is LoginResponse => {
    return (response as LoginResponse).user !== undefined;
};
const isRegisterResponse = (response: RegisterResponse | ErrorResponse): response is RegisterResponse => {
    return (response as RegisterResponse).user !== undefined;
};
const isForgotPasswordResponse = (response: ForgotPasswordResponse | ErrorResponse): response is ForgotPasswordResponse => {
    return (response as ForgotPasswordResponse).message !== undefined;
};



export {isLoginResponse, isRegisterResponse, isForgotPasswordResponse}