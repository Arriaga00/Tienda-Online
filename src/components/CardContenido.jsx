/* eslint-disable react/prop-types */

const CardContenido = ({descripcion,precio,img}) => {
  return (
    <>
    <article className="group w-80 border pb-5">
        <img
            alt=""
            src={img}
            className="h-56 w-full rounded-xl object-contain object-center shadow-xl transition "
        />

        <div className="p-4">
            <a href="#">
            <h3 className="text-lg font-medium text-gray-900 text-start">{descripcion}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-green-500 font-bold">
            {precio+"$"}
            </p>
        </div>
        <button className="rounded-full bg-yellow-500 font-semibold px-8 py-3 ">Añadir al carrito</button>
    </article>
    </>
  )
}

export default CardContenido