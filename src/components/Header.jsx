/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../assets/Custom.png";
import { Logueado, NoLogueado } from "./estaLogueado";
import InputBusqueda from "./InputBusqueda";

 const Header = ({ logueado, setAbrirModal, informacionUsuario, setFiltrado }) => {
  const obtenerColores = () => {
    const btnActivo = "text-blue-500 lg:flex hidden ";
    const btnNoActivo = "text-gray-500/75 transition hover:text-blue-500 lg:flex hidden ";
    const btnIniCat = "text-yellow-500 lg:flex hidden ";
    const btnNoIniCat = "text-gray-500 transition hover:text-gray-500 lg:flex hidden ";
    return { btnActivo, btnNoActivo, btnIniCat, btnNoIniCat };
  };
  const colores = obtenerColores();

  return (
    <>
      <header
        className="shadow-lg shadow-slate-300/40 glass"
        style={{ position: "fixed", width: "100%", top: "0", zIndex: "20" }}
      >
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <NavLink className="block" to="/">
                <img src={Logo} alt="" width={"300px"} />
              </NavLink>
            </div>

            <div>
              <InputBusqueda setFiltrado={setFiltrado}/>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? colores.btnIniCat : colores.btnNoIniCat
                      }
                      to="/"
                    >
                      Inicio
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? colores.btnIniCat : colores.btnNoIniCat
                      }
                      to="/categorias"
                    >
                      Categorias
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? colores.btnActivo : colores.btnNoActivo
                      }
                      to="/tu-carrito"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {logueado ? (
                  <Logueado informacionUsuario={informacionUsuario}/>
                ) : (
                  <NoLogueado setAbrirModal={setAbrirModal} />
                )}
                <div className="block lg:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
