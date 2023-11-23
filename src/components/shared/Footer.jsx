import { logoArgentinaUnida, logoME } from "../../assets";

export default function Footer({ className }) {
  return (
    <footer className={`footer-gradient pb-20  bottom-0 w-full ${className}`}>
      <section className="container px-8 md:mx-auto">
        <div className="flex items-baseline justify-between">
          <img
            src={logoME}
            alt="Logo Ministerio de Educacion de la Nacion Argentina"
            className="w-[25%] md:w-[15%] opacity-50 translate-y-[16px]"
          />
          <img
            src={logoArgentinaUnida}
            alt="Logo Argentina Unida"
            className="w-[18%] md:w-[15%] filter brightness-200 translate-y-[27%] md:translate-y-[25px]"
          />
          <h3 className="font-inter font-semibold text-lightSecondary text-[10px] md:text-[20px]">
            Presidencia de la Nacion
          </h3>
        </div>
        <hr className="ml-[7%] mt-[2%] md:mt-0 md:ml-[60px]" />
      </section>
    </footer>
  );
}
