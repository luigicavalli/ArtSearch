import PropTypes from 'prop-types';
import { UserItem } from './UserItem';

export function UsersList({ users }) {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <UserItem key={user.user_id} user={user} />
        ))}
      </ul>
    </div>
  );
}
