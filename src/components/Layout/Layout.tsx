import { AppShell } from "@mantine/core"
import React from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "../Navigation"

export const Layout = () => {
  return (
    <div>
      <AppShell
        styles={theme => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
        navbar={<Navigation />}
      >
        <Outlet />
      </AppShell>
    </div>
  )
}
