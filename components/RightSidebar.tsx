import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import TrendingBox from './TrendingBox';
import FollowBox from './FollowBox';

function RightSidebar({ articles, trendingTweets, users }: any) {
  return (
    <div className="sticky top-0  mr-5 ml-4  hidden self-start px-2 pt-6 md:col-span-3 md:inline lg:col-span-3">
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
      <FollowBox users={users} />
    </div>
  );
}

export default RightSidebar;
