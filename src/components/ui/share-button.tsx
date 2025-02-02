"use client"

import { Button } from "@nextui-org/button"
import { Share2 } from "lucide-react"

import { useMediaQuery } from "@/hooks/use-media-query"

const ShareButton = () => {
  const share = async () => {
    const shareData = {
      title: "المواسم الاربعة",
      text: "تمتع بافضل خدمة ممكنة في فندق المواسم الاربعة ",
      url: window.location.href,
    }
    try {
      if (!window.navigator.share) return
      await navigator.share(shareData)
    } catch (err) {}
  }

  return (
    <>
      <Button
        startContent={<Share2 strokeWidth={1.2} />}
        className="max-lg:hidden"
        variant="bordered"
        onClick={share}>
        <span> المشاركة</span>
      </Button>
      <Button isIconOnly={true} className="bg-white lg:hidden" onClick={share}>
        <Share2 strokeWidth={1.2} />
      </Button>
    </>
  )
}

export default ShareButton
