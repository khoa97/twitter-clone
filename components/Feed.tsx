import { useEffect, useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import Tweetbox from './Tweetbox';
import TweetCard from './TweetCard';

export interface FeedProps {
  timelineTweets: {
    data: Array<{
      id: string;
      text: string;
      created_at: string;
      attachments: {
        media_keys: Array<string>;
      };
    }>;
    includes: {
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
    };
  };
}

interface Tweet {
  tweet: {
    text: string;
    created_at: string;
    id: string;
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

function Feed({ timelineTweets }: FeedProps) {
  const [reformatedTweets, setReformatedTweets] = useState<Array<Tweet>>([]);
  const postTweet = useCallback((tweet: string) => {
    const id = nanoid();
    const id2 = nanoid();
    setReformatedTweets((prev) => [
      {
        tweet: {
          created_at: new Date().toISOString(),
          id: id2,
          author_id: '19923144',
          attachments: {
            media_keys: [id],
          },
          text: tweet,
        },
        profile: {
          username: 'Me',
          id: '19923144',
          profile_image_url: '/default-profile.png',
          verified: true,
          name: 'Me',
        },
        media: {
          media_key: id,
          type: 'photo',
          url: '',
        },
      },
      ...prev,
    ]);
  }, []);

  useEffect(() => {
    const arr: Array<Tweet> = [];

    timelineTweets.data.forEach((a) => {
      const tmp: any = {};
      tmp.tweet = a;
      const [users] = timelineTweets.includes.users;
      tmp.profile = users;
      timelineTweets.includes.media.forEach((b) => {
        if (a.attachments && a.attachments.media_keys.includes(b.media_key)) {
          tmp.media = b;
        }
      });
      arr.push(tmp);
    });
    setReformatedTweets(arr);
  }, [timelineTweets]);

  return (
    <main
      className="col-span-8 border-x  md:col-span-6
    lg:col-span-5"
    >
      {/* <div className="h-10 w-10 sm:bg-orange-100 md:bg-orange-300 lg:bg-orange-600">
        size
      </div> */}
      <p className="sticky top-0 z-50 cursor-pointer bg-white py-3 pl-5 text-xl font-bold">
        Home
      </p>
      <Tweetbox postTweet={postTweet} />

      {reformatedTweets.map((item: Tweet) => (
        <TweetCard
          key={item.tweet.id}
          tweet={item.tweet}
          profile={item.profile}
          media={item.media}
        />
      ))}
    </main>
  );
}

export default Feed;
