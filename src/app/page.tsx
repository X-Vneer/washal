// Import Swiper styles
import { RoomsTypes } from "@/api/services/get-rooms-data"

import SearchBar from "@/components/common/search-bar"
import ContactUs from "@/components/home/contact-us"
import DynamicHotels from "@/components/home/dynamic-hotels"
import Features from "@/components/home/features"
import HeroSection from "@/components/home/hero-section"
import Hotels from "@/components/home/hotels"
import Testimonials from "@/components/home/testimonials"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SearchBar />
      </main>
      <Features />
      {/* <YourDestination /> */}
      <Hotels hotels={RoomsTypes} title={"أنواع الغرف"} />
      <Testimonials />
      <ContactUs />
    </>
  )
}
