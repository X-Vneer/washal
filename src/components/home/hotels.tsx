"use client"

import React, { useRef, useState } from "react"
import { Button } from "@nextui-org/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { HotelType } from "@/types/hotels"

import Card from "../ui/card"

// type Props = {
//   hotels: HotelType[]
//   title: string
// }

type Props = {
  hotels: HotelType[]
  title: string
}
const Hotels = ({ hotels, title }: Props) => {
  const [state, setState] = useState(false)

  const items = hotels.map((hotel) => {
    return (
      <SwiperSlide key={hotel.id}>
        <Card {...hotel} />
      </SwiperSlide>
    )
  })

  // slider REf
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="py-10">
      <div className="container">
        <div className="mb-6 flex justify-between">
          <div className="text-xl font-medium lg:text-2xl">{title}</div>
          <div className="flex gap-3">
            <Button
              variant="light"
              isIconOnly
              aria-label="next"
              ref={navigationPrevRef}>
              <ChevronRight className="text-primaryColor" />
            </Button>
            <Button
              variant="light"
              isIconOnly
              aria-label="previous"
              ref={navigationNextRef}>
              <ChevronLeft className="text-primaryColor" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container !px-1">
        <Swiper
          onInit={() => setState(true)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation]}
          dir={"rtl"}
          className="!z-[unset]"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          spaceBetween={0}
          slidesPerView={1.2}
          breakpoints={{
            768: {
              slidesPerView: 2.3,
              spaceBetween: 0,
            },
            1028: {
              slidesPerView: 3.3,
              spaceBetween: 0,
            },
          }}>
          {items}
        </Swiper>
      </div>
    </section>
  )
}

export default Hotels
