import { Profile } from './profile/Profile';
import user from '../user.json';
import { Statistics, StatisticsTitle } from './statistics/Statistics';
import data from '../data.json';
import { getRandomRGB } from 'randomRGB';

for (let i = 0; i <= 10; i++) {
  console.log(getRandomRGB());
}

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
    </div>
  );
};
