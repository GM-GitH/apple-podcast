import { usePodcastData } from "@/hooks/usePodcastData"

export const Episode = () => {
  const { selectedEpisode } = usePodcastData()

  return (
    <div className="p-2 lg:mr-4 lg:flex-grow">
      <div className="font-bold text-xl rounded shadow-custom p-4 lg:p-5">
        <h1 className="mb-4">{selectedEpisode?.title}</h1>
        <p
          className="font-normal text-sm text-gray-800 italic mb-8"
          dangerouslySetInnerHTML={{ __html: selectedEpisode?.description }}
        />
        {selectedEpisode && (
          <audio className="w-full" controls>
            <source src={selectedEpisode?.enclosure?.link} type="audio/mpeg" />
          </audio>
        )}
      </div>
    </div>
  )
}
