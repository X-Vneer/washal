"use client"

import React from "react"
import { Tab, Tabs } from "@nextui-org/tabs"

import Favorite from "./favorite"
import UserInfo from "./uesr-info"

type Props = {}

const UserTabs = (props: Props) => {
  return (
    <section>
      <div className="container">
        <div className="flex w-full flex-col">
          <Tabs
            classNames={{
              cursor: "w-full bg-primaryColor",
              tabContent: "group-data-[selected=true]:text-primaryColor",
            }}
            variant="underlined"
            aria-label="tabs">
            <Tab key="1" title="بيانات">
              <UserInfo />
            </Tab>
            <Tab key="2" title="الحجوزات">
              <div></div>
            </Tab>
            <Tab key="3" title="المفضلة">
              <Favorite />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default UserTabs
