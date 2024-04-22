import { Rootapi } from "..";

const Login = Rootapi.injectEndpoints({
    endpoints: builder => ({
        Login: builder.mutation({
            query: data => ({
                url: "/auth/login",
                method: "POST",
                body: data
            })
        })
    })
});

export const { useLoginMutation } = Login;
