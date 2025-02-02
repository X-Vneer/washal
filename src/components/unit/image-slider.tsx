"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react"
import { image2 } from "@/assets"
import { useUnitStore } from "@/stores/unit-store-provider"
import { Button } from "@nextui-org/button"
import { Modal, ModalBody, ModalContent } from "@nextui-org/modal"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

type Props = {}

const ImageSlider = (props: Props) => {
  const { showImageSlider, close } = useUnitStore((state) => ({
    showImageSlider: state.showImageSlider,
    close: state.closeImageSlider,
  }))
  const [state, setState] = useState(false)
  // slider REf
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <Modal
      classNames={{
        base: " bg-black/10 backdrop-blur",
        closeButton: "hover:bg-white/60 bg-white/50 active:bg-white/70 z-10",
      }}
      isOpen={showImageSlider}
      onClose={close}
      size="full">
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalBody dir="ltr" className="relative py-4 ">
                <Swiper
                  dir="ltr"
                  className="w-full"
                  onInit={() => setState(true)}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  loop={true}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  modules={[Autoplay, Navigation, Pagination]}
                  autoplay={{
                    delay: 7500,
                    disableOnInteraction: true,
                  }}>
                  {new Array(10).fill("").map((image, index) => {
                    return (
                      <SwiperSlide key={`slider_image_${index}`}>
                        <div className=" relative flex h-[calc(100vh-50px)] items-center justify-center p-10 lg:p-20   ">
                          <img
                            src={image2.src}
                            alt={""}
                            loading="lazy"
                            className=" h-full w-full max-w-[70vw] object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <Button
                  size="lg"
                  ref={navigationPrevRef}
                  title="previous slide"
                  isIconOnly
                  variant="light"
                  radius="full"
                  className=" absolute left-2 top-1/2 z-[1] -translate-y-1/2 lg:left-5  ">
                  <ChevronLeft size={30} className="text-primaryColor" />
                </Button>
                <Button
                  size="lg"
                  type="button"
                  ref={navigationNextRef}
                  title="next slide"
                  isIconOnly
                  variant="light"
                  radius="full"
                  className="absolute right-2 top-1/2 z-[1] -translate-y-1/2 lg:right-5">
                  <ChevronRight size={30} className="text-primaryColor" />
                </Button>
              </ModalBody>
            </>
          )
        }}
      </ModalContent>
    </Modal>
  )
}

export default ImageSlider
