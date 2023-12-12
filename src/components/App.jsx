import { Profile } from './profile/Profile';
import user from '../user.json';
import { Statistics } from './statistics/Statistics';
import data from '../data.json';
import { FriendList } from './friendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './transactions/TransactionHistory';
import tableData from '../transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory tableData={tableData} />
    </div>
  );
};
