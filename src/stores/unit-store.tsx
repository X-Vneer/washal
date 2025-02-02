import { createStore } from "zustand/vanilla"

export type UnitState = {
  showImageSlider: boolean
}

export type UnitActions = {
  openImageSlider: () => void
  closeImageSlider: () => void
}

export type UnitStore = UnitState & UnitActions
export const defaultState = {
  showImageSlider: false,
}

export const createUnitStore = (init: UnitState = defaultState) => {
  return createStore<UnitStore>((set) => ({
    ...init,
    openImageSlider() {
      set({ showImageSlider: true })
    },
    closeImageSlider() {
      set({ showImageSlider: false })
    },
  }))
}
