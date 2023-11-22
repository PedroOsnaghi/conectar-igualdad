import { bannerNoteBook } from "../../../assets";
import { Card } from "../../../components/shared/Card";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="w-full relative md:h-[30%] px-8   md:min-h-[400px] min-h-[350px]">
      <div className=" top-0 left-0 container mx-auto  md:pt-28 pt-16 w-full h-full grid place-content-center">
        <Card.Root className="relative z-30 ">
          <article className="w-full h-full px-[40px] py-4 bg-darkSecondary">
            <h2 className="title-medium text-white">Encontrá tu modelo...</h2>
            <p className="paragraph-small text-lightPrimary mt-1">
              Buscá tu modelo de netbook y descubre todo lo que necesitas para
              comenzar a usarla
            </p>
            <div className="relative mt-3 w-full">
              <input
                type="text"
                className="border-[1px] w-full  outline-none text-lightSecondary border-lightSecondary focus:border-primary rounded-[5px]  py-1 bg-darkPrimary placeholder:text-lightSecondary placeholder:text-opacity-50 placeholder:italic pl-[50px] "
                placeholder="Ej: Netbook G10"
              />
              <span className="absolute top-0 left-0 w-[50px] h-full text-primary grid place-content-center">
                <FaSearch />
              </span>
            </div>
            <div className="flex justify-between mt-1 text-primary">
              <a href="#">Necesitás ayuda ?</a>
              <a href="#">No encuentro mi modelo</a>
            </div>
          </article>
        </Card.Root>
      </div>

      <div className="absolute top-0 left-0 w-full h-full blur-gradient z-10 filter backdrop-blur-[11px]" />
      <img
        src={bannerNoteBook}
        className="absolute top-0 left-0 z-0 w-full h-full"
        alt=""
      />
    </div>
  );
}
