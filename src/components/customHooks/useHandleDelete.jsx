import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export function useHandleDelete() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('userData');

    const userParsed = JSON.parse(data);

    setUser(userParsed);
  }, []);

  const url = `http://localhost:3000/delete/${user.id}`;

  const handleDelete = async () => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        Swal.fire({
          title: 'Perfetto!',
          text: 'Utente eliminato con successo!',
          icon: 'success',
          confirmButtonColor: '#0c4a6e',
          background: '#f1f5f9',
        });

        localStorage.removeItem('userData');

        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleDelete };
}
