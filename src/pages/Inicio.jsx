import Header from "../components/Header";
import { useState } from "react";
import Modals from "../components/Modals";
import Publicidad from "../components/Publicidad";


const Inicio = () => {
  const [abrirModal, setAbrirModal] = useState(false);
  return (
    <>
      <Header logueado={true} setAbrirModal={setAbrirModal} />
      <Modals setAbrirModal={setAbrirModal} abrirModal={abrirModal} />
      <div className=" flex justify-center items-center ">
        <main className="max-w-[1500px]">
          <Publicidad />
        </main>
      </div>
    </>
  );
};

export default Inicio;
