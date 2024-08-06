import React, { useState } from "react";
import bgImage from "../assets/BG.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="w-full bg-cover bg-no-repeat bg-center relative pl-6 pr-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
        <img
          src="./headerLogo.svg"
          alt="header_Logo"
          className="h-12 md:h-16"
        />

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-white cursor-pointer text-base md:text-lg">
            <li>Каталог</li>
            <li>Новости</li>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4 text-white text-lg">
          <span className="cursor-pointer material-symbols-outlined">
            favorite
          </span>
          <span className=" cursor-pointer material-symbols-outlined">
            person
          </span>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-[#5E3928] via-[#E4A16F] to-[#E4A16F] text-white">
          <ul className="flex flex-col justify-center items-center space-y-4 py-4 px-4 text-lg">
            <li>Каталог</li>
            <li>Новости</li>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>
      )}

      <div className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <div className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl">
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>

      <div className="ml-8 relative z-10 px-4 py-8">
        <h1 className="text-4xl md:text-6xl text-white">Хит продаж</h1>
        <br />
        <h2 className="text-3xl md:text-5xl text-white mt-4">
          Дистиллятор для <br />
          эфирных масел
        </h2>
        <br />
        <div className="flex gap-8 mt-4">
          <p className="text-lg md:text-2xl text-white">Цена</p>
          <h4 className="text-lg md:text-2xl text-white">4 906 грн</h4>
        </div>
        <br />
        <button className="w-full md:w-1/4 bg-custom-gradient text-white py-2 px-4 rounded mt-4">
          Купить
        </button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </header>
  );
};

export default Header;
