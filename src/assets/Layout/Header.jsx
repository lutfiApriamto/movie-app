import React from 'react';

const Header = ({ searchTerm, setSearchTerm, onSearchHandler, error }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearchHandler();
      setSearchTerm('');
    }
  };

  const handleSearchClick = () => {
    onSearchHandler();
    setSearchTerm('');
  };

  return (
    <header className="bg-black fixed top-0 left-0 w-full flex items-center px-3 py-2 z-50 rounded-b-lg md:px-5 md:py-3 lg:py-4">
      <div className="w-full flex justify-between">
        <a href="#" className="text-3xl font-bold text-red-600 my-auto md:text-4xl lg:text-5xl italic">LM!</a>

        <div className="w-1/2 py-1 px-2 flex bg-white rounded-lg justify-between box-content sm:w-1/3 lg:py-2 lg:w-2/5">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Search Movie..."
            className="text-black text-base w-full font-bold py-1 px-3 mr-2 outline-red-600 bg-white placeholder:text-sm rounded-md"
          />
          <button
            className="px-2 bg-red-600 text-black rounded-md text-sm lg:px-4 lg:py-2 lg:text-base hover:bg-red-500 transition duration-700"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
