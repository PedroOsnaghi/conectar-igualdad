import { logoME } from "../assets";

export default function LogoMinisterio({ className }) {
  return (
    <img
      src={logoME}
      alt="Logo del Ministerio de Educcion de la Nacional"
      className={className}
    />
  );
}
