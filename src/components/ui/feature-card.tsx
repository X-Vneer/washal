import React from "react"

type Props = {
  title: string
  des: string
  icon: React.ReactNode
}

const FeatureCard = ({ icon, title, des }: Props) => {
  return (
    <div className="flex gap-3">
      <div>{icon}</div>
      <div>
        <p className="mb-1 text-sm font-bold">{title}</p>
        <span className=" text-xs text-foreground-500">{des}</span>
      </div>
    </div>
  )
}

export default FeatureCard
