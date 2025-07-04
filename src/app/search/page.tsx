import { Suspense } from "react"
// import { image2 } from "@/assets"
import { Loader2 } from "lucide-react"

import PageHero from "@/components/common/page-hero"
import SearchedUnits from "@/components/search/searched-units"
import { image1 } from "../../../public/assets/images/hotel_1"

const page = () => {
  return (
    <>
      <PageHero title="" image={image1} />

      <div className="container py-8">
        <p className="py-1 text-xl font-bold text-gray-900 lg:p-2 lg:text-4xl">
          اكتشف مكان إقامتك المثالي
        </p>
        <div className="flex items-center justify-between gap-10">
          <div>
            <span className="text-xs text-foreground-500 lg:text-sm">
              تصفّح وحداتنا المميزة
            </span>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex gap-8">
            <Suspense
              fallback={
                <div className="flex h-[350px] items-center justify-center">
                  <Loader2
                    className="animate-spin text-primaryColor ease-in-out"
                    size={42}
                  />
                </div>
              }
            >
              <SearchedUnits />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
