import React from "react"
import { UnitStoreProvider } from "@/stores/unit-store-provider"

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return <UnitStoreProvider>{children}</UnitStoreProvider>
}

export default layout
