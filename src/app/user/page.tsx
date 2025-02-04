import React from "react"
import { image1 } from "@/assets"
import { Link } from "@nextui-org/link"
import { User } from "@nextui-org/user"
import { CalendarDays, Heart } from "lucide-react"

import PageHero from "@/components/common/page-hero"
import UserTabs from "@/components/user/user-tabs"

type Props = {}

const page = (props: Props) => {
  return <>User</>
  return (
    <>
      <PageHero
        titleClassName="text-[48px]"
        title="اهلا بك في فندق المواسم الاربعة"
        image={image1}
      />
      <section className="my-5 bg-gray-50 ">
        <div className="container">
          <div className="flex justify-between gap-10 py-4 max-lg:flex-col max-lg:items-center max-lg:text-center ">
            <User
              name="الاسم"
              description={
                <Link href="/" size="sm" isExternal>
                  email@gmail.com
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
            <div className=" flex gap-5 md:gap-8 ">
              <article className="flex items-center gap-10 rounded-large bg-white  p-4 shadow-medium sm:justify-between md:gap-20 md:p-6">
                <div>
                  <p className="text-2xl font-medium text-gray-900">4</p>

                  <p className="text-sm text-gray-500">المفضلة</p>
                </div>
                <Heart size={32} strokeWidth={1.3} color="red" />
              </article>
              <article className="flex items-center gap-10 rounded-large bg-white  p-4 shadow-medium sm:justify-between md:gap-20 md:p-6">
                <div>
                  <p className="text-2xl font-medium text-gray-900">4</p>

                  <p className="text-sm text-gray-500">الحجوزات</p>
                </div>
                <CalendarDays
                  className="text-primaryColor"
                  size={32}
                  strokeWidth={1.3}
                />
              </article>
            </div>
          </div>
        </div>
      </section>
      <UserTabs />
    </>
  )
}

export default page
