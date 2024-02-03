const Inputs = ({nombre, type, id,w}) => {
    return (
      <label
        htmlFor={id}
        className={`relative block overflow-hidden rounded-md border ${w} border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}
      >
        <input
          type={type}
          id={id}
          placeholder="Email"
          className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm`}
          
        />
  
        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {nombre}
        </span>
      </label>
    );
  };
  
  const FormularioLoguin = () => {
    return (
      <>
        <form action="" className="flex w-full justify-center flex-col gap-2">
          <h2 className="font-bold">Ingreso</h2>
          <div className="flex justify-center">
            <Inputs nombre={"correo"} type={"email"} id={"email"} w={"w-96"} />
          </div>
          <div className="flex justify-center">
            <Inputs nombre={"contraseña"} type={"password"} id={"contraseña"} w={"w-96"} />
          </div>
        </form>
      </>
    );
  };

  export default FormularioLoguin;
  