import React from 'react'
import { SearchIcon, HomeIcon } from '@heroicons/react/outline'
function RightSidebar() {
  return (
    <div className="col-span-2 ml-4 hidden px-2 lg:inline">
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <div>
          <SearchIcon className="h-6 w-6" />
        </div>
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  )
}

export default RightSidebar
