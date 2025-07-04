import { UnitType } from "@/types/unit"

type Props = {
  unit: UnitType
}
const UnitDetails = (props: Props) => {
  return (
    <>
      <div className="w-full">
        <div className="p-5">
          <h2 className="mb-3 text-xl font-medium lg:text-3xl">
            تفاصيل الوحدة
          </h2>
          <hr className="w-full" />

          {/* create unit details icons */}
          {/* <div className="my-6 flex flex-wrap gap-3">
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
          </div> */}

          <div className="my-6 text-lg/6 text-foreground-600 max-lg:text-center">
            {props.unit.title}
          </div>

          {/* <div>
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
          </div> */}
          {/* 
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export default UnitDetails
