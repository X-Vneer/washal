"use client"

import React from "react"
import Image from "next/image"
import { image2 } from "@/assets"
import { useAuth } from "@/providers/auth/auth-context"
import { registerSchema } from "@/validation/register-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

type Props = {}

const Register = (props: Props) => {
  const { openedModal, onClose, openRegister } = useAuth()
  //   manage form state using react hook from
  const {
    control,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })
  // handling login
  const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = async (data) => {
    // TODO handle register

    try {
    } catch (error: any) {
      setError("root", {
        message: error.message || "حصل خطأ ما الرجاء المحاولة مجددا",
      })
    }
  }
  return (
    <>
      <Modal
        classNames={{
          closeButton: "hover:bg-white/60 bg-white/50 active:bg-white/70 z-10 ",
        }}
        size="4xl"
        isOpen={openedModal === "register"}
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
                    <ModalHeader className="text-2x justify-center text-center text-primaryColor">
                      مرحبا بك في فندق المواسم الاربعة
                    </ModalHeader>
                    <p className="mb-8 text-center text-sm">إنشاء حساب</p>
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex gap-4">
                        <div className="w-1/2">
                          <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => {
                              return (
                                <Input
                                  label="الإسم"
                                  {...field}
                                  isInvalid={errors.firstName ? true : false}
                                  errorMessage={errors.firstName?.message}
                                />
                              )
                            }}
                          />
                        </div>
                        <div className="w-1/2">
                          <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => {
                              return (
                                <Input
                                  label="اسم العائلة"
                                  {...field}
                                  isInvalid={errors.lastName ? true : false}
                                  errorMessage={errors.lastName?.message}
                                />
                              )
                            }}
                          />
                        </div>
                      </div>
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
                          إنشاء حساب
                        </Button>
                        {errors.root?.message ? (
                          <p className="py-3 text-sm text-red-500 ">
                            {errors.root?.message}
                          </p>
                        ) : null}
                        <p className="py-3 text-sm">
                          سيتم اراسل ايميل لك للتاكد من صحة البريد الالكتروني
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className=" min-h-[450px] w-1/2 self-stretch max-md:hidden">
                    <Image
                      src={image2}
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
    </>
  )
}

export default Register
