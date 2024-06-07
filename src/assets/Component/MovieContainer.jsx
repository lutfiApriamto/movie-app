import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "./Modal";
import axios from "axios";

const MovieContainer = ({ title, data }) => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
    ],
  };

  const fetchMovieDetails = async (imdbID) => {
    setIsLoading(true);
    setIsModalOpen(true);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=fba3f92f&i=${imdbID}`);
      setModalData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="px-7 mb-2">
      <h1 className="font-semibold text-white text-xl mb-2 capitalize lg:text-2xl">{title}</h1>
      
      <div className="">
        <Slider {...settings}>
          {data.map(item => (
            <div key={item.imdbID} className="w-3/5 h-48 rounded-lg shadow-xl bg-black overflow-hidden">
              <div className="h-1/2">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.Poster})` }}></div>
              </div>

              <div className="px-2 flex flex-col pt-1">
                <div>
                  <h1 className="text-white font-semibold text-sm capitalize">{item.Title}</h1>
                  <p className="text-white text-sm font-thin">{item.Year}</p>
                </div>
                <button 
                  className="text-white self-end px-2 py-1 bg-red-600 rounded-full text-sm font-thin"
                  onClick={() => fetchMovieDetails(item.imdbID)}
                >
                  Detail ..
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {isModalOpen && (
        <Modal data={modalData} closeModal={closeModal} isLoading={isLoading} />
      )}
    </div>
  );
};

export default MovieContainer;
