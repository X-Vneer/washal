import React from "react"
import getUnitsData from "@/api/services/get-units-data"
import { testimonials } from "@/content/testimonials"

import { TestimonialCardComments } from "../ui/testimonial-card"

type Props = {}

const Testimonials = (props: Props) => {
  // const comments = getUnitsData().flatMap((item) =>
  //   item.ratings.slice(0,2).map((rating) => rating),
  // )
  // console.log("🚀 ~ Testimonials ~ comments:", comments)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 id="client-opinions" className="text-center text-4xl font-bold tracking-tight text-primaryColor sm:text-5xl">
          آراء عملائنا
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonials.map((element, index) => (
            <TestimonialCardComments {...element} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
