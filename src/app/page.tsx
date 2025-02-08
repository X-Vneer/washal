// Import Swiper styles
import getUnitsData from "@/api/services/get-units-data"

import { UnitType } from "@/types/unit"
import SearchBar from "@/components/common/search-bar"
import ContactUs from "@/components/home/contact-us"
import DynamicHotels from "@/components/home/dynamic-units"
import Features from "@/components/home/features"
import HeroSection from "@/components/home/hero-section"
import Testimonials from "@/components/home/testimonials"
import Units from "@/components/home/units"
import YourDestination from "@/components/home/your-destination"

export default async function Home() {
  const UnitsData: UnitType[] = await getUnitsData()
  return (
    <>
      <main>
        <HeroSection />
        {/* <SearchBar /> */}
      </main>
      <Features />
      {/* <YourDestination /> */}
      <Units units={UnitsData} title={"أنواع الشاليهات"} />
      <Testimonials />
      <ContactUs />
    </>
  )
}
