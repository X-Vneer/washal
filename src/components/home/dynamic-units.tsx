"use client"

import React from "react"
import getUnitData from "@/api/services/get-unit-data"
import { useFavoriteStore } from "@/stores/favoriteStore"

import Units from "./units"

type Props = {
  title: string
}
const DynamicUnits = ({ title }: Props) => {
  const getFavoriteUnitsId = useFavoriteStore().favorites

  const favUnits = getFavoriteUnitsId.map((favId) => {
    return getUnitData(favId)[0]
  })

  return favUnits.length > 0 ? <Units units={favUnits} title={title} /> : <></>
}

export default DynamicUnits
