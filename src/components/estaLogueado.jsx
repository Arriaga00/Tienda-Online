import { NavLink } from "react-router-dom";
export const Logueado = () => {
  return (
    <>
      <div className="px-2 py-1 bg-green-200 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-green-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </>
  );
};

export const NoLogueado = ({setAbrirModal}) => {
  return (
    <>
      <div className="sm:flex sm:gap-4">
        <button
          className="rounded-md bg-[#f5c06a] px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => setAbrirModal(true)}
        >
          Ingresar
        </button>

        <div className="hidden sm:flex">
          <NavLink
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-yellow-500 hover:scale-105 transition duration-300 ease-in-out"
            to="/"
          >
            Registrate
          </NavLink>
        </div>
      </div>
    </>
  );
};
