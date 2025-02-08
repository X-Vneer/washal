import React from "react"
import { cn } from "@/utils/cn"
import { Avatar } from "@nextui-org/avatar"
import { Star } from "lucide-react"

type PropsComment = {
  id: number
  img: string
  username: string
  comment: string
  rate: number
}
export const TestimonialCardComments = ({
  id,
  rate,
  username,
  img,
  comment,
}: PropsComment) => {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Avatar src={img} />
          <div>
            <div className="flex justify-center gap-0.5">
              {new Array(5).fill("").map((e, i) => {
                return (
                  <Star
                    key={`stars_filled_${i}`}
                    className={cn(
                      "h-5 w-5 text-yellow-500",
                      i < rate ? "fill-yellow-500" : "fill-white",
                    )}
                  />
                )
              })}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">{username}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{comment}</p>
      </blockquote>
    </div>
  )
}
