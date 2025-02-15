"use client"

import React from "react"
import Image from "next/image"
import { sliderImages } from "@/content/hero-section"
import { cn } from "@/utils/cn"
import { domAnimation, LazyMotion, m } from "framer-motion"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { image5 } from "../../../public/assets/images/hotel_1"

const textVariants = {
  hidden: (custom: number) => ({
    y: custom < 2 ? 20 : 0,
    x: custom >= 2 ? 20 : 0,
    opacity: 0,
  }),
  visible: () => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  }),
}
const handleDragStart = (e: React.MouseEvent) => e.preventDefault()
const HeroSection = () => {
  const items = sliderImages.map((data, i) => {
    return (
      <SwiperSlide key={i}>
        <m.div
          initial={{
            filter: "blur(8px)",
          }}
          whileInView={{
            filter: "blur(0px)",
            transition: {
              delay: 0.4,
            },
          }}
          className={`relative h-[70vh] cursor-grab select-none overflow-hidden md:h-[91vh]`}>
          {/* <img
            alt=""
            src={data.image || "/path/to/default/image.jpg"}
            className="h-full w-full object-cover "
            loading="lazy"
          /> */}
          <Image
            alt="background slider "
            src={data.image || image5}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
            onDragStart={handleDragStart}
            role="presentation"
            // className="h-full w-full"
          />
          {/* <Image
            loading="lazy"
            className="h-full w-full object-cover "
            onDragStart={handleDragStart}
            role="presentation"
            src={data.image}
            alt="background slider "
          /> */}
          <div
            className="z-1 absolute inset-y-0 left-1/4 right-0 mt-auto flex items-center duration-300"
            style={{
              background: `linear-gradient(to left ,rgba(0,0,0,.5),rgba(0,0,0,.4),rgba(0,0,0,.2),rgba(0,0,0,.1),transparent)`,
            }}>
            <div
              className={`p-3 pr-8 text-right leading-relaxed lg:max-w-[750px] lg:pr-20`}>
              {data.content.map((e, i) => {
                return (
                  <m.h2
                    key={e.title}
                    variants={textVariants}
                    initial={"hidden"}
                    whileInView="visible"
                    custom={i + 1}
                    className={cn(
                      "select-none font-bold text-white",
                      e.size === "lg" &&
                        "my-10 whitespace-pre-wrap text-[18px] md:text-[22px] lg:text-[26px]",
                      e.size === "sm" && "text-primaryColor md:text-lg",
                    )}>
                    {e.title}
                  </m.h2>
                )
              })}
            </div>
          </div>
        </m.div>
      </SwiperSlide>
    )
  })
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden">
        <div className="w-full">
          <Swiper
            className="!z-[unset]"
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            spaceBetween={30}
            slidesPerView={1}>
            {items}
          </Swiper>
        </div>

        <svg
          className="absolute -bottom-1 -left-2 -right-2 z-[1] w-[101vw] max-w-none fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none">
          <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
        </svg>
      </section>
    </LazyMotion>
  )
}

export default HeroSection
