"ues client"

import React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/button"
import { ArrowRight } from "lucide-react"

type Props = {
  className?: string
}

const GoBackButton = ({ className }: Props) => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }
  return (
    <Button className={className} onClick={handleClick} isIconOnly>
      <ArrowRight strokeWidth={1.2} className="text-primaryColor" />
    </Button>
  )
}

export default GoBackButton
