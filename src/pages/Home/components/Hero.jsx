import { dell } from "../../../assets";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import LogoMinisterio from "../../../components/LogoMinisterio";
import MenuCard from "./MenuCard";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto flex flex-col mt-7">
        <h1 className="text-[35px] font-inter font-semibold flex gap-2 text-center mx-auto">
          <span className="text-primary">Argentina</span>
          <span className="text-lightPrimary font-bold">Unida</span>
        </h1>
        <div className="relative ">
          <LogoMinisterio className="md:animacion-aparecer-rapida  absolute md:top-[6.5%] md:left-[22%] w-full z-10 md:max-w-[8%] max-w-[12%] translate-y-[280%] translate-x-[90%] md:translate-x-[50%] md:translate-y-[50%]" />

          <img
            src={dell}
            alt="Imagen Netbook generacion 2023 del programa conectar igualdad"
            className="h-[50%] md:max-w-[65%] md:h-[800px] mx-auto mt-9 "
          />
          <MenuCard className="hidden md:flex md:absolute md:top-0 md:left-0 py-24 mb-[108px]" />
          <div className="absolute bg-darkPrimary w-full max-w-[53%] translate-x-[44%] h-full max-h-[70%] translate-y-[18%] top-0 z-[-5] shadow-inner-xl shadow-neutral-500 " />
          <LogoMinisterio className="md:animacion-aparecer opacity-100 md:opacity-0 absolute md:top-[30%] md:left-[30%] top-[25%] left-[3%] w-full z-0 md:max-w-[20%] max-w-[50%] translate-x-[50%] translate-y-[50%]" />
          <div className="opacity-1 md:opacity-0 md:animate-[fadeIn] md:animate-duration-[7000ms]  animate-ease-in-out absolute bg-primary w-full md:max-w-[53%] max-w-[80%] md:translate-x-[44%] translate-x-[13%] h-full md:max-h-[70%] max-h-[60%] md:translate-y-[18%] translate-y-[30%] top-0 z-[-1] shadow-inner-xl shadow-neutral-500 " />
          <span className="animate-[fogBlueLeft] animate-infinite animate-duration-[4000ms] animate-ease animate-alternate   bg-primary md:w-[20%] w-[15%] aspect-square absolute md:top-[10%] top-[5%] left-[30%] rounded-full filter md:blur-2xl blur-xl z-[-10]" />
          <span className="animate-[fogWhite] animate-infinite animate-duration-[5000ms] animate-ease animate-alternate animate-delay-[1500ms] bg-lightPrimary md:w-[20%] w-[15%] aspect-square absolute md:top-[6%] md:right-[40%] top-[4%] right-[42%] rounded-full filter md:blur-2xl blur-xl z-[-10]" />
          <span className="animate-[fogBlueRight] animate-infinite animate-duration-[4000ms] animate-ease animate-alternate animate-delay-[1500ms]   bg-primary md:w-[20%] w-[15%] aspect-square absolute md:top-[10%] md:right-[30%] top-[5%] right-[30%] rounded-full filter md:blur-2xl blur-xl z-[-10]" />
        </div>
        <h3 className="mx-auto md:text-2xl text-xl text-center md:text-left font-inter font-semibold flex flex-col md:flex-row gap-2 mt-[35px]">
          <span className="text-lightSecondary">Conocé el nuevo modelo</span>
          <span className="font-semibold gamer-gradient">
            Netbook DELL 2023
          </span>
        </h3>
        <a
          className="flex items-center gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 mx-auto mt-6 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer"
          href="#"
        >
          Ver Modelo
          <FaArrowUpRightFromSquare className="text-md" />
        </a>
        <MenuCard className="flex md:hidden md:absolute md:top-0 md:left-0 py-10" />
      </div>
    </>
  );
}
