import { useState } from 'react';

export function useHandleSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url =
      'https://66fc66fec3a184a84d16f9c5.mockapi.io/api/mock-registration/users';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();

        alert('Registrazione completata con successo!');

        const resultToString = JSON.stringify(result); // Trasformo i dati ricevuti dal backend in stringa usando JSON.stringify();
        localStorage.setItem('userData', resultToString); // Salvo i dati dell'utente in local storage;

        console.log('Success:', result);
      } else {
        throw new Error('Registrazione fallita');
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
    toggleShowPassword,
    handleChange,
    showPassword,
    formData,
  };
}
