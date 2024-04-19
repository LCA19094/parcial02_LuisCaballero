import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Cabecera } from "../../componentes/contenedor/Cabecera";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/" element={<Cabecera />} />
    </Routes>
  );
};