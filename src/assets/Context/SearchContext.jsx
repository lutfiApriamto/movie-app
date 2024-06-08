// SearchContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const onSearchHandler = async () => {
    if (!searchTerm) {
      console.log(searchTerm)
      return;
    }

    try {
      const { data: responseData } = await axios.get(`http://www.omdbapi.com/?apikey=fba3f92f&s=${searchTerm}`);
      if(responseData.Response === 'False'){
        setError(responseData.Error);
      } else {
        setData(responseData.Search || []);
        setError('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(error); // This will print the updated error message
  }, [error]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, data, onSearchHandler, error }}>
      {children}
    </SearchContext.Provider>
  );
};
