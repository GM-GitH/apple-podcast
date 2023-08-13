import { useNavigate } from "react-router-dom"
import moment from "moment"
import { usePodcastData } from "@/hooks/usePodcastData"

interface EpisodeTableProps {
  guid: string
  title: string
  pubDate: string
  enclosure: {
    duration: number
  }
}

export const Podcast = (): JSX.Element => {
  const { podcastId, episodeData, episodeError } = usePodcastData()
  const navigate = useNavigate()
  const handleEpisodeClick = (guid: string) => {
    navigate(`/podcast/${podcastId}/episode/${guid.replace(/[:/]/gi, "")}`)
  }

  return (
    <div className="p-2 lg:mr-4 lg:flex-grow">
      <div className="font-bold text-lg rounded shadow-custom p-2 mb-4 lg:pl-4">
        {`Episodes: ${episodeData?.items.length ?? 0}`}
      </div>
      <table className="rounded shadow-custom p-2 w-full">
        <thead>
          <tr key="headers">
            <th className="p-2 text-left lg:pl-4">Title</th>
            <th className="p-2 hidden text-right sm:table-cell lg:pr-8">
              Date
            </th>
            <th className="p-2 hidden text-right sm:table-cell lg:pr-6">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {episodeData?.items ? (
            episodeData?.items.map(
              (episode: EpisodeTableProps, index: number): JSX.Element => (
                <tr
                  className={`cursor-pointer border-t-2 hover:text-red-700 hover:shadow-custom transition-all duration-150 hover:scale-95 hover:bg-blue-50 lg:hover:scale-105 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                  key={episode?.guid}
                  onClick={() => handleEpisodeClick(episode?.guid)}
                >
                  <td className="whitespace-nowrap text-sky-700 px-2 py-1 lg:pl-4 w-full max-w-0 truncate">
                    {episode.title}
                  </td>
                  <td className="hidden whitespace-nowrap text-right sm:table-cell px-2 py-1">
                    {moment(episode.pubDate, "YYYY-MM-DD HH:mm:ss").format(
                      "DD-MM-YYYY"
                    )}
                  </td>
                  <td className="hidden text-right sm:table-cell px-2 py-1 lg:pr-6">
                    {moment
                      .utc(episode.enclosure.duration * 1000)
                      .format("HH:mm:ss")}
                  </td>
                </tr>
              )
            )
          ) : // @ts-ignore data is not defined
          Boolean(episodeError?.data?.message) ? (
            (console.log(episodeError),
            (
              <tr>
                <td
                  colSpan={3}
                  className="bg-gray-100 p-2 text-center font-thin capitalize"
                >
                  {
                    // @ts-ignore data is not defined
                    `⚠️ ${episodeError?.data?.status}: ${episodeError?.data?.message}`
                  }
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  )
}
