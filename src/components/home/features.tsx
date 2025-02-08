import React from "react"
import { features } from "@/content/features"

import FeatureCard from "../ui/feature-card"

type Props = {}

const Features = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, index) => {
            return <FeatureCard {...feat} key={`feature_card_${index}`} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
