import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/api',
    }),
    endpoints: (builder) => ({
        defaultAuth: builder.mutation({
            query: (data) => ({
                url: '/defaultAuth',
                method: "GET",
                credentials: "include",
            }),
        })
    })
})

export const { useDefaultAuthMutation } = apiSlice