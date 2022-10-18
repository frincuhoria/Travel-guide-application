import { useCallback, useState } from "react"
import { postTrip } from "../service/tripService"
import { ICreateTripReq } from "../types/ICreateTripReq"
import { ITrip } from "../types/ITrip"

export const useCreateTrip = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [trip, setTrip] = useState<ITrip>()
  const createTrip = useCallback(async (req: ICreateTripReq) => {
    try {
      setIsLoading(true)
      setIsError(false)
      const data = await postTrip(req)
      setTrip(data.items[0])
    } catch (err) {
      setIsError(true)
    }
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    isError,
    createTrip,
    trip,
  }
}
