import React from "react"

import UnitCard from "../ui/unit-card"

type Props = {}

const Favorite = (props: Props) => {
  return (
    <div className="py-8">
      <div className=" block grid-cols-2 gap-5  sm:grid lg:grid-cols-3  ">
        {new Array(10).fill("").map((e, i) => {
          return (
            <UnitCard
              sliderWrapperClassName="lg:w-full"
              className="lg:flex-col"
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Favorite
