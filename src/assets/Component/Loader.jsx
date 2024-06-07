import React, { useState, useEffect } from "react";
import MovieContainer from "./MovieContainer";
import axios from "axios";

const Loader = ({ searchTerm }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=fba3f92f&s=${searchTerm}`);
        setMovieData(response.data.Search || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <MovieContainer title={searchTerm} data={movieData} />
  );
};

export default Loader;
