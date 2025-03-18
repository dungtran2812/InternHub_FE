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
    recruiterSignup: builder.mutation({
      query: (credentials) => ({
        url: endpoints.RECRUITER_SIGNUP,
        method: 'POST',
        data: credentials,
      }),
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: endpoints.GET_USERINFO,
        method: 'GET'
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
    getAllReview: builder.query({
      query: () => ({
        url: endpoints.REVIEW,
        method: 'GET',
      }),
    }),
    getJobFunction: builder.query({
      query: () => ({
        url: endpoints.JOB_FUNCTION,
        method: 'GET',
      }),
    }),
    getJobFunctionById: builder.query({
      query: (id) => ({
        url: `${endpoints.JOB_FUNCTION}/${id}`,
        method: 'GET',
        data: id,
      }),
    }),
    getIndustry: builder.query({
      query: () => ({
        url: endpoints.INDUSTRY,
        method: 'GET',
      }),
    }),
    getIndustryById: builder.query({
      query: (id) => ({
        url: `${endpoints.INDUSTRY}/${id}`,
        method: 'GET',
        data: id,
      }),
    }),
    getAllJob: builder.query({
      query: () => ({
        url: endpoints.JOB,
        method: 'GET',
      }),
    }),
    getJobFilter: builder.query({
      query: ({ searchText, jobFunctionId, industryId, page, pageSize }) => {
        const params = new URLSearchParams();
        if (searchText) params.append('searchText', searchText);
        if (jobFunctionId) params.append('jobFunctionId', jobFunctionId);
        if (industryId) params.append('industryId', industryId);
        params.append('page', page);
        params.append('pageSize', pageSize);
        
        return {
          url: `${endpoints.SEARCH_JOB}?${params.toString()}`,
          method: 'GET',
        };
      },
    }),
    getAllRecruiter: builder.query({
      query: () => ({
        url: endpoints.RECRUITER,
        method: 'GET',
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `${endpoints.JOB}/${id}`,
        method: 'GET',
        data: id,
      }),
    }),
    putStudentProfile: builder.mutation({
      query: ({ id, credentials }) => ({
        url: `${endpoints.STUDENT}/${id}`,
        method: 'PUT',
        data: credentials, id
      }),
    }),
    uploadCV: builder.mutation({
      query: (formData) => ({
        url: `${endpoints.STUDENT}/upload-cv`,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useSignupMutation,
  useRecruiterSignupMutation,
  useLazyGetUserInfoQuery,
  useGetCompanyByIdQuery,
  useGetAllCompanyQuery,
  useGetAllReviewQuery,
  useGetJobFunctionQuery,
  useGetIndustryQuery,
  useGetJobFunctionByIdQuery,
  useGetIndustryByIdQuery,
  useGetJobFilterQuery,
  useGetAllJobQuery,
  useGetAllRecruiterQuery,
  useGetJobByIdQuery,
  usePutStudentProfileMutation,
  useUploadCVMutation,
} = internHubApi;

export default internHubApi;
