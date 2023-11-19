import { cardSlider1 } from "../../../assets";
import { cardSlider2 } from "../../../assets";
import { cardSlider4 } from "../../../assets";
import { cardSlider3 } from "../../../assets";

const Carousel = () => {
  return (
    <div className="container mx-auto">
      <h2 className="descubre ">Descubre más ...</h2>
      <div className="relative snap-x w-full flex gap-6 snap-mandatory overflow-x-auto ">
        <div className="snap-center shrink-0">
          <img src={cardSlider1} />
        </div>
        <div className="snap-center shrink-0">
          <img src={cardSlider2} />
        </div>
        <div className="snap-center shrink-0">
          <img src={cardSlider3} />
        </div>
        <div className="snap-center shrink-0">
          <img src={cardSlider4} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
