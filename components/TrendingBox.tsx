import React from 'react';
import TrendingRow from './TrendingRow';

interface TrendingBoxProps {
  articles: Array<{
    title: string;
  }>;
  trendingTweets: Array<{
    tweet_volume: number;
    name: string;
  }>;
}

function TrendingBox({ articles, trendingTweets }: TrendingBoxProps) {
  return (
    <div className="my-3 rounded-2xl bg-gray-50">
      <p className="p-3  text-lg font-bold">What&apos;s Happening</p>
      {articles.map((item) => (
        <TrendingRow
          key={item.title}
          type="News"
          title={item.title}
          footer=""
        />
      ))}
      {trendingTweets.map((item) => {
        const numOfTweets = (item.tweet_volume / 1000).toFixed(1);
        return (
          <TrendingRow
            key={item.name}
            type="Trending"
            title={item.name}
            footer={Number(numOfTweets) > 0 ? `${numOfTweets}k Tweets` : ''}
          />
        );
      })}
    </div>
  );
}

export default TrendingBox;
