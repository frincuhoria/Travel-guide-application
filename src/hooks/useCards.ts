import { useState, useEffect } from "react"
import { getCards } from "../service/tripService"
import { ITrip } from "../types/ITrip"

export const useCards = () => {
  const [cards, setCards] = useState<ITrip[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const data = await getCards()
        setCards(data)
      } catch (err) {
        setIsError(true)
      }
      setIsLoading(false)
    })()
  }, [])

  return {
    cards,
    isLoading,
    isError,
  }
}
