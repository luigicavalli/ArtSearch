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

    const url = 'http://localhost:3000/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem(
          'userData',
          JSON.stringify({
            id: data.user.user_id,
            email: data.user.email,
            name: data.user.name,
            surname: data.user.surname,
            apiToken: data.apiToken,
            role_id: data.user.role_id,
            role: data.user.role,
          })
        );

        Swal.fire({
          title: 'Perfetto!',
          text: 'Login effettuato!',
          icon: 'success',
          confirmButtonColor: '#0c4a6e',
          background: '#f1f5f9',
        });

        navigate('/dashboard');

        console.log('Success:', data);
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
