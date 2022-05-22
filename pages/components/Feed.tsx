import React from 'react'
import Tweet from './Tweet'

function Feed() {
  return (
    <main className="col-span-7 border-x lg:col-span-5">
      <p className="ml-5 text-xl font-bold">Home</p>
      <Tweet />
    </main>
  )
}

export default Feed
