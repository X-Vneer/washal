import React from "react"
import getUnitData from "@/api/services/get-unit-data"
import getUnitsData from "@/api/services/get-units-data"
import { cn } from "@/utils/cn"
import { Bath, BedDouble, BedSingle, Star, Trees } from "lucide-react"

import { Rating, UnitType } from "@/types/unit"

import PeopleRate from "./people-rate"

const details = [
  {
    id: "1",
    count: "2",
    label: "أسرة فردية",
    icon: <BedSingle className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    id: "2",
    count: "1",
    label: "سرير كبير",
    icon: <BedDouble className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    id: "3",
    count: "1",
    label: "سرير ملكة",
    icon: <BedDouble className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    id: "4",
    count: "4",
    label: "حمامات",
    icon: <Bath className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    id: "5",
    count: "0",
    label: "حمام سباحة عام",
    icon: <Bath className="text-primaryColor" strokeWidth={1.25} />,
  },
  {
    id: "6",
    count: "0",
    label: "جلسة خارجية",
    icon: <Trees className="text-primaryColor" strokeWidth={1.25} />,
  },
]

const specialDetails = [
  {
    id: "1",
    label: "حديقة",
    icon: <Trees className="text-primaryColor3" strokeWidth={1.25} />,
  },
  {
    id: "2",
    label: "استقبال",
    icon: <BedDouble className="text-primaryColor3" strokeWidth={1.25} />,
  },
  {
    id: "3",
    count: "1",
    label: "تصميم عصري",
    icon: <BedDouble className="text-primaryColor3" strokeWidth={1.25} />,
  },
  {
    id: "4",
    count: "4",
    label: "مكواة و طاولة الكي",
    icon: <Bath className="text-primaryColor3" strokeWidth={1.25} />,
  },
  {
    id: "5",
    count: "0",
    label: "موقد طهي",
    icon: <Bath className="text-primaryColor3" strokeWidth={1.25} />,
  },
]

// const usersRates = [
//   {
//     id: "1",
//     date: new Date("4/29/2024"),
//     username: "Alasmar",
//     rate: 5,
//     comment:
//       "Lorem, ipsum dolor edita, itaqi emos qui. Voluptatem veniam perspiciatis qui perferendis!",
//     img: "",
//   },
//   {
//     id: "2",
//     date: new Date("4/30/2024"),
//     username: "fisal",
//     rate: 4.5,
//     comment:
//       "Lorem, ipsum dolor edita, itaqi emos qui. Voluptatem veniam perspiciatis qui perferendis!",
//     img: "",
//   },
//   {
//     id: "3",
//     date: new Date("4/29/2024"),
//     username: "Ahmed",
//     rate: 5,
//     comment:
//       "Lorem, ipsum dolor edita, itaqi emos qui. Voluptatem veniam perspiciatis qui perferendis!",
//     img: "",
//   },
//   {
//     id: "4",
//     date: new Date("4/29/2024"),
//     username: "Ibrahim",
//     rate: 3,
//     comment:
//       "Lorem, ipsum dolor edita, itaqi emos qui. Voluptatem veniam perspiciatis qui perferendis!",
//     img: "",
//   },
//   {
//     id: "5",
//     date: new Date("4/29/2024"),
//     username: "Fatima",
//     rate: 4,
//     comment:
//       "Lorem, ipsum dolor edita, itaqi emos qui. Voluptatem veniam perspiciatis qui perferendis!",
//     img: "",
//   },
//   {
//     id: "6",
//     date: new Date("4/29/2024"),
//     username: "Marwa",
//     rate: 5,
//     comment:
//       "Lorem, ipsum dolor edita, itaqi emos qui. Voluptatem veniam perspiciatis qui perferendis!",
//     img: "",
//   },
// ]

type Props = {
  unit: UnitType
}
const UnitDetails = (props: Props) => {
  const usersRates: Rating[] = getUnitData(props.unit.id)[0].ratings
  const totalRating =
    usersRates.reduce((pre, cur) => {
      return pre + cur.rate
    }, 0) / usersRates.length

  // console.log("🚀 ~ UnitDetails ~ usersRates:", usersRates)

  return (
    <>
      <div className="w-full">
        <div className="p-5">
          <h2 className="mb-3 text-xl font-medium lg:text-3xl">تفاصيل الوحدة</h2>
          <hr className="w-full" />

          {/* create unit details icons */}
          <div className="my-6 flex flex-wrap gap-3">
            {details
              ? details.map((item) => (
                  <div
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2"
                    key={item.id}>
                    {item.icon}
                    <span className="text-sm text-foreground-600">{`${item.count && parseInt(item.count) > 0 ? item.count : ""} ${item.label}`}</span>
                  </div>
                ))
              : null}
          </div>

          <div className="my-6 text-lg/6 text-foreground-600 max-lg:text-center">
            {props.unit.title}
          </div>
          <hr className="my-5 w-full" />

          <div>
            <h3 className="my-5 text-lg font-medium lg:text-2xl">المميزات الخاصة</h3>
            <div className="icons mt-5 flex flex-wrap items-start gap-3">
              {specialDetails &&
                specialDetails.map((item, count) => (
                  <div
                    className="flex gap-2 rounded-lg bg-gray-100 px-4 py-2"
                    key={item.id}>
                    <span className="text-foreground-600">{item.label}</span>
                  </div>
                ))}
            </div>
          </div>

          <hr className="my-5 w-full" />

          <div className="space-y-4">
            <h3 className="flex flex-col text-xl font-medium lg:text-2xl">
              اعلى التقيمات
            </h3>

            <div className="flex items-center gap-2">
              <Star size={20} className={cn("text-yellow-400", "fill-yellow-400")} />
              <span className="font-meduim text-xl">({totalRating})</span>
            </div>

            <div className="grid-cols-2 gap-5 max-sm:space-y-4 sm:grid">
              {usersRates.map((item) => {
                return (
                  <PeopleRate
                    key={item.id}
                    date={item.date}
                    user={item.username}
                    rate={item.rate}
                    comment={item.comment}
                    img={item.img}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UnitDetails
