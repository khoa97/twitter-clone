import React from 'react';
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  CollectionIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import LeftSidebarRow from './LeftSidebarRow';

export default function LeftSidebar() {
  return (
    <main
      className="sticky top-0 flex flex-col items-center self-start px-4 pt-6
    sm:items-end  md:items-end lg:col-span-2 lg:items-start
    xl:col-span-2 xl:items-start"
    >
      <div
        className="flex min-w-[56px] max-w-fit  cursor-pointer items-center space-x-2 rounded-full
    p-4 transition-all hover:bg-gray-100 md:items-start"
      >
        <Image alt="twitter" src="/twitter-icon.png" height={24} width={24} />
      </div>

      <LeftSidebarRow Icon={HomeIcon} title="Home" />

      <LeftSidebarRow Icon={HashtagIcon} title="Explore" />
      <LeftSidebarRow Icon={BellIcon} title="Notification" />
      <LeftSidebarRow Icon={MailIcon} title="Messages" />
      <LeftSidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <LeftSidebarRow Icon={CollectionIcon} title="Lists" />
      <LeftSidebarRow Icon={UserIcon} title="Profile" />
      <LeftSidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </main>
  );
}
