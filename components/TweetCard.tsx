import React from 'react';
import Image from 'next/image';

export interface TweetCardProps {
  tweet: {
    text: string;
    created_at: string;
  };
  profile: {
    id: string;
    profile_image_url: string;
    username: string;
    name: string;
  };
  media: {
    media_key: string;
    url: string;
    type: string;
  };
}

const units = [
  [1, "s"],
  [60, "m"],
  [60 * 60, "h"],
  [60 * 60 * 24, "day"]
];



export default function TweetCard({ tweet, profile, media }: TweetCardProps) {
  function getTweetAge() {
  const ageInSec =
      (new Date().valueOf() - new Date(tweet.created_at).valueOf()) / 1000;
  let bestUnit = units[0];
  for(const unit of units) {
    if(ageInSec >= unit[0]) {
        bestUnit = unit;
    }
  }
  const [divisor, label] = bestUnit;
// @ts-ignore
  return Math.floor(ageInSec /divisor) + label;
}
  return (
    <div className="flex  cursor-pointer items-start border-y p-4 hover:bg-gray-100">
      <div className="w-8 min-w-[40px]">
        <Image
          alt="profile"
          height={48}
          width={48}
          src={profile.profile_image_url}
          className="rounded-full"
        />
      </div>

      <div className="ml-2 w-10/12 break-words">
        <div className="flex ">
          <p className="mr-2 text-sm font-bold">{profile.name}</p>
          <Image alt="verfied" src="/verified.png" height={20} width={20} />
          <p className="ml-2 text-sm text-gray-500">@{profile.username}</p>
          <p className="ml-2 text-sm text-gray-500"> {getTweetAge()}</p>
        </div>
        <p className="mb-4 break-words text-sm">{tweet.text}</p>
        <div>
          {media?.url ? (
            <Image
              className="rounded-lg"
              alt="media-image"
              src={media.url}
              width={300}
              height={306}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
