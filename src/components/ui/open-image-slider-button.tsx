"use client"

import { useUnitStore } from "@/stores/unit-store-provider"
import { cn } from "@/utils/cn"
import { Button } from "@nextui-org/button"
import { Images } from "lucide-react"

const OpenImageSliderButton = ({ className }: { className?: string }) => {
  const openImageSlider = useUnitStore((state) => state.openImageSlider)
  return (
    <Button
      className={cn("bg-white  text-foreground-500", className)}
      onClick={openImageSlider}
      startContent={<Images strokeWidth={1.2} />}>
      <span className="max-lg:hidden">عرض جميع الصور</span>
    </Button>
  )
}

export default OpenImageSliderButton
