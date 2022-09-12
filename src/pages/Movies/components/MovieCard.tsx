import { Card, Image, Text } from "@mantine/core"
import React from "react"
import { IMovie } from "../../../types/IMovie"
import { useStyles } from "./style"
import "./styles2.css"
import clsx from "clsx"
interface MovieCardProps {
  movie: IMovie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { classes } = useStyles()
  return (
    <Card
      className={clsx(classes.movieCard, true && classes.movieCard2)}
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
    >
      <Card.Section>
        <Image
          src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
          height={160}
          alt='Norway'
        />
      </Card.Section>
      <Text size='xl' weight={700}>
        {movie.title}
      </Text>
      <Text size='sm'>{movie.description}</Text>
      <Text color='red'> Rating: {movie.rating}</Text>
    </Card>
  )
}
