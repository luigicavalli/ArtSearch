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

      const result = await response.json();
      alert('Registrazione completata con successo!');
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
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
