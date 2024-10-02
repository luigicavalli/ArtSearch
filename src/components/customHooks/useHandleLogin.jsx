import { useState } from 'react';

export function useHandleLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url =
      'https://66fc66fec3a184a84d16f9c5.mockapi.io/api/mock-registration/users';

    try {
      const response = await fetch(url);

      if (response.ok) {
        const users = await response.json();

        const user = users.find(
          (user) => user.email === formData.email && user.password === formData.password
        );

        if (user) {
          alert('Login avvenuto con successo!');

          const resultToString = JSON.stringify(user);

          localStorage.setItem('userData', resultToString); // Salvo i dati dell'utente in local storage
        } else {
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

  return {
    handleSubmit,
    handleChange,
    toggleShowPassword,
    showPassword,
    formData,
  };
}
