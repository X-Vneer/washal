"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { getLocalTimeZone, parseDate, today } from "@internationalized/date"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { Button } from "@nextui-org/button"
import { type Selection } from "@nextui-org/react"
import { Select, SelectItem } from "@nextui-org/select"
import { Search } from "lucide-react"

import DateRangePicker from "../ui/date-range-picker"

type Props = {
  initial?: {
    city: string | undefined
    from: string | undefined
    to: string | undefined
    guests: string | undefined
  }
}
export const cities = [
  { label: "جدة", value: "jadah" },
  { label: "مكة", value: "maka" },
  { label: "مدينة 2", value: "city1" },
  { label: "مدينة 3", value: "city2" },
  { label: "مدينة 4", value: "city3" },
]

const SearchBar = ({ initial }: Props) => {
  // city
  const [city, setCity] = useState<Selection>(
    new Set([initial?.city ? initial.city : ""]),
  )
  const [guests, setGuests] = useState<Selection>(
    new Set([initial?.guests ? initial.guests : ""]),
  )
  let [value, setValue] = useState({
    start: initial?.from ? parseDate(initial.from) : today(getLocalTimeZone()),
    end: initial?.to
      ? parseDate(initial.to)
      : today(getLocalTimeZone()).add({ days: 1 }),
  })

  const canSearch =
    !!Array.from(city)[0] && !!Array.from(guests)[0] && !!value.start && !!value.end

  const router = useRouter()
  const handleSearch = () => {
    const selectedCity = Array.from(city)[0]
    const numberOfGuests = Array.from(guests)[0]
    let url = `/search/${selectedCity}?from=${value.start}&to=${value.end}&guests=${numberOfGuests}`
    router.push(url)
  }
  return (
    <div className="container relative z-10 -translate-y-10 md:-translate-y-1/2 lg:px-20 ">
      <div className="hidden items-center rounded-large  bg-[#f4f4f5]  shadow-lg max-md:flex-col max-md:gap-4  max-md:p-4 md:flex">
        <div className="w-full md:w-1/4">
          <Select
            selectedKeys={city}
            onSelectionChange={setCity}
            size="lg"
            label="ما هي وجهتك؟"
            className="w-full "
            classNames={{
              trigger: "md:h-20",
            }}>
            {cities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <DateRangePicker className="md:w-1/2" state={[value, setValue]} />

        <div className="w-full md:w-1/4">
          <Select
            selectedKeys={guests}
            onSelectionChange={setGuests}
            classNames={{
              trigger: "md:h-20",
            }}
            size="lg"
            label="عدد الضيوف؟"
            className="w-full ">
            {new Array(15).fill("").map((item, index) => (
              <SelectItem key={index + 1} value={index + 1}>
                {index + 1 + ""}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="grow px-4">
          <Button onClick={handleSearch} isDisabled={!canSearch} isIconOnly>
            <Search className="text-primaryColor" />
          </Button>
        </div>
      </div>
      <Accordion variant="splitted" className="md:hidden">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="ما هي وجهتك؟"
          indicator={<Search className=" -rotate-90" />}>
          <div className="flex items-center  rounded-large   max-md:flex-col max-md:gap-4  max-md:p-4 ">
            <div className="w-full md:w-1/4">
              <Select
                selectedKeys={city}
                onSelectionChange={setCity}
                size="lg"
                label="ما هي وجهتك؟"
                className="w-full "
                classNames={{
                  trigger: "md:h-20",
                }}>
                {cities.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <DateRangePicker state={[value, setValue]} />

            <div className="w-full md:w-1/4">
              <Select
                selectedKeys={guests}
                onSelectionChange={setGuests}
                classNames={{
                  trigger: "md:h-20",
                }}
                size="lg"
                label="عدد الضيوف؟"
                className="w-full ">
                {new Array(15).fill("").map((item, index) => (
                  <SelectItem key={index + 1} value={index + 1}>
                    {index + 1 + ""}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="grow px-4">
              <Button onClick={handleSearch} isDisabled={!canSearch} isIconOnly>
                <Search className="text-primaryColor" />
              </Button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default SearchBar
