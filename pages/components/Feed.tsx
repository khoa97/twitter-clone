import React from 'react'
import Tweetbox from './Tweetbox'

function Feed() {
  return (
    <main className="col-span-7 border-x sm:col-span-7 md:col-span-7 lg:col-span-5">
      <p className="ml-5 text-xl font-bold">Home</p>
      <Tweetbox />
    </main>
  )
}

export default Feed
