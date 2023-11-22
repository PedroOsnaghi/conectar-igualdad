import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/navbar";
import FormContainer from "../Login/components/FormContainer";
import Input from "../Login/components/Input";

export default function Login() {
  return (
    <div className="">
      <Navbar className="relative" />
      <main className="h-full w-full">
        <div className="container mx-auto px-[100px] h-full w-full mb-[64px]">
          <FormContainer className="mt-12 z-30 ">
            <h1 className="text-white text-xl font-bold mb-4 border-b-[1px] border-opacity-30">
              Iniciar sesión en Conectar Igualdad
            </h1>
            <div className="flex gap-3 ">
              <article className="flex flex-col w-[40%]  text-white bg-primary rounded-md overflow-hidden px-4 py-7"></article>
              <article className=" px-4 flex flex-col w-full h-[550px]">
                <form action="">
                  <fieldset
                    data-name="1"
                    className="flex flex-col h-full justify-between"
                  >
                    <Input
                      className="my-3"
                      name="email"
                      label="Email"
                      placeholder="Ingrese su email"
                      type="email"
                    />
                  <Input  className="my-3"
                      name="password"
                      label="Contraseña"
                      placeholder="Ingrese su contraseña"
                      type="password"/>  
                  </fieldset>
                <a className="text-lightPrimary" href="">¿Olvidaste tu contraseña?</a>
                <button className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max  mt-16 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer`}
                >
                        Iniciar sesión
                      </button>
                </form>
              </article>
            </div>
          </FormContainer>
        </div>

        <Footer />
      </main>
    </div>
  );
}
