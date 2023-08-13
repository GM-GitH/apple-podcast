import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Podcast, Episode } from "@/pages"
import { HomeLayout, PodcastLayout } from "@/layouts"

export default function App() {
  return (
    <>
      <BrowserRouter basename="/apple-podcast">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="podcast" element={<PodcastLayout />}>
              <Route path=":podcastId" element={<Podcast />} />
              <Route
                path=":podcastId/episode/:episodeId"
                element={<Episode />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
