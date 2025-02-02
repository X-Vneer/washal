"use client"

import React from "react"
import Image from "next/image"
import { image1 } from "@/assets"
import { useAuth } from "@/providers/auth/auth-context"
import { loginSchema } from "@/validation/login-schema"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

export default function Login() {
  const { openedModal, openLogin, openRegister, onClose } = useAuth()

  //   manage form state using react hook from
  const {
    control,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const handleOpenRegister = () => {
    openRegister()
    reset()
  }

  // handling login
  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
    // TODO handle login
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<z.infer<typeofloginSchema>>= ~ data:",
      data,
    )
    try {
    } catch (error: any) {
      setError("root", {
        message: error.message || "حصل خطأ ما الرجاء المحاولة مجددا",
      })
    }
  }
  return (
    <>
      <Button onClick={openLogin}>تسجيل الدخول</Button>
      <Modal
        classNames={{
          closeButton: "hover:bg-white/60 bg-white/50 active:bg-white/70 z-10 ",
        }}
        size="4xl"
        isOpen={openedModal === "login"}
        onOpenChange={(isOpen) => {
          reset()
          if (!isOpen) onClose()
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" p-0">
                <div className="flex w-full ">
                  <div className="w-full p-4 md:w-1/2">
                    <ModalHeader className="justify-center text-center text-2xl text-primaryColor">
                      مرحبا بك في فندق المواسم الاربعة
                    </ModalHeader>
                    <p className="mb-8 text-center text-sm">
                      يرجى تسجيل الدخول أو إنشاء حساب بعنوان بريدك الإلكتروني <br />
                      لإدارة حجزك .
                    </p>
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => {
                            return (
                              <Input
                                isInvalid={errors.email ? true : false}
                                errorMessage={errors.email?.message}
                                type="email"
                                label="الايميل"
                                {...field}
                              />
                            )
                          }}
                        />
                      </div>
                      <div>
                        <Controller
                          name="password"
                          control={control}
                          render={({ field }) => {
                            return (
                              <Input
                                isInvalid={errors.password ? true : false}
                                type="password"
                                errorMessage={errors.password?.message}
                                label="كلمة المرور"
                                {...field}
                              />
                            )
                          }}
                        />
                      </div>
                      <div>
                        <Button type="submit" fullWidth isLoading={isSubmitting}>
                          تسجيل الدخول
                        </Button>
                        {errors.root?.message ? (
                          <p className="py-3 text-sm text-red-500 ">
                            {errors.root?.message}
                          </p>
                        ) : null}
                        <p className="py-3 text-sm">
                          ليس لديك حساب؟{" "}
                          <span
                            className="  cursor-pointer text-primaryColor2 duration-200 hover:text-primaryColor"
                            onClick={handleOpenRegister}>
                            إنشاء جساب جديد
                          </span>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="min-h-[450px] w-1/2  self-stretch max-md:hidden">
                    <Image
                      src={image1}
                      alt="cover image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <DevTool control={control} />
    </>
  )
}
