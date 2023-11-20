import { netbook } from "../../../assets";

export default function SectionNotebook() {
  return (
    <div className="relative container mx-auto text-center flex justify-between h-[400px] z-50 ">
      <div className="w-full max-w-[80%] mx-auto flex ">
        <div className="relative w-[50%]">
          <span className="absolute top-[-10%] left-[40%] bg-primary w-[170px] h-[170px] z-[3]">
            <span className="absolute  left-0 flex flex-col justify-between h-[170px] w-[170px]">
              <h2 className="relative text-lightPrimary font-bold text-[44px] z-[4]">
                Nueva
              </h2>
              <h2 className="relative text-lightPrimary font-bold text-[44px] z-[4]">
                2023
              </h2>
            </span>
          </span>
          <span className="absolute top-[16px] left-[70%] bg-gamerRed w-[140px] h-[140px] z-[3]">
            <span className="absolute left-[20%] h-[140px] translate-y-[20%]">
              <h2 className="relative text-lightPrimary font-bold text-[44px] z-[4]">
                Generacion
              </h2>
            </span>
          </span>
        </div>
        <div className="relative  w-[50%]">
          <img
            className="absolute right-[25%] top-[-15%]"
            src={netbook}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
