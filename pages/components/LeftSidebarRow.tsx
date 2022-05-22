import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function LeftSidebarRows({ Icon, title }: Props) {
  return (
    <div
      className="duration-600 flex  max-w-fit cursor-pointer items-center space-x-2  
    rounded-full py-2 transition-all hover:bg-gray-100 md:items-start"
    >
      <Icon className="h-6 w-6" />
      <p className="hidden md:inline-flex">{title}</p>
    </div>
  )
}

export default LeftSidebarRows
