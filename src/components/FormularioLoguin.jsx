/* eslint-disable react/prop-types */
import { Facebook, Google } from "./Svgs";
import usuarios from '../data/usuarios.json'

export const Inputs = ({nombre, type, id, w, onChange}) => {
    return (
      <label
        htmlFor={id}
        className={`relative block overflow-hidden rounded-md border ${w} border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 `}
      >
        <input
          type={type}
          id={id}
          placeholder={nombre}
          className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm  `}
          onChange={onChange}
          required
        />
  
        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {nombre}
        </span>
      </label>
    );
  };



  
  const FormularioLoguin = ({datosUsuarios,setDatosUsuarios, setUsuario,usuario,setInformacionUsuario,setAbrirModal}) => {

    const valorInput = (e)=>{
      setDatosUsuarios({
        ...datosUsuarios,
        [e.target.id] : e.target.value
      })
      console.log(datosUsuarios)
    } 

    const Validacion = () => {
      const usuarioEncontrado = usuarios.find(
        usuario => usuario.email === datosUsuarios.email && usuario.contraseña === datosUsuarios.contraseña
      );
        
      if (usuarioEncontrado) {
        setAbrirModal(false)
        setUsuario(true);
        setInformacionUsuario(datosUsuarios)
      }
      console.log(usuario);
    }

    return (
      <>
        <form
          action=""
          className="flex w-full justify-center items-center flex-col gap-2 pb-6"
        >
          <h2 className=" text-2xl w-40 ">Inicia Sesión</h2>
          <div className="flex justify-center">
            <Inputs nombre={"usuario"} type={"email"} id={"email"} w={"w-96"} onChange={valorInput} />
          </div>
          <div className="flex justify-center">
            <Inputs nombre={"contraseña"} type={"password"} id={"contraseña"} w={"w-96"} onChange={valorInput} />
          </div>
          <div className="w-full">
            <button className="w-96 border rounded-md py-2  bg-yellow-500 text-white font-semibold hover:opacity-90" onClick={(e)=>{e.preventDefault(),Validacion()}}>
              Ingresar
            </button>
          </div>
          <div className="w-96">
            <span className="flex items-center ">
              <span className="h-px flex-1 bg-slate-300"></span>
              <span className="shrink-0 text-slate-400 px-6">
                Iniciar sesión con
              </span>
              <span className="h-px flex-1 bg-slate-300"></span>
            </span>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-2">
            <button className="w-96 border rounded-md py-2 flex gap-2 hover:opacity-80">
              <Google />
              <p className="pl-10">Iniciar sesión con google</p>
            </button>
            <button className="w-96 border rounded-md py-2 flex gap-2 hover:opacity-80">
              <Facebook/>
              <p className="pl-10">Iniciar sesión con facebook</p>
            </button>
          </div>
        </form>
      </>
    );
  };

  export default FormularioLoguin;
