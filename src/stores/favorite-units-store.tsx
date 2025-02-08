import { FAVORITE_UNITS_KEY } from "@/utils/favorite-units"
import { create } from "zustand"

type FavoriteStore = {
  favorites: number[]
  toggleFavorite: (unitId: number) => void
}

export const useFavoriteStore = create<FavoriteStore>((set) => {
  let storedFavorites = []
  if (typeof window !== "undefined") {
    storedFavorites = JSON.parse(localStorage.getItem(FAVORITE_UNITS_KEY) || "[]")
  }
  return {
    favorites: storedFavorites,
    toggleFavorite: (unitId) =>
      set((state) => {
        const updatedFavorites = state.favorites.includes(unitId)
          ? state.favorites.filter((id) => id !== unitId)
          : [...state.favorites, unitId]
        if (typeof window !== "undefined") {
          localStorage.setItem(FAVORITE_UNITS_KEY, JSON.stringify(updatedFavorites))
        }
        return { favorites: updatedFavorites }
      }),
  }
})
