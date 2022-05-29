import React from 'react'
import { FeedProps, Tweet } from '../../types/interfaces'
import Tweetbox from './Tweetbox'
import TweetCard from './TweetCard'

function Feed({ timelineTweets }: FeedProps) {
  return (
    <main
      className="col-span-7 border-x sm:col-span-7 md:col-span-5 
    lg:col-span-4"
    >
      <p className="sticky top-0 z-50 cursor-pointer bg-white py-3 pl-5 text-xl font-bold">
        Home
      </p>
      <Tweetbox />

      {timelineTweets.data.map((item: Tweet, index) => {
        return (
          <TweetCard
            key={'tweetcard ' + index}
            tweet={item}
            users={timelineTweets.includes.users}
            media={timelineTweets.includes.media}
          />
        )
      })}

      {/* <div className="h-10 w-10 sm:bg-orange-100 md:bg-orange-300 lg:bg-orange-600">
        het
      </div> */}
    </main>
  )
}

export default Feed
