import { SVGProps } from 'react'

export interface FeedProps {
  timelineTweets: {
    data: Tweet[]
    includes: {
      users: Array<User>
      media: Array<Media>
    }
  }
}

export interface TweetCardProps {
  tweet: Tweet
  users: Array<User>
  media: Array<Media>
}

export interface Media {
  media_key: string
  preview_image_url: string
  type: string
}

export interface User {
  id: string
  profile_image_url: string
  username: string
  name: string
}
export interface TrendingRowProps {
  type: string
  title: string
  footer: string
}

export interface LeftSidebarRowsProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

export interface TrendingBoxProps {
  articles: Article[]
  trendingTweets: TrendingTweet[]
}

interface Article {
  title: string
}

interface TrendingTweet {
  tweet_volume: number
  name: string
}

export interface Tweet {
  text: string
  created_at: string
  attachments: {
    media_keys: Array<string>
  }
}
