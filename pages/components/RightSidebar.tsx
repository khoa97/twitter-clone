import React from 'react'
import { SearchIcon, HomeIcon } from '@heroicons/react/outline'
import TrendingBox from './TrendingBox'
function RightSidebar({ articles, trendingTweets, timelineTweets }: any) {
  return (
    <div className=" sticky top-0 col-span-2 ml-4 hidden self-start px-2 pt-6 md:col-span-3 md:inline">
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <div>
          <SearchIcon className="h-6 w-6" />
        </div>
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <TrendingBox articles={articles} trendingTweets={trendingTweets} />
    </div>
  )
}

export default RightSidebar
