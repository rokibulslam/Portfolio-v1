import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-portfolio-server-one.vercel.app/api",
  }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    // Get All Portfolios
    getPortfolios: builder.query({
      query: () => "/projects",
    }),
    getRandomProject: builder.query({
      query: () => `/projects/random`,
    }),
    getAPortfolio: builder.query({
      query: (id) => `/projects/${id}`,
    }),
    addProject: builder.mutation({
      query: (body) => ({
        url: "/projects",
        method: "POST",
        body: body,
      }),
    }),
    getToolsSkills: builder.query({
      query: () => `/skills/tools`,
    }),
    getStructureSkills: builder.query({
      query: () => `/skills/structure`,
    }),
    getDesignSkills: builder.query({
      query: () => `/skills/design`,
    }),
    getBackendSkills: builder.query({
      query: () => `/skills/backend`,
    }),
  }),
});

// Export all handler
export const {
  useGetPortfoliosQuery,
  useGetAPortfolioQuery,
  useAddProjectMutation,
  useGetRandomProjectQuery,
  useGetBackendSkillsQuery,
  useGetDesignSkillsQuery,
  useGetStructureSkillsQuery,
  useGetToolsSkillsQuery,
} = apiSlice;
