"use client"

import React from "react"
import { RadioGroup } from "@nextui-org/radio"
import { Select, SelectItem } from "@nextui-org/select"
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"

import { CustomRadio } from "../ui/custom-radio"

type Props = {}

const categories = [
  {
    value: "1",
    label: "تصنيف",
    icon: <ArrowDownWideNarrow className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    value: "2",
    label: "تصنيف",
    icon: <ArrowUpWideNarrow className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    value: "3",
    label: "تصنيف",
    icon: <ArrowDownWideNarrow className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    value: "4",
    label: "تصنيف",
    icon: <ArrowUpWideNarrow className="text-primaryColor" strokeWidth={1.25} />,
  },
]
const Category = (props: Props) => {
  return (
    <>
      <div className="hidden w-full  max-w-xs  lg:block">
        <Select
          items={categories}
          defaultSelectedKeys={"1"}
          labelPlacement="outside-left"
          classNames={{
            label: "text-lg",
            base: " items-center",
          }}
          size="lg"
          label="التصنيف"
          listboxProps={{
            itemClasses: {
              base: [
                "rounded-md",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
              ],
            },
          }}
          renderValue={(items) => {
            return items.map((category, i) => (
              <div key={category.key} className="flex w-52 items-center gap-2">
                <div className="flex items-center gap-2">
                  {category.data?.icon}
                  <span className="text-small"> {category.data?.label}</span>
                </div>
              </div>
            ))
          }}>
          {(category) => (
            <SelectItem key={category.value} value={category.value}>
              <div className="flex items-center gap-2">
                {category.icon}
                <span className="text-small"> {category.label}</span>
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
      <div className="lg:hidden">
        <RadioGroup label="التصنيف">
          {categories.map((category) => (
            <CustomRadio key={category.value} value={category.value}>
              <div className="flex items-center gap-2">
                {category.icon}
                <span className="text-small"> {category.label}</span>
              </div>
            </CustomRadio>
          ))}
        </RadioGroup>
      </div>
    </>
  )
}

export default Category
