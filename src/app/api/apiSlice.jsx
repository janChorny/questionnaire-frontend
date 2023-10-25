import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ 
      // baseUrl: 'http://localhost:3500',
      baseUrl: 'https://questionnaire-api-ikmo.onrender.com',
    }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})
