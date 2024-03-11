/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardContenido = ({ descripcion, precio, img, titulo }) => {
  return (
    <>
      <article
        className="group w-80 border pb-5 hover:scale-105 ease-in-out transition-all"
      >
        <Link to={`/${titulo.replace(/\s/g, "-")}`}>
          <img
            alt="producto"
            src={img}
            className="h-56 w-full rounded-xl object-contain object-center shadow-xl transition "
          />

          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 text-start">
              {descripcion}
            </h3>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-green-500 font-bold">
              {precio + "$"}
            </p>
          </div>
        </Link>

        <button className="rounded-full bg-yellow-500 font-semibold px-8 py-3 ">
          Añadir al carrito
        </button>
      </article>
    </>
  );
};

export default CardContenido;
