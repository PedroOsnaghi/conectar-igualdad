import { Card } from "../../../components/shared/Card";

import { cardImageExample } from "../../../assets";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function About() {
  return (
    <section className="container mx-auto flex flex-col items-center mt-4 md:mt-[70px]">
      <h2 className="title text-center">¿Que es conectar igualdad?</h2>
      <p className="paragraph-medium md:max-w-[50%] max-w-[80%] mt-9 text-center ">
        Es un programa lanzado por la Presidencia de la Nación, a través del
        Ministerio de Educación, que busca reducir la brecha digital en el
        ámbito educativo mediante la distribución de computadoras portátiles a
        estudiantes y docentes de instituciones educativas públicas.
      </p>

      <Card.Container className="mt-36 flex flex-col gap-10">
        <Card.Connector className="hidden">
          <Card.Root
            key="c1"
            name="card1"
            className="flex flex-col md:flex-row"
          >
            <Card.Image
              src={cardImageExample}
              alt={"imagen de prueba"}
              className="md:max-w-[20%] w-full"
            />
            <Card.Content>
              <h3 className="text-lg md:text-[20px] text-lightSecondary font-semibold">
                Quienes pueden acceder al programa ?
              </h3>
              <p className="text-[16px] text-lightPrimary opacity-30 mt-4">
                Make your design token distribution even more flexible and
                customizable using only one configuration. The package can be
                reused by multiple teams and projects.
              </p>
              <a
                className="flex items-center gap-4 text-lg text-lightPrimary bg-darkPrimary bg-opacity-75 max-w-max mt-6 py-1 px-8 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100"
                href="#"
              >
                Leer más
                <FaArrowUpRightFromSquare className="text-md" />
              </a>
            </Card.Content>
          </Card.Root>
        </Card.Connector>
        <Card.Connector>
          <Card.Root
            key="c2"
            name="card2"
            className="flex flex-col md:flex-row"
          >
            <Card.Image
              src={cardImageExample}
              alt={"imagen de prueba"}
              className="md:max-w-[20%] w-full"
            />
            <Card.Content>
              <h3 className="text-lg md:text-[20px] text-lightSecondary font-semibold">
                Quienes pueden acceder al programa ?
              </h3>
              <p className="text-[16px] text-lightPrimary opacity-30 mt-4">
                Make your design token distribution even more flexible and
                customizable using only one configuration. The package can be
                reused by multiple teams and projects.
              </p>
              <a
                className="flex items-center gap-4 text-lg text-lightPrimary bg-darkPrimary bg-opacity-75 max-w-max mt-6 py-1 px-8 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100"
                href="#"
              >
                Leer más
                <FaArrowUpRightFromSquare className="text-md" />
              </a>
            </Card.Content>
          </Card.Root>
        </Card.Connector>

        <Card.Connector>
          <Card.Root
            key="c3"
            name="card3"
            className="flex flex-col md:flex-row"
          >
            <Card.Image
              src={cardImageExample}
              alt={"imagen de prueba"}
              className="md:max-w-[20%] w-full"
            />
            <Card.Content>
              <h3 className="text-lg md:text-[20px] text-lightSecondary font-semibold">
                Quienes pueden acceder al programa ?
              </h3>
              <p className="text-[16px] text-lightPrimary opacity-30 mt-4">
                Make your design token distribution even more flexible and
                customizable using only one configuration. The package can be
                reused by multiple teams and projects.
              </p>
              <a
                className="flex items-center gap-4 text-lg text-lightPrimary bg-darkPrimary bg-opacity-75 max-w-max mt-6 py-1 px-8 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100"
                href="#"
              >
                Leer más
                <FaArrowUpRightFromSquare className="text-md" />
              </a>
            </Card.Content>
          </Card.Root>
        </Card.Connector>
      </Card.Container>
    </section>
  );
}
