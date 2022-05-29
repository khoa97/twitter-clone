import React from 'react'
import { TweetCardProps } from '../../types/interfaces'
import Image from 'next/image'
import { timeStamp } from 'console'
export default function TweetCard({ tweet, users, media }: TweetCardProps) {
  function getTweetAge() {
    const ageInSec =
      (new Date().valueOf() - new Date(tweet.created_at).valueOf()) / 1000

    if (ageInSec < 60) {
      return ageInSec + 's'
    } else if (ageInSec < 3600) {
      return Math.round(ageInSec / 60) + 'm'
    } else if (ageInSec < 86400) {
      return Math.round(ageInSec / 60 / 60) + 'h'
    }
  }
  return (
    <div className="flex cursor-pointer items-start border-y p-4 hover:bg-gray-100">
      <img height={50} width={50} src={users[0].profile_image_url} />

      <div className="ml-2">
        <div className="flex ">
          <p className="font-bol mr-2 text-sm">{users[0].name}</p>
          <Image src="/verified.png" height={20} width={20} />
          <p className="ml-2 text-sm text-gray-500"> @{users[0].username}</p>
          <p className="ml-2 text-sm text-gray-500"> {getTweetAge()}</p>
        </div>
        <p>{tweet.text}</p>
        <div>
          {media.map((item, index) => {
            const media_key = tweet?.attachments?.media_keys

            if (media_key == undefined) {
            } else if (media_key.includes(item.media_key)) {
              return (
                <img key={'tweet-img' + index} src={item.preview_image_url} />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
