import { Card } from "../../../components/shared/Card";
import {
  dellThumb1,
  dellThumb2,
  dellThumb3,
  huaira,
  windows,
} from "../../../assets";
import {
  AccordionCard,
  AccordionContent,
  AccordionHeader,
  AccordionWrapper,
} from "../../../components/shared/Accordion";

export default function SectionTec() {
  return (
    <section className="container mx-auto flex flex-col items-center mt-[20px]">
      <h3 className="title-medium self-start">Netbook G10 - DELL LA3120</h3>
      <p className="paragraph-medium mt-2">
        La Dell Latitude 3120 supera cualquier reto, ya que fue diseñada
        pensando en la durabilidad y la movilidad. Al ser compacta y sólida,
        proporciona el equilibrio adecuado entre rendimiento y productividad
        para los estudiantes en movimiento, y ofrece todo lo que los estudiantes
        necesitan, ya sea en el aula, en el hogar o en cualquier lugar donde el
        aprendizaje los lleve.{" "}
      </p>
      <section className="w-full text-start mt-[20px]">
        <h4 className="title-medium">Imagenes del dispositivo</h4>
        <div className="flex ju gap-3 mt-[10px]">
          <div className="border-[1px] border-lightSecondary p-4 rounded-[5px] aspect-square grid place-content-center w-[15%] group hover:border-lightPrimary cursor-pointer transition-all duration-300 ease-in-out">
            <img
              src={dellThumb1}
              alt=""
              className="transition-all duration-500 ease-in-out group-hover:scale-[1.15]"
            />
          </div>
          <div className="border-[1px] border-lightSecondary p-4 rounded-[5px] aspect-square grid place-content-center w-[15%] group hover:border-lightPrimary cursor-pointer transition-all duration-300 ease-in-out">
            <img
              src={dellThumb2}
              alt=""
              className="transition-all duration-500 ease-in-out group-hover:scale-[1.15]"
            />
          </div>
          <div className="border-[1px] border-lightSecondary p-4 rounded-[5px] aspect-square grid place-content-center w-[15%] group hover:border-lightPrimary cursor-pointer transition-all duration-300 ease-in-out">
            <img
              src={dellThumb3}
              alt=""
              className="transition-all duration-500 ease-in-out group-hover:scale-[1.15]"
            />
          </div>
        </div>
      </section>
      <Card.Container className="mt-36 ">
        <AccordionWrapper
          className="flex flex-col gap-10"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Card.Connector>
            <AccordionCard value="item-1" name="carda1">
              <AccordionHeader>
                <div>
                  <h3 className="title-medium">Especificaciones Técnicas</h3>
                  <p className="paragraph-small">
                    Descubre todas las caracteristicas de este modelo.
                  </p>
                </div>
              </AccordionHeader>
              <AccordionContent>
                <article className="flex flex-col md:flex-row md:justify-between  gap-7 p-[20px]">
                  <div className="flex flex-col justify-between gap-7 ">
                    <div>
                      <h4 className="text-md font-semibold text-lightPrimary opacity-80">
                        Fabricante
                      </h4>
                      <p className="text-md text-lightSecondary opacity-70">
                        DELL Inc.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-lightPrimary opacity-80">
                        Modelo
                      </h4>
                      <p className="text-md text-lightSecondary opacity-70">
                        Dell Chromebook 3120
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col flex-wrap gap-6">
                    <div>
                      <h4 className="text-md font-semibold text-lightPrimary opacity-80">
                        Procesador y Memoria
                      </h4>
                      <p className="text-md text-lightSecondary opacity-70">
                        Intel Celeron N2840
                      </p>
                      <p className="text-md text-lightSecondary opacity-70">
                        4 GB de RAM DDR3L
                      </p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-lightPrimary opacity-80">
                        Pantalla
                      </h4>
                      <p className="text-md text-lightSecondary opacity-70">
                        Pantalla LCD de 11.6 pulgadas HD
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col flex-wrap gap-6">
                    <div>
                      <h4 className="text-md font-semibold text-lightPrimary opacity-80">
                        Almacenamiento
                      </h4>
                      <p className="text-md text-lightSecondary opacity-70">
                        16 GB eMMC
                      </p>
                    </div>

                    <div>
                      <h4 className="text-md font-semibold text-lightPrimary opacity-80">
                        Conectividad
                      </h4>
                      <p className="text-md text-lightSecondary opacity-70">
                        Wi-Fi 802.11ac, Bluetooth
                      </p>
                    </div>
                  </div>
                </article>
              </AccordionContent>
            </AccordionCard>
          </Card.Connector>

          <Card.Connector>
            <AccordionCard value="item-2" name="carda2">
              <AccordionHeader>
                <div>
                  <h3 className="title-medium">Sistemas Operativos</h3>
                  <p className="paragraph-small">
                    Conocé a fondo los Sistemas que administran tu dispositivo.
                  </p>
                </div>
              </AccordionHeader>
              <AccordionContent className="p-5">
                <article className="flex w-[70%] mx-auto justify-around">
                  <div className="text-center border-[0.5px] p-3 cursor-pointer border-lightSecondary border-opacity-60 rounded-[9px] hover:border-secondary transition-all duration-300 ease-in-out group">
                    <h3 className="title-medium">Microsoft Windows</h3>
                    <img
                      src={windows}
                      alt=""
                      className="group-hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="text-center border-[0.5px] p-3 cursor-pointer border-lightSecondary border-opacity-60 rounded-[9px] hover:border-secondary transition-all duration-300 ease-in-out group">
                    <h3 className="title-medium">GNU/Linux Huayra</h3>
                    <img
                      src={huaira}
                      alt=""
                      className="group-hover:scale-[1.05] transition-transform duration-300 ease-in-out w-[90%] mx-auto mt-4"
                    />
                  </div>
                </article>
              </AccordionContent>
            </AccordionCard>
          </Card.Connector>
        </AccordionWrapper>
      </Card.Container>
    </section>
  );
}
