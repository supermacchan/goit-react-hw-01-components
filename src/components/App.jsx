import user from './Profile/user.json';
import data from './Statistics/data.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';

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
        stats={data}
      />
    </>
  );
};
