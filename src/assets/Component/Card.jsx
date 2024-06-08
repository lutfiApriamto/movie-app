import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const Card = (props) => {
  const { src, movieTitle, movieYear, movieId } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;

  const showModal = async () => {
    setIsLoading(true);
    setIsModalOpen(true);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`);
      setModalData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-5/6 md:w-2/5 flex bg-black">
      <div className="w-1/2 h-full">
        <img src={src} alt="Card Image" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h1 className="w-full text-white font-bold text-3xl mb-2 sm:mb-3 sm:text-3xl md:text-xl lg:text-2xl">
            {movieTitle}
          </h1>
          <p className="text-white font-thin text-sm sm:text-sm">{movieYear}</p>
        </div>
        <button
          className="font-light lg:text-xl bg-red-600 rounded-md text-white py-2 px-4 mt-auto md:text-sm"
          onClick={showModal}
        >
          Show detail..
        </button>
      </div>
      {isModalOpen && (
        <Modal data={modalData} closeModal={closeModal} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Card;
