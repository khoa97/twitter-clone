import React from 'react';
import Image from 'next/image';

export interface TweetCardProps {
  tweet: {
    text: string;
    created_at: string;
    attachments: {
      media_keys: Array<string>;
    };
  };
  users: Array<{
    id: string;
    profile_image_url: string;
    username: string;
    name: string;
  }>;
  media: Array<{
    media_key: string;
    preview_image_url: string;
    type: string;
  }>;
}

export default function TweetCard({ tweet, users, media }: TweetCardProps) {
  function getTweetAge() {
    const ageInSec =
      (new Date().valueOf() - new Date(tweet.created_at).valueOf()) / 1000;

    if (ageInSec < 60) {
      return `${ageInSec}s`;
    }
    if (ageInSec < 3600) {
      return `${Math.round(ageInSec / 60)}m`;
    }
    if (ageInSec < 86400) {
      return `${Math.round(ageInSec / 60 / 60)}h`;
    }
    return ageInSec;
  }
  return (
    <div className="flex cursor-pointer items-start border-y p-4 hover:bg-gray-100">
      <div className="w-8 min-w-[40px]">
        <Image
          alt="profile"
          height={48}
          width={48}
          src={users[0].profile_image_url}
          className="rounded-full"
        />
      </div>

      <div className="ml-2">
        <div className="flex ">
          <p className="mr-2 text-sm font-bold">{users[0].name}</p>
          <Image alt="verfied" src="/verified.png" height={20} width={20} />
          <p className="ml-2 text-sm text-gray-500">@{users[0].username}</p>
          <p className="ml-2 text-sm text-gray-500"> {getTweetAge()}</p>
        </div>
        <p>{tweet.text}</p>
        <div>
          {media.map((item) => {
            const mediaKeys = tweet?.attachments?.media_keys;
            if (mediaKeys && mediaKeys.includes(item.media_key)) {
              return item.preview_image_url ? (
                <Image
                  className="rounded-lg"
                  alt="media-image"
                  key={item.media_key}
                  src={item.preview_image_url}
                  width={300}
                  height={306}
                />
              ) : (
                ''
              );
            }
            return '';
          })}
        </div>
      </div>
    </div>
  );
}
