import React from "react"

import DynamicHotels from "@/components/home/dynamic-hotels"
import CheckAvailability from "@/components/unit/check-availability"
import ImageGallery from "@/components/unit/image-gallary"
import ImageSlider from "@/components/unit/image-slider"
import UnitDetails from "@/components/unit/unit-details"

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <div className="h-[72px] max-lg:hidden"></div>
      <ImageGallery />
      <ImageSlider />
      <section className="relative z-10 bg-white  max-lg:-mt-4 max-lg:rounded-large">
        <div className="container">
          <div className="flex max-lg:flex-col">
            <div className="lg:w-2/3">
              <UnitDetails />
            </div>
            <div className="lg:w-1/3">
              <CheckAvailability />
            </div>
          </div>
        </div>
      </section>
      <DynamicHotels title={"وحدات مشابهة"} url={""} />
    </>
  )
}

export default page
