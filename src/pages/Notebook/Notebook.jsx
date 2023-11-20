import Navbar from "../../components/shared/navbar";
import Carousel from "./components/Carousel";
import Footer from "../../components/shared/Footer";

import Hero from "./components/Hero";
import SectionNotebook from "./components/SectionNotebook";
import * as Tabs from "@radix-ui/react-tabs";
import SectionTec from "./components/SectionTec";
const Notebook = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <SectionNotebook />
      </header>

      <Tabs.Root
        className="container mx-auto flex flex-col w-full"
        defaultValue="especificaciones"
      >
        <Tabs.List
          className="shrink-0 flex border-b border-mauve6"
          aria-label="Especificaciones tecnicas de tu Netbook"
        >
          <Tabs.Trigger
            className="text-lightSecondary data-[state=active]:text-white hover:text-opacity-80 data-[state=active]:shadow-[inset_0_-2px_0_0,0_2px_0_0] data-[state=active]:shadow-primary px-5 h-[45px] flex items-center justify-center text-[15px]  "
            value="especificaciones"
          >
            General
          </Tabs.Trigger>
          <Tabs.Trigger
            className="text-lightSecondary data-[state=active]:text-white hover:text-opacity-80 data-[state=active]:shadow-[inset_0_-2px_0_0,0_2px_0_0] data-[state=active]:shadow-primary px-5 h-[45px] flex items-center justify-center text-[15px] "
            value="software y controladores"
          >
            Software y controladores
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="grow  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="especificaciones"
        >
          <SectionTec />
        </Tabs.Content>
        <Tabs.Content
          className="grow   rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        ></Tabs.Content>
      </Tabs.Root>

      <Carousel />
      <Footer />
    </>
  );
};

export default Notebook;
