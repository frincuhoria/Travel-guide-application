import { Grid } from "@mantine/core"
import React from "react"
import mockMovies from "../../MOCK_DATA.json"
import { IMovie } from "../../types/IMovie"
import { MovieCard } from "./components/MovieCard"
export const Movies = () => {
  return (
    <div>
      <Grid gutter='xl'>
        {mockMovies.map(movie => (
          <Grid.Col sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}
