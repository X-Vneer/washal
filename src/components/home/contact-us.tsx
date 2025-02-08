import React from "react"

import { WobbleCard } from "../ui/wobble-card"
import { WASHAL_CONTACT_NUMBER } from "@/utils/washal-number"

type Props = {}

const ContactUs = (props: Props) => {
  const phoneNumber = WASHAL_CONTACT_NUMBER // رقم الواتساب الخاص بك
  return (
    <a href={`https://wa.me/${phoneNumber}?`} target="_blank" >
      <section id="contact-us" className="py-10">
        <div className="container">
          <WobbleCard>
            <div className="relative z-10 text-center text-white">
              <h2 className="mb-4 text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
                احجز معنا الان عبر الواتساب
              </h2>
              <div>احجز الان</div>
            </div>
          </WobbleCard>
        </div>
      </section>
    </a>
  )
}

export default ContactUs
