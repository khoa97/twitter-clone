import React from 'react'
import { HomeIcon, HashtagIcon, BellIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import SidebarRow from './LeftSidebarRow'
export default function LeftSidebar() {
  return (
    <main className="col-span-2  flex flex-col items-center px-4 md:items-start">
      <Image src="/twitter-icon.png" height={25} width={25} />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
    </main>
  )
}
