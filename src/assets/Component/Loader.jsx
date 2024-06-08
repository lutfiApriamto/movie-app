import React, { useState, useEffect } from "react";
import MovieContainer from "./MovieContainer";
import axios from "axios";

const Loader = ({ searchTerm }) => {
  const [movieData, setMovieData] = useState([]);
  const apiKey = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
        setMovieData(response.data.Search || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm, apiKey]);

  return (
    <MovieContainer title={searchTerm} data={movieData} />
  );
};

export default Loader;
