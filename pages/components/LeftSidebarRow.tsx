import React, { SVGProps } from 'react'
import { LeftSidebarRowsProps } from '../../types/interfaces'

function LeftSidebarRows({ Icon, title }: LeftSidebarRowsProps) {
  return (
    <div
      className="duration-600 flex max-w-fit  cursor-pointer items-center space-x-2 rounded-full  
    p-2 py-2 transition-all hover:bg-gray-100 md:items-start"
    >
      <Icon className=" h-6 w-6" />
      <p className="hidden lg:inline-flex">{title}</p>
    </div>
  )
}

export default LeftSidebarRows
