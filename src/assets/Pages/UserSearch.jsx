// UserSearch.jsx
import React, { useContext } from "react";
import Header from "../Layout/Header";
import Hero from "../Layout/Hero";
import SearchSection from "../Fragment/SearchSection";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";

const UserSearch = () => {

  const { searchTerm, setSearchTerm, onSearchHandler, data, error } = useContext(SearchContext);
  return (
    <>
       <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchHandler={onSearchHandler} />
      <Hero />
      <div className="text-center flex justify-center sm:mt-5">
        {error && <h1 className="text-3xl font-bold text-red-600">{error}</h1>}
      </div>
      {!error && <SearchSection data={data} />}
      <div className="text-center flex justify-center sm:mt-5">
        <Link to="/" className="text-white bg-red-600 px-3 py-2 rounded-full block">Back to Home</Link>
      </div>
      <Footer />
    </>
  );
};

export default UserSearch;
