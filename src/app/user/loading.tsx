import React from "react"
import { Loader2 } from "lucide-react"

type Props = {}

const loading = (props: Props) => {
  return (
    <div className="flex h-[calc(100vh-200px)] items-center justify-center">
      <Loader2 className=" animate-spin text-primaryColor ease-in-out" size={42} />
    </div>
  )
}

export default loading
