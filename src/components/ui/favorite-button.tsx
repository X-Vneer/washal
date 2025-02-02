"use client"

import React from "react"
import { Button } from "@nextui-org/button"
import { Heart } from "lucide-react"

type Props = {
  className?: string
}

const FavoriteButton = ({ className }: Props) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        // TODO handle favorite
      }}
      isIconOnly
      variant="light"
      radius="full"
      title="add to favorite"
      className={className}>
      <Heart color="#ff0d0d" />
    </Button>
  )
}

export default FavoriteButton
