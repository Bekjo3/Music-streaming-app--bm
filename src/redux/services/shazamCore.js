import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c7b13967c7mshba5455579b6e92dp1b1dc6jsnd6b3b5bc2f5f',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


export const shazamCoreApi = createApi({
    reducerPath: 'ShazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com', 
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c7b13967c7mshba5455579b6e92dp1b1dc6jsnd6b3b5bc2f5f');

            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
        getSongsByGenre: builder.query({ query: ( genre ) => `v1/charts/genre-world?genre_code=${genre}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
        getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetSongsByCountryQuery, useGetSongsByGenreQuery, useGetSongsBySearchQuery } = shazamCoreApi;