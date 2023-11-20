import { useRef } from "react";
import {
  cardSlider1,
  cardSlider2,
  cardSlider4,
  cardSlider3,
  mask1,
  mask2,
  mask3,
  mask4,
} from "../../../assets";

import { FaPlus } from "react-icons/fa";

const Carousel = () => {
  const containerRef = useRef(null);

  // Función para desplazar hacia la izquierda
  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Ajusta según sea necesario
    }
  };

  // Función para desplazar hacia la derecha
  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Ajusta según sea necesario
    }
  };
  return (
    <div className="container mx-auto">
      <h2 className="title ">Descubre más ...</h2>
      <div
        className="relative snap-mandatory snap-x scroll-smooth  flex gap-6 overflow-x-auto mt-5 transition-all duration-500 ease-in-out "
        ref={containerRef}
      >
        <div className="relative w-[300px] aspect-[9/16] snap-center shrink-0 rounded-[10px] overflow-hidden group ">
          <div className="relative z-10  p-4 px-7 h-full flex flex-col text-[25px] ">
            <h3 className="font-bold text-white leading-[1.2]">
              Primeras generaciones
            </h3>
            <span className="grid place-content-center bg-black p-3 max-w-max rounded-full self-end mt-auto cursor-pointer  hover:bg-darkPrimary">
              <FaPlus className="text-white" />
            </span>
          </div>
          <img
            src={mask1}
            alt=""
            className="absolute z-[3] top-0 left-0 w-full h-full"
          />
          <img
            className="absolute w-full h-full top-0 left-0 z-0 group-hover:scale-[1.2] transition-transform duration-500 ease-in-out"
            src={cardSlider1}
          />
        </div>
        <div className="relative w-[300px] aspect-[9/16] snap-center shrink-0 rounded-[10px] overflow-hidden group ">
          <div className="relative z-10  p-4 px-7 h-full flex flex-col text-[25px] ">
            <h3 className="font-bold text-white leading-[1.2]">
              Aprende mas sobre Huayra
            </h3>
            <span className="grid place-content-center bg-black p-3 max-w-max rounded-full self-end mt-auto cursor-pointer  hover:bg-darkPrimary">
              <FaPlus className="text-white" />
            </span>
          </div>
          <img
            src={mask2}
            alt=""
            className="absolute z-[3] top-0 left-0 w-full h-full"
          />
          <img
            className="absolute w-full h-full top-0 left-0 z-0 group-hover:scale-[1.2] transition-transform duration-500 ease-in-out"
            src={cardSlider2}
          />
        </div>
        <div className="relative w-[300px] aspect-[9/16] snap-center shrink-0 rounded-[10px] overflow-hidden group ">
          <div className="relative z-10  p-4 px-7 h-full flex flex-col text-[25px]  ">
            <h3 className="font-bold text-white leading-[1.2]">
              Primeros pasos con tu netbook
            </h3>
            <span className="grid place-content-center bg-black p-3 max-w-max rounded-full self-end mt-auto cursor-pointer  hover:bg-darkPrimary">
              <FaPlus className="text-white" />
            </span>
          </div>
          <img
            src={mask3}
            alt=""
            className="absolute z-[3] top-0 left-0 w-full h-full"
          />
          <img
            className="absolute w-full h-full top-0 left-0 z-0 group-hover:scale-[1.2] transition-transform duration-500 ease-in-out"
            src={cardSlider3}
          />
        </div>
        <div className="relative w-[300px] aspect-[9/16] snap-center shrink-0 rounded-[10px] overflow-hidden group ">
          <div className="relative z-10  p-4 px-7 h-full flex flex-col text-[25px]">
            <h3 className="font-bold text-white leading-[1.2]">
              Mas Conectar Igualdad
            </h3>
            <span className="grid place-content-center bg-black p-3 max-w-max rounded-full self-end mt-auto cursor-pointer  hover:bg-darkPrimary">
              <FaPlus className="text-white" />
            </span>
          </div>
          <img
            src={mask4}
            alt=""
            className="absolute z-[3] top-0 left-0 w-full h-full"
          />
          <img
            className="absolute w-full h-full top-0 left-0 z-0 group-hover:scale-[1.2] transition-transform duration-500 ease-in-out"
            src={cardSlider4}
          />
        </div>
      </div>
      {/* Botones de navegación */}
      <button onClick={scrollPrev}>Prev</button>
      <button onClick={scrollNext}>Next</button>
    </div>
  );
};

export default Carousel;
