import {Inputs} from '../components/FormularioLoguin'
import Checkbox from './Checkbox'
import LogoCustom from '../assets/LogoCustom.png'
import { NavLink } from 'react-router-dom'

const Formulario = () => {
  return (
    <>
    <form action="" className='flex flex-col gap-3 flex-wrap'>
    <img src={LogoCustom} alt="logo" className='w-20 h-20' />
    <h1 className='text-2xl font-bold text-start pb-3'>Bienvenidos a Custom 💻</h1>
    <div className='flex flex-col gap-5'>
    <div className='flex gap-3'>
    <Inputs nombre={"Nombre"} type={"text"} id={"nombre"} w={"w-96"} />
    <Inputs nombre={"Apellido"} type={"text"} id={"apellido"} w={"w-96"} />
    </div>
    <Inputs nombre={"Correo@"} type={"email"} id={"correo"} w={"w-full"} />
    <div className='flex gap-3'>
    <Inputs nombre={"Contraseña"} type={"password"} id={"contraseña"} w={"w-96"} />
    <Inputs nombre={"Confirmar Contraseña"} type={"password"} id={"reContraseña"} w={"w-96"} />
    </div>
    </div>
    <Checkbox text='Quiero recibir correos electrónicos sobre eventos, actualizaciones de productos y anuncios de la empresa.'/>
    <p className='text-start text-gray-500'>Al crear una cuenta, usted acepta nuestros <a href='#' className='underline text-black hover:text-blue-500'>términos y condiciones</a> y nuestra <a href='#' className='underline text-black hover:text-blue-500'>política de privacidad</a>.</p>
    <div className='flex gap-3 items-center'>
        <button className='bg-green-500 text-white px-36 py-2 rounded-lg hover:opacity-90 font-bold' >Crear cuenta</button>
        <p className='text-gray-500'>¿Ya tienes una cuenta? <NavLink to='/' className='underline text-black pl-3 hover:text-blue-500'>Inicia sesión</NavLink>.</p>
    </div>
    </form>
    </>
  )
}

export default Formulario