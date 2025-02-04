import React from "react"
import Image from "next/image"
import { cn } from "@/utils/cn"
import { Avatar } from "@nextui-org/avatar"
import { Star } from "lucide-react"

type Props = {
  date: string
  user: string
  rate: number
  comment: string
  img: string
}

const PeopleRate = (props: Props) => {
  return (
    <div className="flex gap-3 rounded-large border border-foreground-200 p-4">
      <Avatar src={props.img} className="shrink-0" />
      <div className="flex flex-1 flex-col">
        <div className="flex w-full items-center justify-between">
          <div className="flex">
            {new Array(5).fill("").map((e, i) => {
              return (
                <Star
                  size={15}
                  key={`stars_filled_${i}`}
                  className={cn(
                    "text-yellow-400",
                    i < props.rate ? "fill-yellow-400" : "fill-white",
                  )}
                />
              )
            })}
          </div>

          <div className="text-sm text-foreground-500">{`${props.date}`}</div>
          {/* <div className="text-sm text-foreground-500">{`${props.date.getDate()}/${props.date.getMonth() + 1}/${props.date.getFullYear()}`}</div>*/}
        </div>

        <div className="text-lg font-medium">{props.user}</div>
        <div className="max-w-[290px] text-sm text-foreground-500">
          {props.comment}
        </div>
      </div>
    </div>
  )
}

export default PeopleRate
