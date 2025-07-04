"use client"

import { UnitType } from "@/types/unit"

import getUnitsData from "@/api/services/get-units-data"
import UnitCard from "../ui/unit-card"

type Props = {
  filteredUnits?: UnitType[]
}

const SearchedUnits = (props: Props) => {
  const units = getUnitsData()

  return (
    <>
      <div className="mt-5 grid justify-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {units.map((unit, i) => {
          return <UnitCard key={i} unit={unit} />
        })}
      </div>
    </>
  )
}

export default SearchedUnits
