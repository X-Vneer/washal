import React from "react"
import Image, { type StaticImageData } from "next/image"
import { cn } from "@/utils/cn"

type Props = {
  image: StaticImageData
  title: string
  titleClassName?: string
}

const PageHero = ({ image, title, titleClassName }: Props) => {
  return (
    <section className=" relative overflow-hidden ">
      <div className=" relative h-[60vh] w-full   ">
        <Image src={image} alt="background" className="h-full w-full object-cover" />
        <div className=" absolute inset-0 flex items-center  justify-center">
          <h1 className={cn("text-[72px] font-bold text-white", titleClassName)}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default PageHero
