"use client"

import React from "react"
import { cn } from "@/utils/cn"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/modal"
import { ScrollShadow } from "@nextui-org/scroll-shadow"
import { Select, SelectItem } from "@nextui-org/select"
import { Slider } from "@nextui-org/slider"

import Category from "./category"

type Props = {
  className?: string
}

const cities = [
  { label: "فندق 1", value: "jadah" },
  { label: "فندق 2", value: "maka" },
  { label: "فندق 2", value: "city1" },
  { label: "فندق 3", value: "city2" },
  { label: "فندق 4", value: "city3" },
]

const Filters = ({ className }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isArrangementOpen,
    onOpen: onArrangementOpen,
    onClose: onArrangementClose,
  } = useDisclosure()

  const filters = (
    <>
      <div className="h-fit  w-full overflow-y-auto pb-5  ">
        <div className="flex items-center justify-between gap-2">
          <p className="mb-8 grow text-xl font-semibold text-gray-900 ">
            الفلاتر
            <span className=" mt-1 block text-sm text-foreground-500">
              تمتع بفلاتر عديدة
            </span>
          </p>
          <p className=" whitespace-nowrap">
            10
            <button type="button" className="bg-transparent text-sm">
              مسح الكل
            </button>
          </p>
        </div>
        <Accordion variant="splitted" selectionMode="multiple">
          <AccordionItem
            className="!shadow-small"
            key="1"
            aria-label="hotel name"
            title="اسم الفندق">
            <Select label="اختر فندق" className="w-full ">
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </Select>
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="2"
            aria-label="price"
            title="السعر">
            <div dir="ltr" lang="en" className="px-5">
              <Slider
                size="sm"
                label="السعر"
                formatOptions={{ style: "currency", currency: "SAR" }}
                step={10}
                defaultValue={[100, 500]}
                maxValue={1000}
                minValue={50}
                className="max-w-md"
              />
            </div>
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="3"
            aria-label="الاطلالات"
            title="الاطلالات">
            {"بحث"}
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="4"
            aria-label="الوجبات"
            title="الوجبات">
            {"بحث"}
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="5"
            aria-label="عدد الافراد"
            title="عدد الافراد">
            {"بحث"}
          </AccordionItem>
          <AccordionItem
            className="!shadow-small"
            key="6"
            aria-label="المميزات"
            title="المميزات">
            {"بحث"}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
  return (
    <>
      <div className={cn(`max-lg:hidden  lg:w-1/4`, className)}>{filters}</div>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-4">
                <ScrollShadow className=" h-[calc(100vh-20px)]">
                  {filters}
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isArrangementOpen} onClose={onArrangementClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-4">
                <Category />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <ButtonGroup
        radius="full"
        variant="shadow"
        className=" fixed bottom-10 left-1/2 z-10 -translate-x-1/2  lg:hidden">
        <Button onClick={onOpen} className="bg-primaryColor text-white">
          الفلاتر
        </Button>
        <Button onClick={onArrangementOpen} className="bg-primaryColor text-white">
          التصنيف
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Filters
