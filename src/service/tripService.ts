import axios from "axios"
import { ICardsPagination } from "../types/ICardsPagination"
import { ICreateTripReq } from "../types/ICreateTripReq"
import { IUpdateTripReq } from "../types/IUpdateTripReq"
import { ITrip } from "../types/ITrip"

const axiosInstance = axios.create({
  baseURL: "http://localhost:5004"
})

export const getCards = async () => {
  const { data } = await axiosInstance.get<ICardsPagination>("/products")
  console.log(data);
  return data.items
}


export const getTrip = async (_uuid: string) => {
    const { data } = await axiosInstance.get<ITrip>(`/products/${_uuid}`)
    return data
  }
  
export const postTrip = async (req: ICreateTripReq) => {
    const { data } = await axiosInstance.post<{ items: ITrip[] }>("/products", [
      req,
    ])
    return data
  }

export const deleteTrip = async (_uuid: string) => {
  const { data } = await axiosInstance.delete<ITrip>(`/products/${_uuid}`)
  return data
}

export const putTrip = async (req: IUpdateTripReq) => {
  const { _uuid, ...rest } = req
  const { data } = await axiosInstance.put<ITrip>(`/products/${_uuid}`, rest)
  return data
}

