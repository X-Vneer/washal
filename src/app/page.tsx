// Import Swiper styles
import { get } from "http"
import { RoomsTypes } from "@/api/services/get-rooms-data"
import getUnitsData from "@/api/services/get-units-data"

import { Unit } from "@/types/unit"
import SearchBar from "@/components/common/search-bar"
import ContactUs from "@/components/home/contact-us"
import DynamicHotels from "@/components/home/dynamic-hotels"
import Features from "@/components/home/features"
import HeroSection from "@/components/home/hero-section"
import Hotels from "@/components/home/hotels"
import Testimonials from "@/components/home/testimonials"

export default async function Home() {
  const UnitsData: Unit[] = await getUnitsData()
  return (
    <>
      <main>
        <HeroSection />
        <SearchBar />
      </main>
      <Features />
      {/* <YourDestination /> */}
      <Hotels hotels={RoomsTypes} units={UnitsData} title={"أنواع الشاليهات"} />
      <Testimonials />
      <ContactUs />
    </>
  )
}
