"use client"

/* eslint-disable @next/next/no-img-element */
import React from "react"
import { image1, image2, image3 } from "@/assets"
import { useUnitStore } from "@/stores/unit-store-provider"
import { cn } from "@/utils/cn"
import { useIsomorphicLayoutEffect } from "framer-motion"
import { MapPin, Star } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { useMediaQuery } from "@/hooks/use-media-query"

import FavoriteButton from "../ui/favorite-button"
import GoBackButton from "../ui/go-back-button"
import OpenImageSliderButton from "../ui/open-image-slider-button"
import ShareButton from "../ui/share-button"

type Props = {}

const ImageGallery = (props: Props) => {
  const openImageSlider = useUnitStore((state) => state.openImageSlider)

  const matches = useMediaQuery("(max-width:1023px)")
  useIsomorphicLayoutEffect(() => {
    if (matches) document.getElementById("header")!.style.display = "none"
    if (!matches) document.getElementById("header")!.style.display = "flex"
    return () => {
      document.getElementById("header")!.style.display = "flex"
    }
  }, [matches])
  return (
    <>
      <main className="py-10 max-lg:hidden">
        <div className="container">
          <div className="mb-5 flex justify-between text-foreground-500 ">
            <div>
              <h1 className="mb-3 text-lg  font-medium text-gray-900 lg:text-3xl">
                اسم الوحدة
              </h1>
              <div className="flex grow items-center gap-3 text-sm text-gray-900">
                <div className="flex  items-center gap-1 ">
                  {new Array(5).fill("").map((e, i) => {
                    return (
                      <Star
                        size={15}
                        key={`stars_filled_${i}`}
                        className={cn(
                          "  text-yellow-400",
                          i < 5 ? "fill-yellow-400" : "fill-white",
                        )}
                      />
                    )
                  })}
                  <span>5</span>
                </div>
                <span className=" text-lg font-bold">.</span>
                <div className="flex items-center gap-2">
                  <MapPin
                    size={20}
                    strokeWidth={1.2}
                    className="text-primaryColor"
                  />
                  <span>المدينة</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <FavoriteButton />
              <ShareButton />
            </div>
          </div>
          {/* image gallery */}
          <div className="flex select-none gap-2 overflow-hidden rounded-2xl">
            <div className="group relative  aspect-square w-[44%]  cursor-pointer">
              <img
                loading="lazy"
                src={image3.src}
                className="h-full w-full object-cover"
                alt={"image"}
              />
              <span className="absolute inset-0 z-[1] bg-[#0000000f] duration-300 group-hover:bg-[#00000040]"></span>
              <OpenImageSliderButton className=" absolute bottom-10 right-10 z-[1]" />
            </div>
            <div className="grid w-[56%]  grid-cols-2 grid-rows-2 gap-3">
              {Array(4)
                .fill(0)
                .map((e, i) => {
                  return (
                    <div
                      key={i}
                      className=" group  relative aspect-[2.7/2.1] cursor-pointer overflow-hidden">
                      <img
                        src={image1.src}
                        className="h-full w-full object-cover"
                        alt={"image"}
                        loading="lazy"
                      />
                      <span className="absolute inset-0 z-[1] bg-[#0000000f] duration-300 group-hover:bg-[#00000040]"></span>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
      <main className=" relative block lg:hidden ">
        <GoBackButton className=" absolute right-4 top-4 z-10" />

        <div className="absolute left-4 top-4 z-10 flex gap-2">
          <FavoriteButton />
          <ShareButton />
        </div>
        <div className=" relative  min-h-[50vh] w-full ">
          <Swiper
            dir="ltr"
            className="w-full"
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 7500,
              disableOnInteraction: true,
            }}>
            {new Array(10).fill("").map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="h-[50vh] " onClick={openImageSlider}>
                    <img
                      src={image2.src}
                      alt={"image"}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </main>
    </>
  )
}

export default ImageGallery
