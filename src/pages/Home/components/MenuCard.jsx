import { course, dellThumb2, setting } from "../../../assets";
import { Card } from "../../../components/shared/Card";

export default function MenuCard({ className }) {
  return (
    <div
      className={`mx-8 md:mx-0 md:max-w-[50%]  md:translate-x-[50%] md:translate-y-[2%] ${className}`}
    >
      <Card.Container
        isConnected={false}
        className="flex flex-col md:flex-row gap-3 border-none py-0 mb-0"
      >
        <Card.Root
          key="mc1"
          name="mcard1"
          isConnected={false}
          className="group md:animacion-card-1 flex flex-col opacity-100  md:opacity-0 cursor-pointer "
        >
          <div className="relative z-[5] grid place-content-center">
            <Card.Image
              src={dellThumb2}
              alt="Foto de Netbook Conectar Igualdad vista superior"
              className="md:w-[80%]  mx-auto  group-hover:scale-125 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute bgcard-gradient top-0 left-0 w-full h-full z-[-1]"></span>
          </div>

          <Card.Content className="py-3 px-3 " pointer>
            <h3 className="text-[16px] text-lightSecondary font-semibold">
              Conocé más sobre tu Netbook
            </h3>
            <p className="text-[12px] text-lightPrimary opacity-30 mt-4">
              Adéntrate y descubre las especificaciones técnicas, su sistema
              operativo y todo lo que tu equipo puede ofrecer.
            </p>
          </Card.Content>
        </Card.Root>
        <Card.Root
          key="mc2"
          name="mcard2"
          isConnected={false}
          className="group md:animacion-card-2 flex flex-col opacity-100  md:opacity-0   cursor-pointer"
        >
          <div className="relative z-[5] grid place-content-center cursor-pointer">
            <Card.Image
              src={course}
              alt="Foto de Netbook Conectar Igualdad vista superior"
              className="w-[70%] my-[50px]  mx-auto  group-hover:scale-125 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute bgcard-gradient top-0 left-0 w-full h-full z-[-1] "></span>
          </div>

          <Card.Content className="py-3 px-3" pointer>
            <h3 className="text-[16px] text-lightSecondary font-semibold">
              Cursos y tutoriales
            </h3>
            <p className="text-[12px] text-lightPrimary opacity-30 mt-4">
              Aprovecha al máximo tu netbook, adquiere nuevas habilidades y
              expande tus conocimientos.
            </p>
          </Card.Content>
        </Card.Root>
        <Card.Root
          key="mc3"
          name="mcard3"
          isConnected={false}
          className="group md:animacion-card-3 flex flex-col opacity-100  md:opacity-0 cursor-pointer"
        >
          <div className="relative z-[5] grid place-content-center">
            <Card.Image
              src={setting}
              alt="Foto de Netbook Conectar Igualdad vista superior"
              className="w-[90%] my-[27px]  mx-auto  group-hover:scale-125 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute bgcard-gradient top-0 left-0 w-full h-full z-[-1]"></span>
          </div>

          <Card.Content className="py-3 px-3" pointer>
            <h3 className="text-[16px] text-lightSecondary font-semibold">
              Asistencia técnica
            </h3>
            <p className="text-[12px] text-lightPrimary opacity-30 mt-4">
              Nuestro equipo de asistencia técnica está listo para ayudarte y
              poder seguir utilizando tu netbook como el primer día.
            </p>
          </Card.Content>
        </Card.Root>
      </Card.Container>
    </div>
  );
}
