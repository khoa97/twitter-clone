import React from 'react';

interface TrendingRowProps {
  type: string;
  title: string;
  footer: string;
}

function TrendingRow({ type, title, footer }: TrendingRowProps) {
  return (
    <div className=" cursor-pointer p-3 hover:bg-gray-200">
      <div className="text-sm text-gray-500">{type}</div>
      <div className="py-2 text-sm font-bold">{title}</div>
      <div className="text-sm text-gray-500">{footer}</div>
    </div>
  );
}

export default TrendingRow;
