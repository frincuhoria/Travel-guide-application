import { Button } from "@mantine/core"
import React from "react"
import { Layout } from "../../components/Layout/Layout"

export const Home = () => {
  return (
    <div style={{ height: 500, width: 200 }} className='movieCard'>
      <Button color='indigo' radius='lg' size='xl'>
        Settings
      </Button>
    </div>
  )
}
