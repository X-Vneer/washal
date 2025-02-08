"use client"

import React from "react"
import { useSearchedUnitsStore } from "@/stores/searched-units"

import { UnitType } from "@/types/unit"

import UnitCard from "../ui/unit-card"

type Props = {
  filteredUnits?: UnitType[]
}

const SearchedUnits = (props: Props) => {
  // await new Promise((res) => {
  //   setTimeout(() => res("resolved"), 4000)
  // })

  const { setSearchedUnits, searchedUnits = [] } = useSearchedUnitsStore()
  // console.log("🚀 ~ SearchedUnits ~ searchedUnits:", searchedUnits)

  return (
    <>
      <div className="mt-5 block grid-cols-2 gap-5 max-sm:space-y-4 sm:grid lg:block lg:space-y-5">
        {searchedUnits &&
          searchedUnits.map((unit, i) => {
            return <UnitCard key={i} unit={unit}/>
          })}
      </div>
    </>
  )
}

export default SearchedUnits
