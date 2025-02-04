/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"

import { UnitType } from "@/types/unit"

type Props = UnitType
const Card = ({
  id,
  title,
  price,
  bedrooms,
  balcony,
  bathrooms,
  swimming_pool,
  images,
}: Props) => {
  return (
    <>
      <Link href={`/unit/${id + ""}`} className="block rounded-lg p-4">
        <img
          alt=""
          src={
            images && images.length > 0
              ? images[0]
              : "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          }
          className="h-56 w-full rounded-md object-cover"
          loading="lazy"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">SAR {price}</dd>
            </div>

            <div>
              <dt className="sr-only">الوصف</dt>

              <dd className="font-medium">{title}</dd>
            </div>
          </dl>

          <div className="flex-wrap mt-6 flex items-center gap-8 text-xs">
            {swimming_pool && swimming_pool > 0 ? (
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 3v12m12-12v12M4 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M4 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">مسبح</p>

                  <p className="font-medium">{swimming_pool}</p>
                </div>
              </div>
            ) : (
              ""
            )}

            {balcony && balcony > 0 ? (
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 3h16M4 21h16M4 3v18m16-18v18M8 6h8M8 10h8M8 14h8M8 18h8"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">بلكونة</p>

                  <p className="font-medium">{balcony}</p>
                </div>
              </div>
            ) : (
              ""
            )}

            {bathrooms && bathrooms > 0 ? (
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">الحمامات</p>

                  <p className="font-medium">{bathrooms}</p>
                </div>
              </div>
            ) : (
              ""
            )}

            {bedrooms && bedrooms > 0 ? (
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  className="size-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">غرف النوم</p>

                  <p className="font-medium">{bedrooms} غرف نوم</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
