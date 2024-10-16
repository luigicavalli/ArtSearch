import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export function useHandleSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:3000/sign-up';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        console.log(result)

        Swal.fire({
          title: "Perfetto!",
          text: "Registrazione completata!",
          icon: "success",
          confirmButtonColor: '#0c4a6e',
          background: '#f1f5f9',
        });

        delete result.user.password;

        const user = JSON.stringify(result.user);
        
        localStorage.setItem('userData', user); // Salvo i dati dell'utente in local storage;

        console.log('Success:', user);

        navigate("/login")
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Errore durante la registrazione',
          confirmButtonColor: '#0c4a6e',
          background: '#f1f5f9',
        });
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
