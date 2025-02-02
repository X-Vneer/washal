import React from "react"

import { WobbleCard } from "../ui/wobble-card"

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <section id="contact-us" className="py-10">
      <div className="container">
        <WobbleCard>
          <div className="relative z-10 text-center text-white">
            <h2 className="mb-4 text-balance  text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              احجز معنا الان عبر الواتساب
            </h2>
            <a href="" target="_blank">
              احجز الان
            </a>
          </div>
        </WobbleCard>
      </div>
    </section>
  )
}

export default ContactUs
