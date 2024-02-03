import Header from "../components/Header";
import { useState } from "react";
import Modals from "../components/Modals";

const Inicio = () => {
    const [abrirModal, setAbrirModal] = useState(false);
  return (
    <>
      <Header logueado={true} setAbrirModal={setAbrirModal} />
      <Modals setAbrirModal={setAbrirModal} abrirModal={abrirModal}/>
    </>
  );
};

export default Inicio;
