"use client"

import { createContext, useContext, useState } from "react"
import { useDisclosure } from "@nextui-org/modal"

const AuthContext = createContext<null | {
  openedModal: "login" | "register" | ""
  openLogin: () => void
  openRegister: () => void
  onClose: () => void
}>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedModal, setOpenModal] = useState<"login" | "register" | "">("")

  const state = {
    openedModal,
    openLogin: () => {
      setOpenModal("login")
    },
    openRegister: () => {
      setOpenModal("register")
    },
    onClose: () => {
      setOpenModal("")
    },
  }
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

const IS_SERVER = typeof window === "undefined"

export const useAuth = () => {
  const state = useContext(AuthContext)
  let rawUser = IS_SERVER
    ? null
    : window.localStorage.getItem("four-seasons-hotel-user") || null
  let user = rawUser ? JSON.parse(rawUser) : null
  if (!state) {
    throw new Error("useAuth should be used in an AuthModalContextProvider")
  }
  return { ...state, user }
}
