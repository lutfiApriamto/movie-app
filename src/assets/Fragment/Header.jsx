import React, { useState, useEffect } from 'react';
import '../../index.css'

const Header = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleScroll = () => {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    if (window.scrollY > fixednav) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <header className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 ${navbarFixed ? 'navbar-fixed' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-6">LutfiApriamto</a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${hamburgerActive ? 'hamburger-active' : ''}`}
              onClick={toggleHamburger}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <nav
              id="nav-menu"
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${hamburgerActive ? '' : 'hidden'}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="text-base text-dark py-2 flex mx-8 group-hover:text-primary">Beranda</a>
                </li>
                <li className="group">
                  <a href="#about" className="text-base text-dark py-2 flex mx-8 group-hover:text-primary">Tentang Saya</a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="text-base text-dark py-2 flex mx-8 group-hover:text-primary">Portfolio</a>
                </li>
                <li className="group">
                  <a href="#clients" className="text-base text-dark py-2 flex mx-8 group-hover:text-primary">Clients</a>
                </li>
                <li className="group">
                  <a href="#blog" className="text-base text-dark py-2 flex mx-8 group-hover:text-primary">Blog</a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-dark py-2 flex mx-8 group-hover:text-primary">Contact Me</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
