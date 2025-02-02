import React from "react"
import getRoomsData from "@/api/services/get-rooms-data"

import Hotels from "./hotels"

type Props = {
  title: string
  url?: string
}
const DynamicHotels = async ({ url, title }: Props) => {
  const getFakeData = await getRoomsData(url || "")

  return <Hotels hotels={getFakeData || []} title={title} />
}

export default DynamicHotels
