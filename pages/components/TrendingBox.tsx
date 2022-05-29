import React from 'react'
import Image from 'next/image'
import TrendingRow from './TrendingRow'
import { TrendingBoxProps } from '../../types/interfaces'

function TrendingBox({ articles, trendingTweets }: TrendingBoxProps) {
  return (
    <div className="my-3 rounded-2xl bg-gray-100">
      <p className="p-3  text-lg font-bold">What's Happening</p>
      {articles.map((item, index) => {
        return (
          <TrendingRow
            key={'article ' + index}
            type="News"
            title={item.title}
            footer=""
          />
        )
      })}
      {trendingTweets.map((item, index) => {
        const numOfTweets = (item.tweet_volume / 1000).toFixed(1)
        return (
          <TrendingRow
            key={'trending ' + index}
            type="Trending"
            title={item.name}
            footer={numOfTweets + 'k Tweets'}
          />
        )
      })}
    </div>
  )
}

export default TrendingBox
