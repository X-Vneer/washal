"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import getUnitsData from "@/api/services/get-units-data"

type UnitType = {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export default function Home() {
  const [units, setUnits] = useState<UnitType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUnitsData()
      setUnits(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {units.map((unit) => (
        <div key={unit.id}>
          <h2>{unit.title}</h2>
          <p>{unit.description}</p>
          <p>Price: {unit.price}</p>
          <Image
            // src={`/assets/images/hotel_${unit.id}/${unit.images && unit.images.length > 0 ? unit.images[0] : "placeholder.png"}`} // Use lowercase .png
            src={`${unit.images && unit.images.length > 0 ? unit.images[0] : "placeholder.png"}`} // Use lowercase .png
            alt={unit.title}
            width={200}
            height={200}
            priority
          />
        </div>
      ))}
    </div>
  )
}
