import { useEffect, useState } from "react"
import { getTrip } from "../service/tripService"
import { ITrip } from "../types/ITrip"

export const useTrip = (uuid: string) => {
  const [trip, setTrip] = useState<ITrip>()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        setIsError(false)
        const data = await getTrip(uuid)
        setTrip(data)
      } catch (err) {
        setIsError(true)
      }
      setIsLoading(false)
    })()
  }, [uuid])

  return {
    trip,
    isLoading,
    isError,
  }
}
