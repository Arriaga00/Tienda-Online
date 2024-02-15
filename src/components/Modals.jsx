/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import FormularioLoguin from "./FormularioLoguin";

const Modals = ({ abrirModal, setAbrirModal,setUsuario, usuario,setInformacionUsuario}) => {
  const [datosUsuarios,setDatosUsuarios] = useState({
    email : '',
    contraseña : ''
  })
  const [modalClass, setModalClass] = useState("scale-0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (abrirModal) {
      setIsVisible(true);
      setTimeout(() => setModalClass("scale-100"), 100);
    } else {
      setModalClass("scale-0");
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [abrirModal]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out">
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 ease-in-out"></div>
          <div
            className={`relative sm:bg-white flex flex-col items-center max-w-lg gap-1 p-4   rounded-md shadow-md transition-transform duration-500 ease-in-out transform ${modalClass}  sm:px-1 sm:py-4 bg-[#f5f5f5] sm:w-3/4 sm:max-w-md`}
          >
            <button
              className="absolute top-1 right-1 sm:top-2 sm:right-2"
              onClick={() => setAbrirModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6"
              >
                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
              </svg>
            </button>
            {/* Formulario */}
            <div className="w-full flex justify-center items-center ">
              <FormularioLoguin datosUsuarios={datosUsuarios} setDatosUsuarios={setDatosUsuarios} setUsuario={setUsuario}  usuario={usuario} setInformacionUsuario={setInformacionUsuario}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
