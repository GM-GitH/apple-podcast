import { Link } from "react-router-dom"
// import { useLazyGetPodcasterQuery } from "../services/podcast.service"
import { useState } from "react"
import { usePodcastData } from "@/hooks/usePodcastData"

export const Home = (): JSX.Element => {
  // const [trigger] = useLazyGetPodcasterQuery()
  const [searchTerm, setSearchTerm] = useState("")
  const { filteredPodcasts } = usePodcastData(searchTerm)

  return (
    <>
      <div className="flex justify-end items-center mr-8">
        <span className="text-white font-semibold bg-sky-600 px-1 mr-2 rounded-lg">
          {filteredPodcasts?.length}
        </span>
        <input
          id="search"
          type="text"
          placeholder="Filter podcasts..."
          className="border-2 p-1 rounded-md text-gray-600 pr-16"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className="text-center flex flex-row flex-wrap justify-center
        2xl:w-[1500px] 2xl:mx-auto -mt-14"
      >
        {filteredPodcasts?.map(podcast => (
          <Link
            key={podcast.id.attributes["im:id"]}
            // onClick={() => trigger(podcast.id.attributes["im:id"])}
            to={`/podcast/${podcast.id.attributes["im:id"]}`}
            className="block text-center mx-4 w-72 shadow-custom cursor-pointer
            rounded p-4 mt-40 transition-all duration-300 ease-in-out 
            hover:shadow-custom-hover hover:scale-105"
          >
            <img
              loading="lazy"
              decoding="async"
              className="justify-center mx-auto rounded-full -mt-20 mb-2 w-32
              h-32 bg-gray-200"
              src={
                podcast["im:image"][2].label.replace("170x170", "128x128") ?? ""
              }
              alt={podcast["im:name"].label}
            />
            <h2 className="uppercase font-bold text-gray-600">
              {podcast["im:name"].label}
            </h2>
            <h3 className="font-bold text-gray-500">
              {`Author: ${podcast["im:artist"].label}`}
            </h3>
          </Link>
        ))}
      </div>
    </>
  )
}
