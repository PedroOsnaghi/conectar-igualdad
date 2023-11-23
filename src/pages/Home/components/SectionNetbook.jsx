import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { top } from "../../../assets";
import { useRef } from "react";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { Link } from "react-router-dom";

const animate_initial = "opacity-0 translate-x-[-200px]";
const animate_final = "opacity-100 translate-x-0";

const animate_text_initial = "opacity-0 md:translate-x-[100px]";
const animate_text_final = "opacity-50 md:translate-x-0";

export default function SectionNetbook() {
  const refNetbook = useRef(null);
  const refText = useRef(null);
  const isVisible = useIsVisible(refNetbook);
  const isVisibleText = useIsVisible(refText);

  return (
    <section className="container mt-28 mx-auto flex flex-col items-center relative mb-0 md:mb-[-200px]">
      <h2 className="title">¿Ya tenés tu Netbook?</h2>
      <div className="flex mt-9">
        <div
          className={`transition-all duration-[1600ms] ease-in-out max-w-[60%]  relative translate-y-[-20%] z-[-10]  ${
            isVisible ? animate_final : animate_initial
          } `}
        >
          <img src={top} alt="Imagen de Netbook Vista desde arriba" />
          <span className="absolute top-0 left-0 w-full h-full layer-gradient" />
          <span
            ref={refNetbook}
            className="absolute h-[60%] bottom-0 left-0 w-full"
          ></span>
        </div>

        <div className="mt-4 md:mt-[120px] mx-8">
          <p
            ref={refText}
            className={`transition-all duration-[2000ms] ease-in-out paragraph-medium pr-5 ${
              isVisibleText ? animate_text_final : animate_text_initial
            } `}
          >
            Si ya recibiste tu Netbook, podés conocer todas sus funcionalidades,
            acceder a cursos y tutoriales.
          </p>
          <a
            className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center gap-4 text-md md:text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max mx-auto mt-4  md:mt-16 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer ${
              isVisibleText ? "opacity-100" : "opacity-0"
            }`}
            href="#"
          >
            <Link to="/login" className="flex items-center gap-3">
              Comenzar
              <FaArrowUpRightFromSquare className="text-md" />
            </Link>
          </a>
        </div>
      </div>
    </section>
  );
}
