import { FriendListItem } from 'components/friendList/FriendListItem';
import css from 'components/friendList/friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          log
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
