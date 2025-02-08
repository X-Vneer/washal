import React, { Suspense } from "react"
import { image2 } from "@/assets"
import { parseDateRange } from "@/utils/parse-date-range"
import { Loader2 } from "lucide-react"

import DateFormatter from "@/components/ui/date-formatter"
import PageHero from "@/components/common/page-hero"
import SearchBar from "@/components/common/search-bar"
import Category from "@/components/search/category"
import Filters from "@/components/search/filters"
import SearchedUnits from "@/components/search/searched-units"

type Props = {
  searchParams: { [key: string]: string | undefined }
}

const page = ({ searchParams }: Props) => {

  
  // const {
  //   range: [from, to],
  //   label,
  //   nights,
  // } = parseDateRange(searchParams.from, searchParams.to)
  return (
    <>
      <PageHero title="الوجهة" image={image2} />
      {/* <SearchBar
        initial={{
          city: "",
          guests: searchParams.guests,
          from: from,
          to: to,
        }} 
      />*/}
      <div className="container py-8">
        <p className="py-1 text-xl font-bold text-gray-900 lg:p-2 lg:text-4xl">
          اكتشف مكان إقامتك المثالي
        </p>
        <div className="flex items-center justify-between gap-10">
          <div>
            <span className="text-xs text-foreground-500 lg:text-sm">
              تصفّح وحداتنا المميزة وتمتع ببحث متقدم
            </span>
            {/* <div className="py-1 text-xs text-foreground-600 lg:py-2">
              من <DateFormatter date={from} className="lg:text-lg" /> الى{" "}
              <DateFormatter className="lg:text-lg" date={to} />
              <span className="px-2">
                ({nights}) {label}
              </span>
            </div> */}
          </div>
          {/* <div className="max-lg:hidden">
            <Category />
          </div> */}
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex gap-8">
            <Filters />
            <div className="w-full lg:w-3/4">
              <Suspense
                fallback={
                  <div className="flex h-[350px] items-center justify-center">
                    <Loader2
                      className="animate-spin text-primaryColor ease-in-out"
                      size={42}
                    />
                  </div>
                }>
                <SearchedUnits />
                {/* <SearchedUnits filteredUnits={}/> */}
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
