import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export function useHandleLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url =
      'https://66fc66fec3a184a84d16f9c5.mockapi.io/api/mock-registration/users';

    try {
      const response = await fetch(url);

      if (response.ok) {
        const users = await response.json();

        const user = users.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (user) {
          Swal.fire({
            title: 'Perfetto!',
            text: 'Login effettuato!',
            icon: 'success',
            confirmButtonColor: '#0c4a6e',
            background: '#f1f5f9',
          });

          delete user.password; // Elimina la password dal local storage;

          const resultToString = JSON.stringify(user); // Trasformo i dati ricevuti dal backend in stringa usando JSON.stringify();

          localStorage.setItem('userData', resultToString); // Salvo i dati dell'utente nel local storage;

          navigate('/dashboard');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Credenziali errate!',
            confirmButtonColor: '#0c4a6e',
            background: '#f1f5f9',
          });
          throw new Error('Credenziali errate');
        }

        console.log('Success:', user);
      } else {
        throw new Error('Login fallito');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const user = localStorage.getItem('userData');

    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return {
    handleSubmit,
    handleChange,
    toggleShowPassword,
    isLoggedIn,
    showPassword,
    formData,
  };
}
