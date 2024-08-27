import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import authSlice from "./appSlice/authSlice";
import loadingSlice from "./appSlice/loadingSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        loading: loadingSlice
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
