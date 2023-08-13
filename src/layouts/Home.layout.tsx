import { Link, Outlet } from "react-router-dom"
import { usePodcastData } from "@/hooks/usePodcastData"

export const HomeLayout = (): JSX.Element => {
  const { isLoadingOrFetching } = usePodcastData()

  return (
    <>
      <nav className="mb-4">
        <Link to="/">
          <h1 className="inline-block text-sky-700 text-2xl font-bold px-4 py-2 hover:text-red-700 transition-all duration-300 hover:scale-105">
            Podcaster
          </h1>
        </Link>
        {isLoadingOrFetching && (
          <div className="absolute right-12 top-3 w-6 h-6 border-8 border-solid border-slate-200 rounded-full border-t-8 border-t-sky-600 animate-spin"></div>
        )}
        <hr />
      </nav>
      <Outlet />
    </>
  )
}
