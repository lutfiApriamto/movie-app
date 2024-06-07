import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSection from "./assets/Fragment/SearchSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Loader from "./assets/Component/Loader";
import Footer from "./assets/Layout/Footer";
import Hero from "./assets/Layout/Hero";
import Header from "./assets/Layout/Header"; // Impor komponen Header

const App = () => {
  const movies = ["avengers", "superman", "batman", "transformers", "harry potter",  "star wars", "thor", "naruto", "demon slayer", "one piece", "dragon ball", "bleach", "jujutsu kaisen", "one punch man", "attack on titan", "money heist", "narcos", "madagascar", "world war", "kungfu", "samurai", "avatar", "ice age"];

  const [searchClicked, setSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const onSearchHandler = async () => {
    if (!searchTerm) {
      return;
    }

    try {
      const { data: responseData } = await axios.get(`http://www.omdbapi.com/?apikey=fba3f92f&s=${searchTerm}`);
      setData(responseData.Search || []);
      setSearchClicked(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Header section start */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchHandler={onSearchHandler} />
      {/* Header section end */}

      {/* Hero section start */}
      <Hero />
      {/* Hero section end */}

      {/* Main section start */}
      <section id="main" className="w-full">
        {!searchClicked && (
          <div>
            {movies.map((movie) => (
              <Loader key={movie} searchTerm={movie} />
            ))}
          </div>
        )}
        {searchClicked && <SearchSection data={data} />}
      </section>
      {/* Main section end */}

      <Footer />
    </>
  );
};

export default App;
