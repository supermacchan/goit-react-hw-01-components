import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      {/* Задание 1 - Профиль */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* Задание 2 - Статистика */}
      <Statistics
        title="Upload stats"
        stats={data}
      />
      {/* Задание 3 - Список друзей */}
      <FriendList friends={friends} />
    </>
  );
};
