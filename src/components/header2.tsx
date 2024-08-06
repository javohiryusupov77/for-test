import Background from "../assets/BG.svg";

const Header = () => {

  return (
    <header
      className="w-full bg-cover bg-no-repeat bg-center relative pl-6 pr-6"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="ml-8 relative z-10 px-4 py-8">
        <h1 className="text-4xl md:text-6xl text-white">1 + 1 = 3</h1>
        <br />
        <br />
        <div className="flex gap-8 mt-4">
          <h4 className="text-lg md:text-2xl text-white">
            Закажите два товара и <br />получите третий бесплатно
          </h4>
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
