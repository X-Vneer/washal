"use client"

import React from "react"
import { useFavoriteStore } from "@/stores/favorite-units-store"
import { Button } from "@nextui-org/button"
import { Heart } from "lucide-react"

type Props = {
  className?: string
  unitId: number
}

const FavoriteButton = ({ unitId, className }: Props) => {
  const { favorites, toggleFavorite } = useFavoriteStore()
  const isFavorite = favorites.includes(unitId)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(unitId)
  }

  return (
    <Button
    onClick ={handleClick}
      isIconOnly
      variant="light"
      radius="full"
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={className}>
      <Heart
        color={isFavorite ? "#ff0d0d" : "#ccc"}
        fill={isFavorite ? "#ff0d0d" : "none"}
      />
    </Button>
  )
}

export default FavoriteButton
