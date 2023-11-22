import { netbook } from "../../../assets";

export default function SectionNotebook() {
  return (
    <div className="relative container mx-auto text-center flex justify-between md:h-[400px] h-[200px] z-50 ">
      <div className="w-full max-w-[80%] mx-auto flex ">
        <div className="relative w-[50%]">
          <span className="absolute md:top-[-10%] top-[-20%] left-[-20%] scale-75 md:scale-100 md:left-[40%] bg-primary w-[170px] h-[170px] z-[3]">
            <span className="absolute  left-0 flex flex-col justify-between h-[170px] w-[170px]">
              <h2 className="relative text-lightPrimary font-bold text-[44px] z-[4]">
                Nueva
              </h2>
              <h2 className="relative text-lightPrimary font-bold text-[44px] z-[4]">
                2023
              </h2>
            </span>
          </span>
          <span className="absolute md:top-[16px] top-[-10%] md:left-[70%] left-[50%] scale-50 md:scale-100 bg-gamerRed w-[140px] h-[140px] z-[3]">
            <span className="absolute left-[20%] h-[140px] translate-y-[20%]">
              <h2 className="relative text-lightPrimary font-bold text-[44px] z-[4]">
                Generación
              </h2>
            </span>
          </span>
        </div>
        <div className="relative w-full  md:w-[50%] scale-150 md:scale-100">
          <img
            className="absolute md:right-[25%] right-[15%] top-[5%] md:top-[-15%]"
            src={netbook}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
