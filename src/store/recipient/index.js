import { Rootapi } from "..";

const Recipient = Rootapi.injectEndpoints({
    endpoints: builder => ({
        createRecipient: builder.mutation({
            query: data => ({
                url: "/Recipient",
                method: "POST",
                body: data
            })
        }),
        getRecipients: builder.query({
            query: () => ({
                url: "/Recipient",
                method: "GET"
            })
        })
    })
});

export const { useCreateRecipientMutation, useGetRecipientsQuery } = Recipient;
