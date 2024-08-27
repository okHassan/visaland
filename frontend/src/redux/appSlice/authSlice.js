import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userData: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },

        userLoggedOut: (state) => {
            state.token = "";
            state.user = "";
        },
    },
});

export const { userData, userLoggedOut } =
    authSlice.actions;

export default authSlice.reducer;