"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar"

import Login from "../auth/login"
import Logo from "../ui/logo"

type Props = {}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "الرئيسية",
    },
    {
      href: "/search",
      label: "البحث",
    },
    {
      href: "/#contact-us",
      label: "تواصل معنا",
    },
    {
      href: "/#about-us",
      label: "من نحن",
    },
  ]

  const pathName = usePathname()
  return (
    <>
      <Navbar
        className="-mb-[64px]"
        shouldHideOnScroll
        id="header"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="!justify-between">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="grow-0 basis-[unset] justify-self-end">
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-5 text-sm sm:flex" justify="center">
          {routes.map((route, index) => {
            return (
              <NavbarItem
                key={route.href}
                isActive={
                  pathName === "/"
                    ? pathName === route.href
                    : pathName.includes("search") && route.href.includes("search")
                }>
                <Link href={route.href}>{route.label}</Link>
              </NavbarItem>
            )
          })}
        </NavbarContent>
        {/* <NavbarContent justify="end">
          <NavbarItem>
            <Login />
          </NavbarItem>
        </NavbarContent> */}
        <NavbarMenu>
          {routes.map((route, index) => (
            <NavbarMenuItem
              isActive={
                pathName === "/"
                  ? pathName === route.href
                  : pathName.includes("search") && route.href.includes("search")
              }
              key={`${route.href}-${index}`}>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
                href={route.href}>
                {route.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Header
