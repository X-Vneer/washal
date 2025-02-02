import React from "react"
import { updateUserSchema } from "@/validation/update-user-shcema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

type Props = {}

const UserInfo = (props: Props) => {
  //   manage form state using react hook from
  const {
    control,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  })
  // handling update data
  const onSubmit: SubmitHandler<z.infer<typeof updateUserSchema>> = async (data) => {
    // TODO handle register

    try {
    } catch (error: any) {
      setError("root", {
        message: error.message || "حصل خطأ ما الرجاء المحاولة مجددا",
      })
    }
  }
  return (
    <div className="py-8">
      <form className="max-w-md space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit" fullWidth isLoading={isSubmitting}>
            تعديل البيانات
          </Button>
          {errors.root?.message ? (
            <p className="py-3 text-sm text-red-500 ">{errors.root?.message}</p>
          ) : null}
          <p className="py-3 text-sm">
            سيتم اراسل ايميل لك للتاكد من صحة البريد الالكتروني
          </p>
        </div>
      </form>
    </div>
  )
}

export default UserInfo
