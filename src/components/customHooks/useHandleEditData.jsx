import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export function useHandleEditData() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('userData');

    const userParsed = JSON.parse(user);

    setFormData(userParsed);
  }, []);

  const url = `https://66fc66fec3a184a84d16f9c5.mockapi.io/api/mock-registration/users/${formData.id}`;

  const handleEditData = async (event, updatedData) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...updatedData,
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();

        Swal.fire({
          title: 'Perfetto!',
          text: 'Dati aggiornati con successo!',
          icon: 'success',
          confirmButtonColor: '#0c4a6e',
          background: '#f1f5f9',
        });

        delete updatedUser.password;

        const resultToString = JSON.stringify(updatedUser);

        localStorage.setItem('userData', resultToString);

        navigate('/dashboard');

        console.log('Dati aggiornati', resultToString);
      }
    } catch (error) {
      console.error(error);
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
    handleEditData,
    toggleShowPassword,
    handleChange,
    showPassword,
    formData,
  };
}
