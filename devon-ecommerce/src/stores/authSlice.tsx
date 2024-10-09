import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/index'

interface initialState {
    user: User | null,
    isAuthenticated: boolean
}

const initialState: initialState = {
    user: null,
    isAuthenticated: false,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;