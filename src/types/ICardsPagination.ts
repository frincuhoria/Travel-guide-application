import { ITrip } from "./ITrip"

export interface ICardsPagination {
  cursor: unknown
  items: ITrip[]
  next_page: unknown
}
