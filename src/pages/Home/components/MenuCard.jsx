import { topThumb } from "../../../assets";
import { Card } from "../../../components/shared/Card";

export default function MenuCard({ className }) {
  return (
    <div
      className={`max-w-[50%] translate-x-[50%] translate-y-[10%] ${className}`}
    >
      <Card.Container
        isConnected={false}
        className="flex gap-3 border-none py-0 mb-0"
      >
        <Card.Root
          key="mc1"
          name="mcard1"
          isConnected={false}
          className="animacion-card-1 flex flex-col  opacity-0"
        >
          <div className="relative z-[5]">
            <Card.Image
              src={topThumb}
              alt="Foto de Netbook Conectar Igualdad vista superior"
              className="max-w-[70%] h-[50%] my-8 mx-auto"
            />
            <span className="absolute bg-primary top-0 left-0 w-full h-full z-[-1]"></span>
          </div>

          <Card.Content className="py-3 px-3 " pointer>
            <h3 className="text-[16px] text-lightSecondary font-semibold">
              Conocé más sobre tu Netbook
            </h3>
            <p className="text-[12px] text-lightPrimary opacity-30 mt-4">
              Make your design token distribution even more flexible and
              customizable using only one configuration.
            </p>
          </Card.Content>
        </Card.Root>
        <Card.Root
          key="mc2"
          name="mcard2"
          isConnected={false}
          className="animacion-card-2 flex flex-col  opacity-0"
        >
          <div className="relative z-[5]">
            <Card.Image
              src={topThumb}
              alt="Foto de Netbook Conectar Igualdad vista superior"
              className="max-w-[70%] h-[50%] my-8 mx-auto"
            />
            <span className="absolute bg-primary top-0 left-0 w-full h-full z-[-1]"></span>
          </div>

          <Card.Content className="py-3 px-3" pointer>
            <h3 className="text-[16px] text-lightSecondary font-semibold">
              Cursos y tutoriales
            </h3>
            <p className="text-[12px] text-lightPrimary opacity-30 mt-4">
              Make your design token distribution even more flexible and
              customizable using only one configuration.
            </p>
          </Card.Content>
        </Card.Root>
        <Card.Root
          key="mc3"
          name="mcard3"
          isConnected={false}
          className="animacion-card-3 flex flex-col  opacity-0"
        >
          <div className="relative z-[5]">
            <Card.Image
              src={topThumb}
              alt="Foto de Netbook Conectar Igualdad vista superior"
              className="max-w-[70%] h-[50%] my-8 mx-auto"
            />
            <span className="absolute bg-primary top-0 left-0 w-full h-full z-[-1]"></span>
          </div>

          <Card.Content className="py-3 px-3" pointer>
            <h3 className="text-[16px] text-lightSecondary font-semibold">
              Asistencia técnica
            </h3>
            <p className="text-[12px] text-lightPrimary opacity-30 mt-4">
              Make your design token distribution even more flexible and
              customizable using only one configuration.
            </p>
          </Card.Content>
        </Card.Root>
      </Card.Container>
    </div>
  );
}
