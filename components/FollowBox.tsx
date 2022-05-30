import React from 'react';
import FollowRow from './FollowRow';

interface FollowBoxProps {
  users: Array<{
    id: string;
    name: string;
    profile_image_url: string;
    username: string;
  }>;
}

function FollowBox({ users }: FollowBoxProps) {
  return (
    <div className="my-3 rounded-2xl bg-gray-50">
      <p className="p-3  text-lg font-bold">Who to follow</p>
      {users.map((item) => (
        <FollowRow
          key={item.name + item.id}
          profileImageUrl={item.profile_image_url}
          name={item.name}
          username={item.username}
        />
      ))}
    </div>
  );
}

export default FollowBox;
