import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './baseRequest';
import endpoints from '../consts/endpoints';

const internHubApi = createApi({
  reducerPath: 'internHubApi',
  baseQuery: axiosBaseQuery(), // Adjust base URL as needed
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: endpoints.LOGIN,
        method: 'POST',
        data: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: endpoints.SIGNUP,
        method: 'POST',
        data: credentials,
      }),
    }),
    getCompanyById: builder.query({
      query: (id) => ({
        url: `${endpoints.COMPANY}/${id}`,
        method: 'GET',
        data: id,
      }),
    }),
    getAllCompany: builder.query({
      query: () => ({
        url: endpoints.COMPANY,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetCompanyByIdQuery,
  useGetAllCompanyQuery
} = internHubApi;

export default internHubApi;
