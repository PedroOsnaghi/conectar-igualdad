import { useState } from "react";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/navbar";
import FormContainer from "../Login/components/FormContainer";
import Input from "../Login/components/Input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const verifyErrors = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "El email es requerido";
  }
  if (!data.password) {
    errors.password = "La contraseña es requerida";
  } 

  return errors;
};

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = verifyErrors(formData);
    

    setErrors(newErrors);
    if (newErrors === undefined || !newErrors) navigate("/");

  };
  

  return (
    <>
      <Navbar className="relative" />
      <main className="h-full w-full">
        <div className="container mx-auto px-8 md:px-[100px] h-full w-full mb-[64px]">
          <FormContainer className="mt-12 z-30 ">
            <h1 className="text-white text-md md:text-xl font-bold mb-4 border-b-[1px] border-opacity-30">
              Iniciar sesión en Conectar Igualdad
            </h1>
            <div className="flex flex-col md:flex-row gap-3 ">
              <article className="flex md:flex-col md:w-[40%]  text-white bg-primary rounded-md overflow-hidden px-4 py-7"></article>
              <article className=" md:px-4 flex flex-col w-full h-[450px] md:h-[550px]">
                <form  method="post">
                  <fieldset data-name="1" className="flex flex-col">
                    <Input
                      className="my-3"
                      name="email"
                      label="Email"
                      placeholder="Ingrese su email"
                      type="email"
                      errors={errors}
                      onChange={handleChange}
                      
                    />
                  
                    <Input
                      className="my-3"
                      name="password"
                      label="Contraseña"
                      placeholder="Ingrese su contraseña"
                      type="password"
                      errors={errors}
                      onChange={handleChange}
                    />
                   
                  </fieldset>

                  
                  <div className="flex flex-col md:flex-row text-center md:text-left justify-between">
                  <a className="text-lightPrimary" href="">
                    ¿Olvidaste tu contraseña</a>
                    <span className="mt-4 md:mt-0 text-white">¿Aún no estás registrado? 
                    <Link className="text-primary ml-2 " to="/register">
                       Registrate
                    </Link>
                    </span>
                  </div>
                  <button
                    className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center mx-auto  gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max mt-8 md:mt-16 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer`}
                    onClick={handleSubmit}
                  >
                    Iniciar sesión
                  </button>
                </form>
              </article>
            </div>
          </FormContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
