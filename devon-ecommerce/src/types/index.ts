export enum Role {
    ADMIN = 'admin',
    USER = 'user'
}

export interface Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
}
export interface User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    dateOfBirth: Date,
    profilePictureUrl: string;
    phoneNumber: number;
    address: Address;
    passwordHash: string;
    createdAt: Date;
    isActive: boolean;
    isVerified: boolean;
    updatedAt: Date;
    lastLogin: Date;
    role: Role;
}


export interface ErrorResponse {
    message: string;
    error?: string; // Optional for additional error details
}

export type UserResponse = User

export interface LoginResponse {
    token: string;
    user: UserResponse;
}
export interface RegisterResponse {
    user: UserResponse;
}

export interface ForgotPasswordResponse {
    message: string; // Assuming the API returns a message on success
}

export interface ResetPasswordResponse {
    message: string; // Assuming the API returns a message on success
}
