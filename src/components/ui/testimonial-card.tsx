import React from "react"
import { cn } from "@/utils/cn"
import { Avatar } from "@nextui-org/avatar"
import { Star } from "lucide-react"

type Props = {
  src: string
  name: string
  content: string
  rate: number
}

const TestimonialCard = ({ src, name, content, rate }: Props) => {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Avatar src={src} />
          <div>
            <div className="flex justify-center gap-0.5 ">
              {new Array(5).fill("").map((e, i) => {
                return (
                  <Star
                    key={`stars_filled_${i}`}
                    className={cn(
                      "h-5 w-5  text-yellow-500",
                      i < rate ? "fill-yellow-500" : "fill-white",
                    )}
                  />
                )
              })}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{content}</p>
      </blockquote>
    </div>
  )
}

export default TestimonialCard
