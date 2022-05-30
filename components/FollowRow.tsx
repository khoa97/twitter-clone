import Image from 'next/image';
import React from 'react';

interface FollowRowProps {
  name: string;
  profileImageUrl: string;
  username: string;
}

function FollowRow({ name, profileImageUrl, username }: FollowRowProps) {
  return (
    <div className="flex items-center md:flex-col  md:items-stretch lg:flex-row">
      <div className=" space-be flex flex-shrink-0 cursor-pointer  p-3  hover:bg-gray-100">
        <div className="min-w-[40px]">
          <Image
            className="flex-shrink-0 rounded-full"
            src={profileImageUrl}
            height={40}
            width={40}
            alt="icon"
          />
        </div>
        <div className="ml-2 flex flex-col">
          <div className="flex">
            <div className="mr-2 text-sm font-bold">{name}</div>
            <div className="min-w-[25px]">
              <Image alt="verfied" src="/verified.png" height={18} width={18} />
            </div>
          </div>

          <div className="text-sm text-gray-500">@{username}</div>
        </div>
      </div>
      <button
        className="h-8  rounded-full bg-neutral-800 px-4 text-xs font-semibold text-white"
        type="button"
      >
        Follow
      </button>
    </div>
  );
}

export default FollowRow;
