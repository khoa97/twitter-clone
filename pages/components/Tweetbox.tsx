import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Tweetbox() {
  const [text, setText] = useState<string>('');
  const MAX_TWEET_LENGTH = 280;

  const styles = {
    text: {
      fontSize: '45px',
      fill: MAX_TWEET_LENGTH - text.length < 0 ? '#f4212e' : '#1DA1F2',
    },
    path: {
      stroke: MAX_TWEET_LENGTH - text.length < 0 ? '#f4212e' : '#1DA1F2',
    },
  };

  return (
    <div className="top-0 z-50 hidden p-5 sm:block">
      <div className="flex items-start">
        <Image
          alt="profile"
          className=" rounded-full"
          src="/default-profile.png"
          height={50}
          width={50}
        />
        <div className="flex-1">
          <TextareaAutosize
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            className="ml-3 w-full p-2 outline-none"
            maxRows={5}
          />
          <div className="my-5 ml-5 flex items-center">
            <PhotographIcon className="mr-2 h-6 w-6 cursor-pointer" />
            <EmojiHappyIcon className="mr-2 h-6 w-6 cursor-pointer" />
            <LocationMarkerIcon className="mr-2 h-6 w-6 cursor-pointer" />
            <PhotographIcon className="mr-2 h-6 w-6 cursor-pointer" />
            <div
              className={`mx-3 ml-auto h-7 w-7 ${text ? 'block' : 'hidden'}`}
            >
              <CircularProgressbar
                styles={styles}
                text={`${
                  text.length < MAX_TWEET_LENGTH - 20
                    ? ''
                    : MAX_TWEET_LENGTH - text.length
                }`}
                value={(text.length / MAX_TWEET_LENGTH) * 100}
              />
            </div>
            <button
              type="button"
              disabled={!text}
              className={`rounded-full bg-twitter px-5 py-2 font-semibold text-white disabled:opacity-50${
                text ? '' : ' ml-auto'
              }`}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweetbox;
