import {
  useGetEpisodeQuery,
  useGetPodcastListQuery,
  useGetPodcasterQuery
} from "@/services/podcast.service"
import { useParams } from "react-router-dom"

export const usePodcastData = (searchTerm = "") => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string
    episodeId: string
  }>()
  const {
    isLoading: isPodcastListLoading,
    isFetching: isHomeFetching,
    data: podcastListData,
    error: podcastListError
  } = useGetPodcastListQuery()
  const {
    isLoading: isPodcastLoading,
    isFetching: isPodcastFetching,
    data: podcastData,
    error: podcastError
  } = useGetPodcasterQuery(podcastId)
  const {
    isLoading: isEpisodeLoading,
    isFetching: isEpisodeFetching,
    data: episodeData,
    error: episodeError
  } = useGetEpisodeQuery(podcastData?.results[0]?.feedUrl)
  const isLoadingOrFetching =
    isPodcastListLoading ||
    isPodcastLoading ||
    isEpisodeLoading ||
    isHomeFetching ||
    isPodcastFetching ||
    isEpisodeFetching
  const podcaster = podcastData?.results[0]
  const podcasterDescription = podcastListData?.feed?.entry.find(
    podcast => podcast.id.attributes["im:id"] === podcastId
  )?.summary.label
  const filteredPodcasts = podcastListData?.feed?.entry.filter(
    podcast =>
      podcast["im:name"].label
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  )
  const selectedEpisode = episodeData?.items.find(
    ({ guid }: { guid: string }) => guid.replace(/[:/]/gi, "") === episodeId
  )

  return {
    isHomeFetching,
    isPodcastFetching,
    isEpisodeFetching,
    podcastListData,
    podcastData,
    episodeData,
    isLoadingOrFetching,
    podcastId,
    episodeId,
    podcaster,
    podcasterDescription,
    filteredPodcasts,
    podcastListError,
    podcastError,
    episodeError,
    selectedEpisode
  }
}
