import React from "react"
import getUnitData from "@/api/services/get-unit-data"

import { UnitType } from "@/types/unit"
import DynamicUnits from "@/components/home/dynamic-units"
import CheckAvailability from "@/components/unit/check-availability"
import ImageSlider from "@/components/unit/image-slider"
import UnitDetails from "@/components/unit/unit-details"
import ImageGallery from "@/components/unit/image-gallery"

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug // No need to await params

  const unitData: UnitType = getUnitData(Number(slug))[0] // Convert slug to a number

  if (!unitData) {
    return { error: "Unit not found" } // Handle case where unit is not found
  }

  return (
    <>
      <div className="h-[72px] max-lg:hidden"></div>
      <ImageGallery unit={unitData} />
      <ImageSlider unit={unitData} />
      <section className="relative z-10 bg-white max-lg:-mt-4 max-lg:rounded-large">
        <div className="container">
          <div className="flex max-lg:flex-col">
            <div className="lg:w-2/3">
              <UnitDetails unit={unitData} />
            </div>
            <div className="lg:w-1/3">
              <CheckAvailability unit={unitData} />
            </div>
          </div>
        </div>
      </section>

      <DynamicUnits title={"وحدات مفضلة"} />
    </>
  )
}

export default page
