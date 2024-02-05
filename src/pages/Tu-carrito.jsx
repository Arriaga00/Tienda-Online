const TuCarrito = ({logueado}) => {

  return (
    <>
      <section className="mt-20 w-full flex justify-center items-center ">
        <div className="w-full h-96 rounded-lg bg-slate-100 max-w-[1500px] flex justify-center items-center p-5">
          <img
            className="w-80"
            src="https://i.ibb.co/nkh2VK4/icono-carrito-compras-estilo-comic-ilustracion-vector-dibujos-animados-carro-sobre-fondo-blanco-aisl.png"
            alt="carrito"
          />
          <div>
            <h2 className="text-lg font-bold ">
              Tu Carrito de Amazon está vacío</h2>
              <p className="font-bold text-slate-400">{logueado ? undefined: 'Inicia sesion'}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TuCarrito;
