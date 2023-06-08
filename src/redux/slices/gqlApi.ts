import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const getPostsQuery = `
query GetPosts{
  Post {
    id
    title
  }
}
`
export const gqlApi: any = createApi({
  reducerPath: 'gqlPostApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_PUBLIC_BASE_URL}graphql`,
  }),
  tagTypes: ['GqlPosts'],
  endpoints: (builder) => ({
    getGqlPosts: builder.query({
      query: () => ({
        url: '',
        method: 'Post',
        body: {
          query: getPostsQuery,
          variables: {},
        },
      }),
      providesTags: ['GqlPosts'],
    }),
    updateGqlPosts: builder.mutation({
      query: ({ query, variables }) => ({
        url: '',
        method: 'Post',
        body: {
          query,
          variables,
        },
      }),
      invalidatesTags: ['GqlPosts'],
    }),
  }),
})

export const { useGetGqlPostsQuery, useUpdateGqlPostsMutation } = gqlApi
