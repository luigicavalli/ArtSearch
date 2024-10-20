import { useState } from 'react';

export function useHandleAdmin() {
  const [users, setUsers] = useState([]);

  const handleUsers = async () => {
    const url = 'http://localhost:3000/users';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        setUsers(data.users);

        console.log(data.users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleUsers, users };
}
