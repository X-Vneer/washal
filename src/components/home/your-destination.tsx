import { image1, image2, image3 } from "@/assets"

import { DirectionAwareHover } from "../ui/direction-aware-hover"

const YourDestination = () => {
  return (
    <section className="bg-slate-50 py-10  lg:py-20 ">
      <div className="container">
        <div className="mb-10  text-center text-4xl font-bold text-primaryColor ">
          وجهاتك المميزة
        </div>
      </div>
      <div className="container">
        <div className=" flex flex-wrap justify-center gap-10">
          <DirectionAwareHover imageUrl={image1}>
            <p className="text-xl font-bold">الرياض</p>
            <p className="text-sm font-normal">$1299 / الليلة</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl={image2}>
            <p className="text-xl font-bold">جدة</p>
            <p className="text-sm font-normal">$1299 / الليلة</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl={image3}>
            <p className="text-xl font-bold">الدمام</p>
            <p className="text-sm font-normal">$1299 / الليلة</p>
          </DirectionAwareHover>
        </div>
      </div>
    </section>
  )
}

export default YourDestination
