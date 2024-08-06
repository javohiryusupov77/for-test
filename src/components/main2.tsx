import React from "react";
import ImageOfMain from "./images/ImageOfMain.svg";

const Main2 = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl text-center">Лучшие продажи</h1>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="col-span-1">
          <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
          <div className="flex justify-around items-center">
            <p className=" bg-transparent">
              Медный чайник с <br /> фарфоровой ручкой
            </p>
            <h3 style={{ color: "#9B0000" }} className=" bg-transparent">
              1 953 грн
            </h3>
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
      <br />
      <div className="flex justify-center items-center">
        <button className="w-full md:w-1/3 bg-custom-gradient text-white py-2 px-4 rounded mt-4">
          Купить
        </button>
      </div>
      <br />
      <br />

      <div className="bg-slate-100">
      <div>
        <h1 className="text-5xl text-center">Лучшие продажи</h1>
      </div>
      <br />
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
          <div className="col-span-1">
            <img className="w-full" src={ImageOfMain} alt="ImageOfMain" />
            <div className="flex justify-around items-center">
              <p className=" bg-transparent">
                Медный чайник с <br /> фарфоровой ручкой
              </p>
              <h3 style={{ color: "#9B0000" }} className=" bg-transparent">
                1 953 грн
              </h3>
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
        <br />
        <div className="flex justify-center items-center">
          <button className="w-full md:w-1/3 bg-custom-gradient text-white py-2 px-4 rounded mt-4">
            Купить
          </button>
        </div>
        <br />
      </div>
    </>
  );
};

export default Main2;
