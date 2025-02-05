"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { image1, image2, image3, image4 } from "@/assets"
import { cn } from "@/utils/cn"
import { Button } from "@nextui-org/button"
import { ChevronLeft, ChevronRight, Eye, Sofa, Users } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { UnitType } from "@/types/unit"

import FavoriteButton from "./favorite-button"

type Props = {
  className?: string
  sliderWrapperClassName?: string
  unit?: UnitType
}
const UnitCard = ({ className, sliderWrapperClassName, unit }: Props) => {
  const [state, setState] = useState(false)
  // slider REf
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const images = unit?.images

  const searchParams = useSearchParams()
  const url = `/unit/${unit?.id}?${searchParams.toString()}`
  return (
    <Link
      href={url}
      className={cn(
        "relative flex cursor-pointer flex-col rounded-large bg-gray-50 p-2 shadow-small lg:flex-row",
        className,
      )}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        className={cn("relative lg:w-[325px]", sliderWrapperClassName)}>
        <Swiper
          onInit={() => setState(true)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          dir="ltr"
          className="!z-[unset] !h-full"
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          pagination={true}
          autoplay={{
            delay: 2500 + Math.random() * 1000,
            disableOnInteraction: true,
          }}
          spaceBetween={10}
          slidesPerView={1}>
          {images &&
            images.map((e, i) => (
              <SwiperSlide className="overflow-hidden rounded-2xl" key={i}>
                <div className="aspect-[3.1/2] h-full overflow-hidden rounded-2xl">
                  <img
                    loading="lazy"
                    src={e}
                    className="h-full w-full object-cover"
                    alt={"image"}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <Button
          ref={navigationPrevRef}
          title="previous slide"
          isIconOnly
          variant="light"
          radius="full"
          className="absolute left-1 top-1/2 z-[1] -translate-y-1/2">
          <ChevronLeft className="text-primaryColor" />
        </Button>
        <Button
          type="button"
          ref={navigationNextRef}
          title="next slide"
          isIconOnly
          variant="light"
          radius="full"
          className="absolute right-1 top-1/2 z-[1] -translate-y-1/2">
          <ChevronRight className="text-primaryColor" />
        </Button>
        {/* <span className="absolute right-2 top-3 z-[1] flex items-center gap-2 rounded-xl bg-[#ffffffcc] px-3 py-1">
          <Eye className="w-[18px] lg:w-[22px]" />
          <span className="text-[13px] font-semibold md:text-[15px]">10</span>
        </span> */}
        <FavoriteButton
          unitId={unit?.id as number}
          className="group absolute left-2 top-3 z-[1]"
        />
      </div>
      <div className="flex grow gap-2 p-4 max-lg:items-end max-lg:gap-2">
        <div>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">SAR {unit?.price} / ليلة</dd>
          </div>
          <div>
            <dt className="sr-only">العنوان</dt>

            <dd className="text-lg font-medium">{unit?.title}</dd>
          </div>
          <div>
            <div className="mt-5 flex items-center gap-8 text-xs">
              {unit?.bedrooms as number > 0 && (
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <Sofa strokeWidth={1.2} className="shrink-0 text-primaryColor" />

                  <p className="text-gray-500">
                    {unit?.bedrooms == 1
                      ? "غرفة واحدة"
                      : unit?.bedrooms == 2
                        ? "غرفتين"
                        : `${unit?.bedrooms} غرف`}
                  </p>
                </div>
              )}
              {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <Users strokeWidth={1.2} className="shrink-0 text-primaryColor" />

                <p className="text-gray-500">غرفتين</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default UnitCard
