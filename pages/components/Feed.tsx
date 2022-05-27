import React from 'react'
import Tweetbox from './Tweetbox'

function Feed() {
  return (
    <main
      className="col-span-7 border-x sm:col-span-7 md:col-span-5 
    lg:col-span-4"
    >
      <p className="ml-5 text-xl font-bold">Home</p>
      <Tweetbox />
      {/* <div className="h-10 w-10 sm:bg-orange-100 md:bg-orange-300 lg:bg-orange-600">
        het
      </div> */}
    </main>
  )
}

export default Feed
