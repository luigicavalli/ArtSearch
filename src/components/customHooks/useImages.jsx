import { useState } from 'react';
import Swal from 'sweetalert2';

export function useImages() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}&hasImages=true`;

  const images = async () => {
    Swal.fire({
      title: 'Caricamento in corso...',
      html: 'Attendere mentre vengono caricati i dati.',
      allowOutsideClick: false,
      loader: '#0c4a6e',
      background: '#f1f5f9',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const closeLoadingAlert = () => {
      Swal.close();
    };

    try {
      const response = await fetch(url);

      const data = await response.json();

      const objectIDs = data.objectIDs?.slice(0, 20) || [];

      const objectDetailsPromises = objectIDs.map(async (id) => {
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        return response.json();
      });

      const objectDetails = await Promise.all(objectDetailsPromises);

      const filteredData = objectDetails.filter((image) =>
        image.artistDisplayName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      closeLoadingAlert();

      setData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return { images, handleChange, data, searchTerm };
}
