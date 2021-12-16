import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const baseUrl = "https://restcountries.com/v3.1"


export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCountriesByRegion: builder.query({
            query: (region) => (region === "" ? "/all" : `/region/${region}`)
        }),
        getCountryByName: builder.query({
            query: (name) => `/name/${name}`
        }),
        getCountryByCode: builder.query({
            query: (code) => `/alpha/${code}`
        }),
    })
})

export const {
   useGetCountriesByRegionQuery,
   useGetCountryByNameQuery,
   useGetCountryByCodeQuery,

} = countriesApi