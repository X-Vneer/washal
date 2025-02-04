"use effect"

import React from "react"
import { Modal, ModalBody, ModalContent } from "@nextui-org/modal"

import { useMediaQuery } from "@/hooks/use-media-query"

type Props = {
  children: React.ReactNode
  modalState: {
    onOpen: () => void
    onClose: () => void
    isOpen: boolean
  }
}

const SmallScreenModalWrapper = ({
  modalState: { isOpen, onClose },
  children,
}: Props) => {
  const matches = useMediaQuery("(max-width:1023px)", {
    defaultValue: false,
    initializeWithValue: false,
  })
  // console.log("🚀 ~ matches:", matches)
  return matches ? (
    <Modal size="full" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="py-4">{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  ) : (
    children
  )
}

export default SmallScreenModalWrapper
