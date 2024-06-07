// Home.jsx
import React, { useContext } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../index.css';
import Loader from "../Component/Loader";
import Footer from "../Layout/Footer";
import Hero from "../Layout/Hero";
import Header from "../Layout/Header";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";

const Home = () => {
  const movies = ["avengers", "superman", "batman", "transformers", "harry potter",  "star wars", "thor", "naruto", "demon slayer", "one piece", "dragon ball", "bleach", "jujutsu kaisen", "one punch man", "attack on titan", "money heist", "narcos", "madagascar", "world war", "kungfu", "samurai", "avatar", "ice age"];

  const { searchTerm, setSearchTerm, onSearchHandler, data, error } = useContext(SearchContext);

  const navigate = useNavigate();

  const onSearchClickHandler = async () => {
    await onSearchHandler();
    navigate('/usersearch');
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchHandler={onSearchClickHandler} />
      <Hero />
      <section id="main" className="w-full">
        <div>
          {movies.map((movie) => (
            <Loader key={movie} searchTerm={movie} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
