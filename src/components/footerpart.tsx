import React from "react";
import personFace from "./images/personFace.svg";
import bgOfIcond from "../assets/bgOfIcons.svg";
import Star from "../assets/star.svg";

const Footerpart = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center">Что думают о нас</h1>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-3 px-16">
        <div className="col-span-1">
          <img src={personFace} alt="personFace" />
          <h3 className="text-3xl md:text-5xl">Иван Иванов</h3>
          <i>
            Наше оборудование прозводится вручную. Мы постоянно производим
            контроль качества произведенной продукции. В то же время, если в
            ходе транспортировки или эксплуатации в течении первых 2 лет
            происходят поломки, мы всегда находим с клиентом наиболее удобный
            вариант решения вопроса.
          </i>
          <h5 className="text-xl md:text-3xl">20.10.21</h5>
        </div>
        <div className="col-span-1">
          <img src={personFace} alt="personFace" />
          <h3 className="text-3xl md:text-5xl">Иван Иванов</h3>
          <i>
            Наше оборудование прозводится вручную. Мы постоянно производим
            контроль качества произведенной продукции. В то же время, если в
            ходе транспортировки или эксплуатации в течении первых 2 лет
            происходят поломки, мы всегда находим с клиентом наиболее удобный
            вариант решения вопроса.
          </i>
          <h5 className="text-xl md:text-3xl">20.10.21</h5>
        </div>
        <div className="col-span-1">
          <img src={personFace} alt="personFace" />
          <h3 className="text-3xl md:text-5xl">Иван Иванов</h3>
          <i>
            Наше оборудование прозводится вручную. Мы постоянно производим
            контроль качества произведенной продукции. В то же время, если в
            ходе транспортировки или эксплуатации в течении первых 2 лет
            происходят поломки, мы всегда находим с клиентом наиболее удобный
            вариант решения вопроса.
          </i>
          <h5 className="text-xl md:text-3xl">20.10.21</h5>
        </div>
      </div>

      <br />
      <div>
        <h1 className="text-5xl text-center">Что думают о нас</h1>
      </div>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-4 mx-3">
        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-4 mx-3">
        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img
              style={{ width: "40px", height: "40px" }}
              src={bgOfIcond}
              alt="bgOfIcond"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img src={Star} alt="Star" className="relative z-10" />
          </div>
          <div>
            <h5 className="text-2xl">Аутентичность</h5>
            <p>
              Медное перегонное оборудование <br /> используется для получения
              эфирных <br /> масел с незапамятных времен.
            </p>
            <p className="text-xl">Читать больше</p>
          </div>
        </div>
      </div>
      <br /><br />
      <footer className="bg-gray-900 text-white py-8 px-4">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
    <div className="flex flex-col items-start lg:items-center gap-4">
      <img src="./headerLogo.svg" alt="headerLogo" className="w-32" />
      <p className="text-sm">
        © 2021 “Copper Pro” <br /> Все права защищенны
      </p>
      <a href="#" className="text-blue-400 underline">Политика конфиденциальности</a>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="flex flex-col gap-2">
        <h6 className="text-lg font-semibold">Навигация</h6>
        <p>Каталог</p>
        <p>Новости</p>
        <p>Доставка</p>
        <p>О нас</p>
        <p>Контакты</p>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-lg font-semibold">Каталог</h6>
        <p>Для эфирных масел</p>
        <p>Для гидролатов</p>
        <p>Медная посуда</p>
        <p>Аксессуары из меди</p>
        <p>Индивидуальный заказ</p>
        <p>Скидки и предложения</p>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-lg font-semibold">Контакты</h6>
        <p>
          Бажана 8-Б, Киев, <br /> 02132 Украина
        </p>
        <p>+38 (096) 990 67 56</p>
        <a href="mailto:a.alambik@gmail.com" className="text-blue-400 underline">a.alambik@gmail.com</a>
        <div className="flex gap-4 mt-2">
          <a href="#"><img src="./twitter.svg" alt="twitter" /></a>
          <a href="#"><img src="./facebook.svg" alt="facebook" /></a>
          <a href="#"><img src="./instagram.svg" alt="instagram" /></a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Footerpart;
