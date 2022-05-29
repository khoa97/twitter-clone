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

function Feed({ timelineTweets }: FeedProps) {
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
      <Tweetbox />

      {timelineTweets.data.map((item) => (
        <TweetCard
          key={item.id}
          tweet={item}
          users={timelineTweets.includes.users}
          media={timelineTweets.includes.media}
        />
      ))}
    </main>
  );
}

export default Feed;
