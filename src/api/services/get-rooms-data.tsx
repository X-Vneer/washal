import { HotelType } from "@/types/hotels"

import fourSeasonsHotelApi from ".."

export const RoomsTypes: HotelType[] = [
  {
    id: "1",
    src: "",
    price: 240000,
    bedroomNum: 4,
    bathroomsNum: 4,
    parkingNum: 2,
    address: "MakKa",
  },
  {
    id: "2",
    src: "",
    price: 300000,
    bedroomNum: 8,
    bathroomsNum: 5,
    parkingNum: 4,
    address: "Gaza",
  },
  {
    id: "3",
    src: "",
    price: 280000,
    bedroomNum: 5,
    bathroomsNum: 3,
    parkingNum: 3,
    address: "MakKa",
  },
  {
    id: "4",
    src: "",
    price: 220000,
    bedroomNum: 4,
    bathroomsNum: 3,
    parkingNum: 2,
    address: "Jerusalem",
  },
  {
    id: "5",
    src: "",
    price: 240000,
    bedroomNum: 4,
    bathroomsNum: 3,
    parkingNum: 2,
    address: "MakKa",
  },
  {
    id: "6",
    src: "",
    price: 240500,
    bedroomNum: 5,
    bathroomsNum: 3,
    parkingNum: 2,
    address: "Jerusalem",
  },
  {
    id: "7",
    src: "",
    price: 250800,
    bedroomNum: 6,
    bathroomsNum: 4,
    parkingNum: 3,
    address: "ٌRafah",
  },
  {
    id: "8",
    src: "",
    price: 200000,
    bedroomNum: 4,
    bathroomsNum: 2,
    parkingNum: 2,
    address: "MakKa",
  },
  {
    id: "9",
    src: "",
    price: 180000,
    bedroomNum: 4,
    bathroomsNum: 2,
    parkingNum: 1,
    address: "MakKa",
  },
]

const getRoomsData = async (url: string = "") => {
  if (url == "") return RoomsTypes
  const response = await fourSeasonsHotelApi.get<HotelType[]>("/rooms")
  const data = response.data
  return data
}

export default getRoomsData
