import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

function Tweetbox() {
  const [text, setText] = useState<string>('')

  return (
    <main className="p-5">
      <div className="flex items-start">
        <Image
          className=" rounded-full"
          src="/default-profile.png"
          height="50"
          width="50"
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
            <button
              disabled={!text}
              className="ml-auto rounded-full bg-twitter px-5 py-2 font-semibold text-white disabled:opacity-50 "
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Tweetbox
