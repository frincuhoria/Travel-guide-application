import { MantineProvider } from "@mantine/core"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppRoutes } from "./pages/AppRoutes"

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "dark" }}
      >
        <AppRoutes />
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
