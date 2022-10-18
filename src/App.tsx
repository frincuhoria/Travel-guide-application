import { MantineProvider } from "@mantine/core"
import React from "react"

import { AppRoutes } from "./AppRoutes"

const App = () => {
  return (
    <MantineProvider>
      <AppRoutes />
    </MantineProvider>
  )
}

export default App
