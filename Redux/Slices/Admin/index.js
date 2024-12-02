import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isAdmin: false
    },
    reducers: {
        SET_LOGIN(state, action) {
            state.isAdmin = true
        },
        SET_LOGOUT(state, action) {
            state.isAdmin = false
        }
    },
});

export const { SET_LOGIN, SET_LOGOUT } = adminSlice.actions;
export default adminSlice.reducer;