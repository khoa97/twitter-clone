import Image from 'next/image'
import React from 'react'

function Tweet() {
  return (
    <main>
      <div className="flex  p-5">
        {/* <Image
          className="rounded-full"
          src="/default-profile.png"
          height="50"
          width="50"
        /> */}
        <textarea
          rows={5}
          className="ml-3  flex-1 resize-y break-words outline-none"
          placeholder="What's Happening?"
        />
      </div>
    </main>
  )
}

export default Tweet
