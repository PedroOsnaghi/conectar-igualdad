import { createContext, useContext, useEffect, useRef, useState } from "react";

const CardContext = createContext({
  inside: false,
  setCurrent: (b) => {
    b;
  },
  active: null,
  setActiveCard: (b) => {
    b;
  },
});

export function Card({ children }) {
  return { children };
}

export function Connector({ children }) {
  return (
    <div className="relative w-full md:px-32 px-8 z-[0] ">
      {children}
      <span className="hidden md:block left-0 h-[1px] w-full bg-lightSecondary absolute top-[50%] z-[-10]" />
      <span className="hidden border-[1px] border-lightSecondary absolute top-[50%] left-0 w-[34px] h-[34px] rounded-full translate-x-[-50%] translate-y-[-50%] bg-darkPrimary md:flex items-center justify-center">
        <span className="w-[12px] h-[12px] bg-primary rounded-full shadow-[0_0_14px_5px_rgba(1,186,253,0.7)] " />
      </span>
      <span className="hidden border-[1px] border-lightSecondary absolute top-[50%] right-0 w-[34px] h-[34px] rounded-full translate-x-[50%] translate-y-[-50%] bg-darkPrimary md:flex items-center justify-center">
        <span className="w-[12px] h-[12px] bg-primary rounded-full shadow-[0_0_14px_5px_rgba(1,186,253,0.7)] " />
      </span>
    </div>
  );
}

export function Root({ children, className, name }) {
  const { inside, setCurrent, active, setActiveCard } = useContext(CardContext);

  const handleMouseEnter = () => {
    setCurrent(true);
    setActiveCard(name);
  };

  const handleMouseLeave = () => {
    setCurrent(false);
    setActiveCard(null);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transitionShadow transitionTransform border-[1px]  p-0 overflow-hidden rounded-[10px] w-full pointer-events-auto
      ${className}
      ${inside && active == name ? "card-hover " : "border-lightSecondary"}`}
    >
      {children}
    </div>
  );
}

export function Container({ children, className, isConnected = true }) {
  const [inside, setInside] = useState(false);
  const [active, setActive] = useState(null);

  const setCurrent = (value) => {
    setInside(value);
  };

  const setActiveCard = (value) => {
    setActive(value);
  };

  return (
    <div
      className={`w-full border-[1px] border-lightSecondary rounded-md relative py-10 md:py-24 md:mb-[108px] ${className}`}
    >
      {isConnected && (
        <>
          <span className="border-[1px] border-lightSecondary absolute top-0 left-[50%] w-[34px] h-[34px] rounded-full translate-x-[-50%] translate-y-[-50%] bg-darkPrimary flex items-center justify-center">
            <span className="w-[12px] h-[12px] bg-primary rounded-full shadow-[0_0_14px_5px_rgba(1,186,253,0.7)] " />
          </span>
          <span className="w-[1px] h-[108px]  absolute top-0 left-[50%] translate-y-[-100%] z-[-1] border-gradient" />
          <span className="border-[1px] border-lightSecondary absolute bottom-0 left-[50%] w-[34px] h-[34px] rounded-full translate-x-[-50%] translate-y-[50%] bg-darkPrimary flex items-center justify-center">
            <span className="w-[12px] h-[12px] bg-primary rounded-full shadow-[0_0_14px_5px_rgba(1,186,253,0.7)] " />
          </span>
          <span className="w-[1px] h-[108px]  absolute bottom-0 left-[50%] translate-y-[100%] rotate-180 z-[-1] border-gradient" />
        </>
      )}
      <CardContext.Provider
        value={{ inside, setCurrent, active, setActiveCard }}
      >
        {children}
      </CardContext.Provider>
    </div>
  );
}

export function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={`z-[3] ${className}`} />;
}

export function Content({ children, className, pointer = false }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { inside } = useContext(CardContext);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!inside) return;
      const boundingBox = cardRef.current.getBoundingClientRect();
      const offsetX = e.clientX - boundingBox.left;
      const offsetY = e.clientY - boundingBox.top;

      setPosition({ x: offsetX, y: offsetY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    // Limpia el evento de escucha cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [inside]);

  return (
    <div
      ref={cardRef}
      className={`p-9 relative w-full bg-darkSecondary  ${
        !inside && "z-[100] "
      } ${className}`}
    >
      <div
        style={{
          zIndex: 10,
          position: "relative",
          cursor: `${pointer ? "pointer" : "default"}`,
          pointerEvents: `${pointer ? "auto" : "none"}`,
        }}
      >
        {children}
      </div>

      <span
        style={{
          zIndex: 0,
          display: inside ? "block" : "none",
          position: "absolute",
          left: `calc(${position.x + "px"} - 8%)`,
          top: `calc(${position.y + "px"} - 30%)`,
        }}
        className="w-[20%] aspect-square bg-[#d9d9d9] blur-[53px] absolute top-0 right-0 rounded-full opacity-10"
      />
    </div>
  );
}

export function Node({ className }) {
  return (
    <div className={className}>
      <span />
    </div>
  );
}

Card.Container = Container;
Card.Root = Root;
Card.Image = Image;
Card.Content = Content;
Card.Connector = Connector;
