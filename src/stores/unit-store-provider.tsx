"use client"

import { createContext, useContext, useRef } from "react"
import { useStore, type StoreApi } from "zustand"

import { createUnitStore, type UnitStore } from "./unit-store"

const UnitStoreContext = createContext<StoreApi<UnitStore> | null>(null)

export const UnitStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<StoreApi<UnitStore>>()
  if (!storeRef.current) {
    storeRef.current = createUnitStore()
  }
  return (
    <UnitStoreContext.Provider value={storeRef.current}>
      {children}
    </UnitStoreContext.Provider>
  )
}

export const useUnitStore = <T,>(selector: (store: UnitStore) => T): T => {
  const unitStoreContext = useContext(UnitStoreContext)

  if (!unitStoreContext) {
    throw new Error(`useUnitStore must be use within unitStoreProvider`)
  }

  return useStore(unitStoreContext, selector)
}
