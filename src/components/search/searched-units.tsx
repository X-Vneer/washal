import React from "react"

import UnitCard from "../ui/unit-card"

type Props = {}

const SearchedUnits = async (props: Props) => {
  await new Promise((res) => {
    setTimeout(() => res("resolved"), 4000)
  })

  return (
    <>
      <div className=" mt-5 block grid-cols-2 gap-5 max-sm:space-y-4 sm:grid lg:block lg:space-y-5">
        {new Array(10).fill("").map((e, i) => {
          return <UnitCard key={i} />
        })}
      </div>
    </>
  )
}

export default SearchedUnits
