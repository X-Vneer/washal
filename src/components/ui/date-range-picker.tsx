"use client"

import React from "react"
import { cn } from "@/utils/cn"
import { getLocalTimeZone, today, type CalendarDate } from "@internationalized/date"
import { RangeCalendar } from "@nextui-org/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover"
import { CalendarDaysIcon } from "lucide-react"

import DateFormatter from "../ui/date-formatter"

type Props = {
  className?: string
  classNames?: {
    button?: string
  }
  state: [
    { start: CalendarDate; end: CalendarDate },
    React.Dispatch<
      React.SetStateAction<{
        start: CalendarDate
        end: CalendarDate
      }>
    >,
  ]
}

const DateRangePicker = ({ state, className, classNames }: Props) => {
  const [value, setValue] = state
  return (
    <>
      <Popover placement="bottom">
        <PopoverTrigger>
          <div className={cn("relative flex w-full ", className)}>
            <div className="block w-1/2">
              <button
                type="button"
                className={cn(
                  " block h-16 w-full rounded-large  bg-default-100 px-3",
                  " py-2.5 duration-150 hover:bg-default-200 md:h-20 lg:h-20 ",
                  classNames?.button,
                )}>
                <span className="   flex items-center justify-center  gap-2 text-sm text-default-600">
                  <CalendarDaysIcon size={18} />
                  تاريخ الدخول
                </span>
                <DateFormatter date={value.start.toString()} />
              </button>
            </div>
            <div className="block w-1/2">
              <button
                type="button"
                className={cn(
                  " block h-16 w-full rounded-large  bg-default-100 px-3",
                  "py-2.5 duration-150 hover:bg-default-200 md:h-20 lg:h-20 ",
                  classNames?.button,
                )}>
                <span className="   flex items-center justify-center  gap-2 text-sm text-default-600">
                  <CalendarDaysIcon size={18} />
                  تاريخ الخروج
                </span>
                <DateFormatter date={value.end.toString()} />
              </button>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="!bg-transparent !p-0 !shadow-none">
          <div dir="ltr" lang="en" className=" hidden md:block">
            <RangeCalendar
              value={value}
              onChange={setValue}
              pageBehavior="single"
              minValue={today(getLocalTimeZone())}
              aria-label="Date (Visible Month)"
              visibleMonths={2}
            />
          </div>
          <div dir="ltr" lang="en" className="block md:hidden">
            <RangeCalendar
              value={value}
              onChange={setValue}
              pageBehavior="single"
              minValue={today(getLocalTimeZone())}
              aria-label="Date (Visible Month)"
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DateRangePicker
