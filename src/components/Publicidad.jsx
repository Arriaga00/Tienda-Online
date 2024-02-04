const Publicidad = () => {
  return (
    <>
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 mt-20 m-2">
        <img
          alt="Trainer"
          src="https://m.media-amazon.com/images/I/611x+nJPikL._AC_SL1500_.jpg"
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Escribe con estilo
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                OBTÉN UN 20% DE DESCUENTO
            </span>

            <span className="mt-2 block text-sm">
                En su PRÓXIMO pedido superior a $50
            </span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href=""
          >
            Obtener descuento
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Oferta valida hasta el 01 marzo, 2024 *
          </p>
        </div>
      </section>
    </>
  );
};

export default Publicidad;
