import React from "react"
import { testimonials } from "@/content/testimonials"

import TestimonialCard from "../ui/testimonial-card"

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-primaryColor sm:text-5xl">
          آراء عملائنا
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonials.map((element, index) => (
            <TestimonialCard {...element} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
