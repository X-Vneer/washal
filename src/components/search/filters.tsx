"use client"

import React, { useEffect, useState } from "react"
import getUnitData from "@/api/services/get-unit-data"
import getUnitsData from "@/api/services/get-units-data"
import { useSearchedUnitsStore } from "@/stores/searched-units"
import { cn } from "@/utils/cn"
import { CalendarDate } from "@internationalized/date"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/modal"
import { ScrollShadow } from "@nextui-org/scroll-shadow"
import { Select, SelectItem } from "@nextui-org/select"
import { Slider } from "@nextui-org/slider"

import { UnitType } from "@/types/unit"

import Category from "./category"

type Props = {
  className?: string
}

export const features = [
  { key: "kitchen", label: "مطبخ" },
  { key: "hall", label: "صالة واسعة" },
  { key: "balcony", label: "بلكونة" },
  { key: "swimming_pool", label: "مسبح" },
  { key: "grill", label: "شواية" },
  { key: "garden", label: "حديقة" },
]

const unitsName = getUnitsData().map((unit) => {
  return { label: unit.title, value: unit.id }
})

const Filters = ({ className }: Props) => {
  const { setSearchedUnits, searchedUnits } = useSearchedUnitsStore()
  // console.log("🚀 ~ zustand ~ searchedUnits:", searchedUnits)

  const [unitsData, setUnitsData] = useState<UnitType[]>(getUnitsData()) // Store all unit data
  const [filteredUnits, setFilteredUnits] = useState<UnitType[]>(unitsData) // Store filtered units

  const [selectedUnit, setSelectedUnit] = useState("")
  const [priceRange, setPriceRange] = useState<number | number[]>([100, 1200])
  const [numRooms, setNumRooms] = useState<number>(5)

  const [selectedFeatures, setSelectedFeatures] = useState(new Set([]))

  const clearAllFeatures = () => {
    setFilteredUnits(unitsData)
    setSelectedUnit("")
    setPriceRange([100, 1200])
    setNumRooms(5)
    setSelectedFeatures(new Set([]))
    /* update zustand */
    setSearchedUnits(unitsData)
  }

  useEffect(() => {
    if (selectedUnit) {
      console.log("🚀 ~ useEffect ~ selectedUnit:", selectedUnit)
      const unitSe = getUnitData(Number(selectedUnit))
      setFilteredUnits(unitSe)
      setSearchedUnits(unitSe)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUnit])

  useEffect(() => {
    setSelectedUnit("")
    const features = Array.from(selectedFeatures)
    const filtered = unitsData.filter((unit) => {
      for (const feature of features) {
        if (feature !== "") {
          if (!unit[feature] || unit[feature] == 0) {
            return false
          }
        }
      }
      return (
        Array.isArray(priceRange) &&
        unit.price >= priceRange[0] &&
        unit.price <= priceRange[1] &&
        unit.bedrooms <= numRooms
      )
    })
    setFilteredUnits(filtered)
    setSearchedUnits(filtered)

    // if (selectedUnit) {
    //   console.log("🚀 ~ useEffect ~ selectedUnit:", selectedUnit)
    //   const unitSe = getUnitData(Number(selectedUnit))
    //   setFilteredUnits(unitSe)
    //   setSearchedUnits(unitSe)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceRange, numRooms, selectedFeatures])

  const handleUnitSelect = (value: string) => {
    setSelectedUnit(value)
  }

  const handlePriceChange = (value: number | number[]) => {
    setPriceRange(value)
  }

  const handleNumRoomsChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setNumRooms(value[0])
    } else {
      setNumRooms(value)
    }
  }

  const handleFeaturesSelect = (e: any) => {
    setSelectedFeatures(new Set(e.target.value.split(",")))
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isArrangementOpen,
    onOpen: onArrangementOpen,
    onClose: onArrangementClose,
  } = useDisclosure()

  const filters = (
    <>
      <div className="h-fit w-full overflow-y-auto pb-5">
        <div className="flex items-center justify-between gap-2">
          <p className="mb-8 grow text-xl font-semibold text-gray-900">
            الفلاتر
            <span className="mt-1 block text-sm text-foreground-500">
              تمتع بفلاتر عديدة
            </span>
          </p>
          <p className="whitespace-nowrap">
            {filteredUnits && filteredUnits.length}
            <button
              type="button"
              className="bg-transparent text-sm"
              onClick={clearAllFeatures}>
              مسح الكل
            </button>
          </p>
        </div>
        <Accordion variant="splitted" selectionMode="multiple">
          <AccordionItem
            className="!shadow-small"
            key="1"
            aria-label="unit name"
            title="اسم الوحدة">
            <Select
              label="اختر وحدة"
              className="w-full"
              value={selectedUnit}
              onChange={(e) => handleUnitSelect(e.target.value)}>
              {unitsName.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </Select>
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="2"
            aria-label="price"
            title="السعر">
            <div dir="ltr" lang="en" className="flex justify-center px-5">
              <Slider
                size="sm"
                label="السعر"
                formatOptions={{ style: "currency", currency: "SAR" }}
                step={10}
                defaultValue={priceRange}
                maxValue={1200}
                minValue={50}
                className="max-w-md"
                value={priceRange}
                onChange={handlePriceChange}
              />
            </div>
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="3"
            aria-label="price"
            title="عدد الغرف">
            <div dir="ltr" lang="en" className="flex justify-center px-5">
              <Slider
                size="sm"
                // label="عدد الغرف"
                // formatOptions={{ style: "currency", currency: "SAR" }}
                step={1}
                marks={[
                  {
                    value: 1,
                    label: "1",
                  },
                  {
                    value: 2,
                    label: "2",
                  },
                  {
                    value: 3,
                    label: "3",
                  },
                  {
                    value: 4,
                    label: "4",
                  },
                  {
                    value: 5,
                    label: "5",
                  },
                ]}
                defaultValue={5}
                maxValue={5}
                minValue={1}
                className="max-w-md"
                value={numRooms} // Bind value to state
                onChange={handleNumRoomsChange} // Add onChange handler
              />
            </div>
          </AccordionItem>

          <AccordionItem
            className="!shadow-small"
            key="4"
            aria-label="المميزات"
            title="المميزات">
            <Select
              className="max-w-xs"
              label="المميزات"
              selectionMode="multiple"
              selectedKeys={selectedFeatures}
              onChange={handleFeaturesSelect} // Add onChange handler
            >
              {features.map((feature) => (
                <SelectItem key={feature.key} value={feature.key}>
                  {feature.label}
                </SelectItem>
              ))}
            </Select>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
  return (
    <>
      <div className={cn(`max-lg:hidden lg:w-1/4`, className)}>{filters}</div>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-4">
                <ScrollShadow className="h-[calc(100vh-20px)]">
                  {filters}
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* <Modal isOpen={isArrangementOpen} onClose={onArrangementClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-4">
                <Category />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}
      <ButtonGroup
        radius="full"
        variant="shadow"
        className="fixed bottom-10 left-1/2 z-10 -translate-x-1/2 lg:hidden">
        <Button onClick={onOpen} className="bg-primaryColor text-white">
          الفلاتر
        </Button>
        {/* <Button onClick={onArrangementOpen} className="bg-primaryColor text-white">
          التصنيف
        </Button> */}
      </ButtonGroup>
    </>
  )
}

export default Filters
