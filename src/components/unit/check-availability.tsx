"use client"

import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import { parseDateRange } from "@/utils/parse-date-range"
import { parseDate } from "@internationalized/date"
import { Button } from "@nextui-org/button"
import { useDisclosure } from "@nextui-org/modal"
import { Star, Users } from "lucide-react"

import { UnitType } from "@/types/unit"

import SmallScreenModalWrapper from "../common/small-screens-modal-wrapper"
import DateRangePicker from "../ui/date-range-picker"
import { WASHAL_CONTACT_NUMBER } from "@/utils/washal-number"

type Props = {
  unit: UnitType
}

const CheckAvailability = (props: Props) => {
  const VAT = 15
  const CleaningService = 15
  const dailyPrice = props.unit.price
  const searchParams = useSearchParams()
  const state = useState({
    start: parseDate(
      parseDateRange(searchParams.get("from"), searchParams.get("to")).range[0],
    ),
    end: parseDate(
      parseDateRange(searchParams.get("from"), searchParams.get("to")).range[1],
    ),
  })

  const parsedRange = parseDateRange(
    state[0].start.toString(),
    state[0].end.toString(),
  )
  

  let totalPrice =
    dailyPrice * parsedRange.nights +
    ((parsedRange.nights * VAT) / 100) * dailyPrice +
    CleaningService

  const modalState = useDisclosure()

  // handling reservation
  const encodedMessage = encodeURIComponent(
    `مرحبًا!
                    أنا مهتم بحجز مكان الإقامة
        (${props.unit.title}).
                      موعد وصولي هو ${state[0].start.toString()}
                           ومغادرتي هو ${state[0].start.toString()}،
          وسيكون السعر الإجمالي ${totalPrice} ريال سعودي.
             واسمحوا لي أن أعرف إذا كان متاحا.`,
  )

  const handleReservation = async () => {
    const phoneNumber = WASHAL_CONTACT_NUMBER
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <SmallScreenModalWrapper modalState={modalState}>
        <div className="border-foreground-200 max-lg:pt-10 lg:rounded-medium lg:border lg:p-5">
          <div className="mb-6 flex items-center justify-between">
            <p className="mt-2 text-sm text-foreground-500">
              <span className="text-lg font-bold text-primaryColor">
                SAR {props.unit.price}
              </span>{" "}
              في الليلة
            </p>
            <p className="flex items-center gap-2 text-sm text-foreground-500">
              <Star className={"h-5 w-5 fill-yellow-500 text-yellow-500"} />
              <span className="mt-2">5 (3 تقيميات)</span>
            </p>
          </div>
          <div className="relative w-full border-b">
            <DateRangePicker
              classNames={{
                button: "lg:h-16 bg-white hover:bg-white",
              }}
              state={state}
            />
            <div className="absolute bottom-4 left-1/2 top-2 z-10 w-[2px] translate-x-1/2 bg-foreground-300"></div>
          </div>

          <div className="space-y-4 border-b py-4">
            <p className="text-lg font-bold">تفاصيل السعر</p>
            <div className="flex items-center justify-between gap-4">
              <p>صافي إجمالي السعر في الليلة</p>
              <span className="font-bold">SAR {props.unit.price}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm text-foreground-500">
              <p>{VAT}% VAT في الليلة</p>
              <span>SAR {VAT}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm text-foreground-500">
              <p>عدد الليالي</p>
              <span> {parsedRange.label}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm text-foreground-500">
              <p>رسوم خدمة النظافة</p>
              <span>SAR {CleaningService}</span>
            </div>
          </div>
          <div className="flex justify-between py-4 text-lg font-bold">
            <p>إجمالي السعر</p>
            <span>{totalPrice} SAR</span>
          </div>
          <Button
            onClick={handleReservation}
            fullWidth
            size="lg"
            className="bg-primaryColor text-lg font-bold text-white">
            أحجز الان
          </Button>
        </div>
      </SmallScreenModalWrapper>
      <div className="fixed inset-x-0 bottom-0 bg-white px-4 pb-8 pt-4 shadow-medium lg:hidden">
        <Button
          onClick={modalState.onOpen}
          fullWidth
          size="lg"
          className="bg-primaryColor text-lg font-bold text-white">
          تفاصيل الحجز
        </Button>
      </div>
    </>
  )
}

export default CheckAvailability
