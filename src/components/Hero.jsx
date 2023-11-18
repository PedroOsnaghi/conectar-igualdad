import { dell } from "../assets";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto flex flex-col mt-7">
        <h1 className="text-[35px] font-inter font-semibold flex gap-2 text-center mx-auto">
          <span className="text-primary">Argentina</span>
          <span className="text-lightPrimary font-bold">Unida</span>
        </h1>
        <div className="relative group">
          <img
            src={dell}
            alt="Imagen Netbook generacion 2023 del programa conectar igualdad"
            className="max-w-[65%] mx-auto mt-9"
          />
          <span className="animate-[fogBlueLeft] animate-infinite animate-duration-[4000ms] animate-ease animate-alternate   bg-primary w-[20%] aspect-square absolute top-[10%] left-[30%] rounded-full filter blur-2xl z-[-1]" />
          <span className="animate-[fogWhite] animate-infinite animate-duration-[5000ms] animate-ease animate-alternate animate-delay-[1500ms] bg-lightPrimary w-[20%] aspect-square absolute top-[6%] right-[40%] rounded-full filter blur-2xl z-[-1]" />
          <span className="animate-[fogBlueRight] animate-infinite animate-duration-[4000ms] animate-ease animate-alternate animate-delay-[1500ms]   bg-primary w-[20%] aspect-square absolute top-[10%] right-[30%] rounded-full filter blur-2xl z-[-1]" />
        </div>
        <h3 className="mx-auto text-2xl font-inter font-semibold flex gap-2 mt-[35px]">
          <span className="text-lightSecondary">Conoce el nuevo modelo</span>
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
      </div>
    </>
  );
}
