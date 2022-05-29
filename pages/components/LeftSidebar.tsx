import React from 'react'
import { HomeIcon, HashtagIcon, BellIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import SidebarRow from './LeftSidebarRow'
export default function LeftSidebar() {
  return (
    <main
      className="sticky top-0 flex flex-col items-center self-start px-4 pt-6 
    sm:items-end  md:items-end lg:col-span-2 lg:items-start 
    xl:col-span-2 xl:items-start"
    >
      <div className="ml-2">
        <Image src="/twitter-icon.png" height={25} width={25} />
      </div>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
    </main>
  )
}
