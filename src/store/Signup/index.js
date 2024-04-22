import { Rootapi } from "..";

const Signup = Rootapi.injectEndpoints({
    endpoints: builder => ({
        SignupOtp: builder.mutation({
            query: data => ({
                url: "/auth/send-otp",
                method: "POST",
                body: data
            })
        }),
        Signup: builder.mutation({
            query: data => ({
                url: "/auth/signup",
                method: "POST",
                body: data
            })
        })
    })
});

export const { useSignupMutation, useSignupOtpMutation } = Signup;
