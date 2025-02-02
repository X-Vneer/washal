"use client"

import { NextUIProvider } from "@nextui-org/system"

export function NextUiProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>
}
