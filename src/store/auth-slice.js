// Redux-Store-File
import { createSlice } from "@reduxjs/toolkit";

// Redux-React-Authentication-Only-Front-End
const initialAuthState = {
    isAuthenticated: false
};

// Redux-React-Authentication-Only-Front-End
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },

        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;