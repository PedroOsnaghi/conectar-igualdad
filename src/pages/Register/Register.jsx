import { useState } from "react";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/navbar";
import FormContainer from "./components/FormContainer";
import Input from "./components/Input";
import Select from "./components/Select";
import Step from "./components/Step";
import { celebration } from "../../assets";

const provincias_argentinas = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
  "Tucumán",
];

const partidos = {
  "Buenos Aires": [
    "La Plata",
    "Mar del Plata",
    "Quilmes",
    "Bahía Blanca",
    "Tandil",
    "CABA",
    "La Matanza",
    "Avellaneda",
    "Lomas de Zamora",
    "San Isidro",
  ],
  Catamarca: [
    "San Fernando del Valle de Catamarca",
    "La Merced",
    "Santa María",
    "Ancasti",
    "Fray Mamerto Esquiú",
    "Valle Viejo",
    "Belén",
    "Tinogasta",
    "Santa Rosa",
    "Andalgalá",
  ],
};

const localidades = {
  CABA: [
    "Retiro",
    "Balvanera",
    "San Cristóbal",
    "La Boca",
    "Palermo",
    "Recoleta",
    "San Telmo",
    "Belgrano",
    "Flores",
    "Caballito",
  ],
  "La Matanza": [
    "San Justo",
    "La Tablada",
    "Lomas del Mirador",
    "Ramos Mejía",
    "Ciudad Evita",
    "Isidro Casanova",
    "Gregorio de Laferrere",
    "Virrey del Pino",
    "González Catán",
    "Tapiales",
  ],
};

const generaciones_netbooks = [
  "Generación 1 - AH101",
  "Generación 2 - LS101.V2",
  "Generación 3",
  "Generación 4",
  "Generación 5",
  "Generación 6",
  "Generación 7",
  "Generación 8",
  "Generación 9",
  "Generacion 10 - 2023",
];

export default function Register() {
  const [partido, setPartido] = useState([]);
  const [localidad, setLocalidad] = useState([]);
  const [steep, setSteep] = useState(1);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({});

  const provinciaChangeHandler = (e) => {
    const provincia = e.target.value;
    const p = partidos[provincia];
    setPartido(p);
    handleChange(e);
  };

  const localidadChangeHandler = (e) => {
    const localidad = e.target.value;
    const l = localidades[localidad];
    setLocalidad(l);
    handleChange(e);
  };

  const nextStep = (e) => {
    e.preventDefault();
    const err = verifyErrors(formData);
    setError({ ...err });

    if (!err[steep] || err[steep] === undefined) setSteep((s) => s + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setSteep((s) => s - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const verifyErrors = (data) => {
    console.log(data);
    const errors = {};
    if (steep === 1) {
      if (!data.nombre) {
        console.log("entro");
        errors[steep] = { ...errors[steep], nombre: "El nombre es requerido" };
      }
      if (!data.tipo) {
        console.log("entro error select");
        errors[steep] = { ...errors[steep], tipo: "El tipo es requerido" };
      }
      if (!data.dni) {
        errors[steep] = { ...errors[steep], dni: "El dni es requerido" };
      }

      if (!data.edad) {
        errors[steep] = { ...errors[steep], edad: "La edad es requerida" };
      }
      if (!data.provincia) {
        errors[steep] = {
          ...errors[steep],
          provincia: "La provincia es requerida",
        };
      }
      if (!data.partido) {
        errors[steep] = {
          ...errors[steep],
          partido: "El partido es requerido",
        };
      }
      if (!data.localidad) {
        errors[steep] = {
          ...errors[steep],
          localidad: "La localidad es requerida",
        };
      }
      if (!data.calle) {
        errors[steep] = { ...errors[steep], calle: "La calle es requerida" };
      }
      if (!data.numero) {
        errors[steep] = { ...errors[steep], numero: "El numero es requerido" };
      }
    }

    if (steep === 2) {
      if (!data.school) {
        errors[steep] = {
          ...errors[steep],
          school: "El nombre de la escuela es requerido",
        };
      }
      if (!data.eprovincia) {
        errors[steep] = {
          ...errors[steep],
          eprovincia: "La provincia es requerida",
        };
      }
      if (!data.epartido) {
        errors[steep] = {
          ...errors[steep],
          epartido: "El partido es requerido",
        };
      }
      if (!data.elocalidad) {
        errors[steep] = {
          ...errors[steep],
          elocalidad: "La localidad es requerida",
        };
      }
      if (!data.ecalle) {
        errors[steep] = { ...errors[steep], ecalle: "La calle es requerida" };
      }
      if (!data.enumero) {
        errors[steep] = { ...errors[steep], enumero: "El numero es requerido" };
      }
    }

    if (steep === 3) {
      if (!data.modelo) {
        errors[steep] = {
          ...errors[steep],
          modelo: "El modelo de la netbook es requerido",
        };
      }
      if (!data.serie) {
        errors[steep] = {
          ...errors[steep],
          serie: "El numero de serie es requerido",
        };
      }
    }
    return errors;
  };

  return (
    <div className="">
      <Navbar />
      <main className="h-full w-full">
        <div className="container mx-auto px-[100px] h-full w-full">
          <FormContainer className="mt-12 z-30 ">
            <h1 className="text-white text-xl font-bold mb-4 border-b-[1px] border-opacity-30">
              Registrate en Conectar Igualdad
            </h1>
            <div className="flex gap-3 ">
              <article className="flex flex-col w-[40%]  text-white bg-primary rounded-md overflow-hidden px-4 py-7">
                <Step
                  number="1"
                  title="Informacion personal"
                  description="Completa tus datos personales"
                  isActive={steep}
                />
                <Step
                  number="2"
                  title="Informacion Educativa"
                  description="Completa los datos de tu escuela"
                  isActive={steep}
                  isConnected
                />
                <Step
                  number="3"
                  title="Registrar Netbook"
                  description="Registra tu dispositivo"
                  isActive={steep}
                  isConnected
                />
                <Step
                  number="4"
                  title="Finalizar registro"
                  isActive={steep}
                  description="Registro finalizado"
                  isConnected
                />
              </article>
              <article className=" px-4 flex flex-col w-full h-[792px]">
                <form className="h-full" action="">
                  <fieldset
                    data-name="1"
                    style={{ display: steep === 1 ? "flex" : "none" }}
                    className="flex flex-col h-full justify-between"
                  >
                    <h3 className="title-medium border-b-[0.5px] border-opacity-25">
                      Datos personales
                    </h3>
                    <Input
                      className="my-3"
                      name="nombre"
                      label="Nombre completo"
                      placeholder="Nombre y Apellido"
                      type="text"
                      errors={error[1]}
                      onChange={handleChange}
                    />
                    <div className="flex items-center justify-between gap-3">
                      <Select
                        name="tipo"
                        label="Tipo"
                        placeholder="Tipo"
                        options={["DNI", "LC", "LE", "PTE"]}
                        errors={error[1]}
                        onChange={handleChange}
                      />
                      <Input
                        className="flex-1 max-w-auto mr-5"
                        name="dni"
                        label="Numero (sin puntos, espacios o guiones)"
                        placeholder="Numero de documento"
                        type="number"
                        errors={error[1]}
                        onChange={handleChange}
                      />
                      <Input
                        className="max-w-[20%]"
                        name="edad"
                        label="Edad"
                        placeholder="Edad"
                        type="number"
                        errors={error[1]}
                        onChange={handleChange}
                      />
                    </div>
                    <h3 className="title-medium border-b-[1px] mt-10">
                      Domicilio
                    </h3>
                    <div className="flex flex-col mt-3  gap-3">
                      <Select
                        className="flex-1"
                        name="provincia"
                        label="Provincia"
                        options={provincias_argentinas}
                        onChange={provinciaChangeHandler}
                        placeholder="Seleccione una provincia"
                        errors={error[1]}
                      />
                      <div className="flex items-center justify-between gap-3">
                        <Select
                          className="flex-1"
                          name="partido"
                          label="Partido"
                          options={partido}
                          placeholder="Seleccione un partido"
                          onChange={localidadChangeHandler}
                          disabled={partido && !partido.length}
                          errors={error[1]}
                        />
                        <Select
                          className="flex-1"
                          name="localidad"
                          label="Localidad"
                          placeholder="Seleccione una localidad"
                          options={localidad}
                          disabled={localidad && !localidad.length}
                          errors={error[1]}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Input
                          className="flex-1"
                          name="calle"
                          placeholder="Calle"
                          label="Direccion"
                          type="text"
                          errors={error[1]}
                          onChange={handleChange}
                        />
                        <Input
                          name="numero"
                          placeholder="Numero"
                          label="Numero"
                          type="number"
                          errors={error[1]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full">
                      <button
                        onClick={nextStep}
                        className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max  mt-16 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer`}
                      >
                        Siguiente
                      </button>
                    </div>
                  </fieldset>
                  <fieldset
                    data-name="2"
                    style={{
                      display: steep === 2 ? "flex" : "none",
                      height: "100%",
                    }}
                    className="flex flex-col h-full justify-between"
                  >
                    <h3 className="title-medium border-b-[0.5px] border-opacity-25">
                      Datos Escolares
                    </h3>
                    <Input
                      className="my-3"
                      name="school"
                      label="Nombre de la Institucion escolar"
                      placeholder="Nombre de tu escuela"
                      type="text"
                      errors={error[2]}
                      onChange={handleChange}
                    />

                    <h3 className="title-medium border-b-[1px] mt-10">
                      Domicilio de la Institucion
                    </h3>
                    <div className="flex flex-col mt-3  gap-3">
                      <Select
                        className="flex-1"
                        name="eprovincia"
                        label="Provincia"
                        options={provincias_argentinas}
                        onChange={provinciaChangeHandler}
                        placeholder="Seleccione una provincia"
                        errors={error[2]}
                      />
                      <div className="flex items-center justify-between gap-3">
                        <Select
                          className="flex-1"
                          name="epartido"
                          label="Partido"
                          options={partido}
                          placeholder="Seleccione un partido"
                          onChange={localidadChangeHandler}
                          disabled={partido && !partido.length}
                          errors={error[2]}
                        />
                        <Select
                          className="flex-1"
                          name="elocalidad"
                          label="Localidad"
                          placeholder="Seleccione una localidad"
                          options={localidad}
                          disabled={localidad && !localidad.length}
                          onChange={handleChange}
                          errors={error[2]}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Input
                          className="flex-1"
                          name="ecalle"
                          placeholder="Calle"
                          label="Direccion"
                          type="text"
                          errors={error[2]}
                          onChange={handleChange}
                        />
                        <Input
                          name="enumero"
                          placeholder="Numero"
                          label="Numero"
                          type="number"
                          errors={error[2]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between w-full mt-auto">
                      <button
                        onClick={prevStep}
                        className="flex items-center gap-4 text-lg text-lightPrimary bg-darkPrimary bg-opacity-75 max-w-max mt-16 py-1 px-8 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100"
                      >
                        Atras
                      </button>
                      <button
                        onClick={nextStep}
                        className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max  mt-16 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer`}
                      >
                        Siguiente
                      </button>
                    </div>
                  </fieldset>
                  <fieldset
                    data-name="3"
                    style={{
                      display: steep === 3 ? "flex" : "none",
                    }}
                    className="flex flex-col h-full "
                  >
                    <h3 className="title-medium border-b-[0.5px] border-opacity-25">
                      Datos de tu Netbook
                    </h3>

                    <div className="flex mt-3 flex-1   gap-3">
                      <Select
                        className="flex-1"
                        name="modelo"
                        label="Modelo"
                        options={generaciones_netbooks}
                        placeholder="Selecciona tu Modelo"
                        errors={error[3]}
                        onChange={handleChange}
                      />
                      <Input
                        name="serie"
                        placeholder="Numero de serie"
                        label="Numero de serie"
                        type="number"
                        errors={error[3]}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-between w-full">
                      <button
                        onClick={prevStep}
                        className="flex items-center gap-4 text-lg text-lightPrimary bg-darkPrimary bg-opacity-75 max-w-max mt-16 py-1 px-8 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100"
                      >
                        Atras
                      </button>
                      <button
                        onClick={nextStep}
                        className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max  mt-16 py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer`}
                      >
                        Registrarme
                      </button>
                    </div>
                  </fieldset>
                  <fieldset
                    data-name="4"
                    style={{
                      display: steep === 4 ? "flex" : "none",
                    }}
                    className="flex flex-col h-full "
                  >
                    <div>
                      <h3 className="text-lightPrimary text-2xl text-center mt-16">
                        Gracias por Registrarte
                      </h3>
                      <img
                        src={celebration}
                        alt=""
                        className="mx-auto h-[60%] aspect-square"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-3 w-full">
                      <button
                        onClick={nextStep}
                        className={`transition-opacity duration-[2000ms] ease-in-out delay-[1.5s]  flex items-center gap-4 text-lg text-lightPrimary bg-secondary bg-opacity-75 max-w-max  py-1 px-8 border-[.5px] border-primary rounded-[5px] hover:bg-opacity-100 cursor-pointer`}
                      >
                        Iniciar sesion
                      </button>
                      <button
                        onClick={prevStep}
                        className="flex items-center gap-4 text-lg text-lightPrimary bg-darkPrimary bg-opacity-75 max-w-max  py-1 px-8 border-[.5px] border-lightSecondary rounded-[5px] hover:bg-secondary/40 hover:border-primary pointer-events-auto cursor-pointer z-[100] transition-colors duration-100"
                      >
                        Volver a Home
                      </button>
                    </div>
                  </fieldset>
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
