import React from "react"
import { cn } from "@/utils/cn"

type Props = {
  date: string | Date
  className?: string
}

const DateFormatter = ({ date, className }: Props) => {
  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const dateArray = formattedDate.split(" ")
  return (
    <p className={cn("inline-block text-sm font-medium ", className)}>
      <span className="font-bold text-primaryColor ">{dateArray[0]}</span>{" "}
      <span>{dateArray[1]}</span> <span>{dateArray[2]}</span>{" "}
    </p>
  )
}

export default DateFormatter
