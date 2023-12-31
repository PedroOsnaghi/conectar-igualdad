import { logoME, logoArgentinaUnida } from "../../../assets";

export default function Footer() {
  return (
    <footer className="footer-gradient pb-20">
      <section className="container mx-auto">
        <div className="flex items-baseline justify-between">
          <img
            src={logoME}
            alt="Logo Ministerio de Educacion de la Nacion Argentina"
            className="w-[30%] md:w-[15%] opacity-50 translate-y-[16px]"
          />
          <img
            src={logoArgentinaUnida}
            alt="Logo Argentina Unida"
            className="w-[20%] md:w-[15%] filter brightness-200 translate-y-[25px]"
          />
          <h3 className="font-inter font-semibold text-lightSecondary text-[6px] md:text-[20px]">
            Presidencia de la Nación
          </h3>
        </div>
        <hr className="ml-[60px]" />
      </section>
    </footer>
  );
}
