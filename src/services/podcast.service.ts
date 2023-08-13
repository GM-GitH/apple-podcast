import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PodcastProps } from "./podcast.interface"

export const podcastsListApi = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getPodcastList: builder.query<PodcastProps, void>({
      query: () =>
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    }),
    getPodcaster: builder.query({
      query: id =>
        id
          ? `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${id}`
          : ""
    }),
    getEpisode: builder.query({
      query: url =>
        url ? `https://api.rss2json.com/v1/api.json?rss_url=${url}` : ""
    })
  })
})
export const {
  useGetPodcastListQuery,
  useGetPodcasterQuery,
  useGetEpisodeQuery
} = podcastsListApi
