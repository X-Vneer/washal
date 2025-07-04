"use client"

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"
// import { image1, image2, image3, image4 } from "@/assets"
import { cn } from "@/utils/cn"
import { Button } from "@nextui-org/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { UnitType } from "@/types/unit"

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
        "relative flex cursor-pointer flex-col rounded-large bg-gray-50 p-2 shadow-small max-w-sm ",
        className
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
        className={cn("relative ", sliderWrapperClassName)}
      >
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
            delay: 3500 + Math.random() * 1000,
            disableOnInteraction: true,
          }}
          spaceBetween={10}
          slidesPerView={1}
        >
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
          className="absolute left-1 top-1/2 z-[1] -translate-y-1/2"
        >
          <ChevronLeft className="text-primaryColor" />
        </Button>
        <Button
          type="button"
          ref={navigationNextRef}
          title="next slide"
          isIconOnly
          variant="light"
          radius="full"
          className="absolute right-1 top-1/2 z-[1] -translate-y-1/2"
        >
          <ChevronRight className="text-primaryColor" />
        </Button>
      </div>
      <div className="flex grow gap-2 p-4 max-lg:items-end max-lg:gap-2">
        <div>
          <div>
            <dt className="sr-only">السعر</dt>

            <dd className="text-sm text-gray-500">
              ريال سعودي {unit?.price} / ليلة
            </dd>
          </div>
          <div>
            <dt className="sr-only">العنوان</dt>

            <dd className="text-lg font-medium">{unit?.title}</dd>
          </div>
          <div></div>
        </div>
      </div>
    </Link>
  )
}

export default UnitCard
