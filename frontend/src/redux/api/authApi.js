import { apiSlice } from './api';
import { userData, userLoggedOut } from '../appSlice/authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/user/register',
                method: "POST",
                body: data,
                credentials: "include",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userData({
                            token: result.data.token,
                            user: {
                                id: result.data._id,
                                name: result.data.name,
                                email: result.data.email,
                            }
                        })
                    );
                } catch (error) {
                    console.error(error);
                }
            },
        })
    })
})

export const { useRegisterMutation } = authApi