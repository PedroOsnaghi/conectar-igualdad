import { Card } from "../../../components/shared/Card";
import {
  AccordionCard,
  AccordionContent,
  AccordionHeader,
  AccordionWrapper,
} from "../../../components/shared/Accordion";

export default function SectionTec() {
  return (
    <section className="container mx-auto flex flex-col items-center mt-[70px]">
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
              <AccordionContent className="accordion-content-two-columns">
                {/*  <div className="accordion-grid-item">
            <img src={} alt="" />
          </div>
          <div className="accordion-grid-item">
            <img src={} alt="" />
          </div> */}
              </AccordionContent>
            </AccordionCard>
          </Card.Connector>

          <Card.Connector>
            <AccordionCard value="item-3" name="carda3">
              <AccordionHeader>
                <div>
                  <h3 className="title-medium">
                    Controladores y actualizaciones
                  </h3>
                  <p className="paragraph-small">
                    Encontrá las actualizaciones o drivers de tu dispositivo
                  </p>
                </div>
              </AccordionHeader>
              <AccordionContent className="accordion-content-five-columns">
                <div className="accordion-grid">
                  <div className="accordion-grid-item">
                    <p className="titleCardNotebook">Audio</p>
                    <p className="descriptionCardNotebook">
                      Realtek HD Audio Driver
                    </p>
                    <p className="descriptionCardNotebook">
                      S.O: Windows 11 64bit
                    </p>
                  </div>
                  <div className="accordion-grid-item">
                    <p className="titleCardNotebook">Versión</p>
                    <p className="descriptionCardNotebook">6.0.9373.1</p>
                  </div>
                  <div className="accordion-grid-item">
                    <p className="titleCardNotebook">Tamaño</p>
                    <p className="descriptionCardNotebook">38,08 MB </p>
                  </div>
                  <div className="accordion-grid-item">
                    <p className="titleCardNotebook">Fecha</p>
                    <p className="descriptionCardNotebook">Jul 25, 2023</p>
                  </div>
                  <div className="accordion-grid-item iconDownload">
                    {/* <img className="download" src={download} alt="" /> */}
                  </div>
                </div>
              </AccordionContent>
            </AccordionCard>
          </Card.Connector>
        </AccordionWrapper>
      </Card.Container>
    </section>
  );
}
