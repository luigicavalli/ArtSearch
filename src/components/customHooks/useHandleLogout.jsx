import { useNavigate } from 'react-router';

export function useHandleLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');

    navigate('/');
  };

  return { handleLogout };
}
