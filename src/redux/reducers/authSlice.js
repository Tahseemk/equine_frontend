import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    user: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.isAuthenticated = false
            state.user = {}
            state.accessToken = ''
        },
    },
});

export const { setAccessToken, setIsAuthenticated, setUser, logout } = authSlice.actions;

export default authSlice.reducer;