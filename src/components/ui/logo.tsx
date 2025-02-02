import React from "react"
import Image from "next/image"
import Link from "next/link"
import { logo } from "@/assets"
import { cn } from "@/utils/cn"

type Props = {
  className?: string
  horizontal?: true
}

const Logo = ({ className }: Props) => {
  return (
    <div className="shrink-0">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className={cn("h-[56px] w-full", className)} />
      </Link>
    </div>
  )
}

export default Logo
