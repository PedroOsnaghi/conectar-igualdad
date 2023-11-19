import { bannerNoteBook } from "../../../assets";

export default function Hero() {
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0 w-full h-full blur-gradient z-5 filter backdrop-blur-[11px]" />
      <img src={bannerNoteBook} className="w-full" alt="" />
    </div>
  );
}
