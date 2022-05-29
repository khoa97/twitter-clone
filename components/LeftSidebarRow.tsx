import React from 'react';

interface LeftSidebarRowsProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

function LeftSidebarRow({ Icon, title }: LeftSidebarRowsProps) {
  return (
    <div
      className=" flex max-w-fit  cursor-pointer items-center space-x-2 rounded-full
    p-4 transition-all hover:bg-gray-100 md:items-start"
    >
      <Icon className=" h-6 w-6" />
      <p className="hidden text-lg lg:inline-flex ">{title}</p>
    </div>
  );
}

export default LeftSidebarRow;
