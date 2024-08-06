import React from "react";
import ImageOfMain from "../components/images/ImageOfMain.svg";

function Main() {
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center">Лучшие продажи</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="relative col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <p className="absolute bottom-20 left-0 w-full bg-transparent text-center">
            Для эфирных масел
          </p>
        </div>
        <div className="relative col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <p className="absolute bottom-20 left-0 w-full bg-transparent text-center">
            Для эфирных масел
          </p>
        </div>
        <div className="relative col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <p className="absolute bottom-20 left-0 w-full bg-transparent text-center">
            Для эфирных масел
          </p>
        </div>
        <div className="relative col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <p className="absolute bottom-20 left-0 w-full bg-transparent text-center">
            Для эфирных масел
          </p>
        </div>
        <div className="relative col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <p className="absolute bottom-20 left-0 w-full bg-transparent text-center">
            Для эфирных масел
          </p>
        </div>
        <div className="relative col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <p className="absolute bottom-20 left-0 w-full bg-transparent text-center">
            Для эфирных масел
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center">Лучшие продажи</h1>
      </div>
      <br /><br />
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-slate-100 gap-4">
        <div className="col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <div className="flex justify-around items-center">
            <p className=" bg-transparent">
              Медный чайник с <br /> фарфоровой ручкой
            </p>
            <h3 className=" bg-transparent">1 953 грн</h3>
          </div>
        </div>
        <div className="col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <div className="flex justify-around items-center">
            <p className="bg-transparent ">
              Медный чайник с <br /> фарфоровой ручкой
            </p>
            <h3 className=" bg-transparent">1 953 грн</h3>
          </div>
        </div>
        <div className="col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <div className="flex justify-around items-center">
            <p className="bg-transparent">
              Медный чайник с <br /> фарфоровой ручкой
            </p>
            <h3 className="bg-transparent">1 953 грн</h3>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="flex justify-center items-center">
        <button className="w-full md:w-1/3 bg-custom-gradient text-white py-2 px-4 rounded mt-4">
          Купить
        </button>
      </div>
    </div>
  );
}
export default Main;
