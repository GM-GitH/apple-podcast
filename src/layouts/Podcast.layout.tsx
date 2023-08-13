import { Outlet } from "react-router-dom"
import { usePodcastData } from "@/hooks/usePodcastData"

export const PodcastLayout = (): JSX.Element => {
  const { podcaster, podcasterDescription } = usePodcastData()

  return (
    <div className="lg:flex">
      <div className="p-2 m-2 shadow-custom rounded lg:w-72 lg:ml-6 lg:mr-16 flex-shrink-0">
        <img
          className="mx-auto mb-1 w-80 h-80 rounded lg:w-40 lg:h-40 lg:mt-4"
          src={podcaster?.artworkUrl600.replace("600x600", "480x480")}
          alt={podcaster?.artistName}
          loading="lazy"
          decoding="async"
        />
        <div className="px-2 py-4">
          <hr />
          <h1 className="font-semibold text-md pt-3">
            {podcaster?.collectionName}
          </h1>
          <h2 className="font-semibold text-sm italic text-gray-600 pb-3">{`by ${
            podcaster?.artistName ?? ""
          }`}</h2>
          <hr />
        </div>
        <div className="px-2">
          <h3 className="font-semibold text-sm text-gray-600 pb-3">
            Description
          </h3>
          <p className="text-sm italic text-gray-600 break-words pb-3">
            {podcasterDescription}
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
