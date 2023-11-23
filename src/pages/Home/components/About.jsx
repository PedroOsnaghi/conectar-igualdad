import { Card } from "../../../components/shared/Card";

import { cardHome1, cardHome2, cardHome3, cardImageExample } from "../../../assets";
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
              src={cardHome1}
              alt={"imagen de prueba"}
              className="md:max-w-[20%] w-full"
            />
            <Card.Content>
              <h3 className="text-lg md:text-[20px] text-lightSecondary font-semibold">
                ¿Quiénes pueden acceder al programa ?
              </h3>
              <p className="text-[16px] text-lightPrimary opacity-30 mt-4">
                Podrías ser uno de los beneficiarios del programa Conectar Igualdad.
                Descubre más sobre como este programa puede abrirte las puertas a un
                mundo de oportunidades tecnológicas.
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
              src={cardHome2}
              alt={"imagen de prueba"}
              className="md:max-w-[20%] w-full"
            />
            <Card.Content>
              <h3 className="text-lg md:text-[20px] text-lightSecondary font-semibold">
                ¿Cómo registrarse?
              </h3>
              <p className="text-[16px] text-lightPrimary opacity-30 mt-4">
                Te contamos que el proceso es más sencillo de lo que te imaginás. Si estás 
                cursando el colegio secundario de una escuela pública, estás a un paso de 
                acceder a esta herramienta. Descubre cómo puedes ser parte de este programa
                sin necesidad de hacer trámites complicados.
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
              src={cardHome3}
              alt={"imagen de prueba"}
              className="md:max-w-[20%] w-full"
            />
            <Card.Content>
              <h3 className="text-lg md:text-[20px] text-lightSecondary font-semibold">
                Más información
              </h3>
              <p className="text-[16px] text-lightPrimary opacity-30 mt-4">
                Profundiza en los detalles de esta política de inclusión digital que
                está cambiando la forma en que los jóvenes acceden a las nuevas tecnologías.
                Descubre cómo el programa distribuye material educativo y tecnológico, y las 
                acciones de conectividad que está desplegando en todo el país.
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
