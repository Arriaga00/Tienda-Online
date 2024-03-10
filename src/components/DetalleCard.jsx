import { NavLink, useParams } from "react-router-dom";
import Contenido from "../data/articulos.json";

const DetalleCard = () => {
  let { name } = useParams();
  name = name.replace(/-/g, " ");

  const product = Contenido.find((item) => item.titulo === name);


  return product ? (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 mt-5">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src={product.img}
                  className="absolute inset-0 h-full w-full object-center border"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {product.titulo}
                </h2>

                <p className="mt-4 text-gray-600 text-start">
                {product.detalle}
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-yellow-600 bg-yellow-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-600 focus:outline-none focus:ring active:text-yellow-500"
                >
                  Añadir al carrito
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  ) : (
    <section className="mt-20 flex gap-3 justify-center">
        <p>Producto no encontrado ❌❌</p>
    <NavLink className="underline font-bold text-blue-500" to={'/'}>Voler al inicio</NavLink>
    </section>
  );
};

export default DetalleCard;
