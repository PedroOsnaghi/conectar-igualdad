export default function Navbar() {
  return (
    <nav className="bg-secondary/80 py-3 text-lightPrimary sticky top-0 backdrop-blur-lg z-[1000] ">
      <div className="container mx-auto flex items-center justify-between w-full">
        <div>
          <h1 className="text-xl text-lightPrimary">Conectar Igualdad</h1>
        </div>
        <div className="">
          <ul className="flex gap-9 text-lightPrimary   cursor-pointer">
            <li className="hover:opacity-100  transition-all duration-100 opacity-75">
              Inicio
            </li>
            <li className="hover:opacity-100  transition-all duration-100 opacity-75">
              Notebook
            </li>
            <li className="hover:opacity-100  transition-all duration-100 opacity-75">
              Soporte Tecnico
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-primary py-1 px-3 rounded-[5px] hover:bg-opacity-75 cursor-pointer ">
            Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
}
