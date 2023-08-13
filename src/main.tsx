import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { podcastsListApi } from "./services/podcast.service.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={podcastsListApi}>
      <App />
    </ApiProvider>
  </StrictMode>
)
