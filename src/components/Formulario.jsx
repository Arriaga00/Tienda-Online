import {Inputs} from '../components/FormularioLoguin'
import Checkbox from './Checkbox'
import LogoCustom from '../assets/LogoCustom.png'
import { NavLink } from 'react-router-dom'
import {  useState } from 'react'
import TablaRegistro from './TablaRegistro'

const Formulario = () => {
  const [info,setInfo] = useState([])
  const [mostrarTabla,setMostrarTabla] = useState(false)
  const [valorForm,setValorForm] = useState({
    nombre : '',
    apellido : '',
    correo : '',
    contraseña : '',
    reContraseña : ''
  })

  const valorInput = (e)=>{
    setValorForm({
      ...valorForm,
      [e.target.id] : e.target.value
    })
  }

  const clickBtn = (e)=>{
    e.preventDefault()
    setMostrarTabla(true)
     setInfo([...info,valorForm])

  }

  return (
    <>
    <form action="" className='flex flex-col gap-3 flex-wrap px-2 sm:px-0' >
    <img src={LogoCustom} alt="logo" className='w-20 h-20' />
    <h1 className='text-2xl font-bold text-start '>Bienvenidos a Custom 💻</h1>
    <p className='text-start'>Estamos emocionados de tenerte aquí, descubre nuestra amplia gama de componentes de alta calidad. Lleva tu experiencia siguiente nivel!</p>
    <div className='flex flex-col gap-5'>
    <div className='flex flex-col sm:flex-row gap-3'>
    <Inputs nombre={"Nombre"} type={"text"} id={"nombre"} w={"w-full sm:w-96"} value={valorForm.nombre} onChange={valorInput} />
    <Inputs nombre={"Apellido"} type={"text"} id={"apellido"} w={"w-full sm:w-96"} value={valorForm.apellido} onChange={valorInput}/>
    </div>
    <Inputs nombre={"Correo@"} type={"email"} id={"correo"} w={"w-full"} value={valorForm.correo} onChange={valorInput} />
    <div className='flex flex-col sm:flex-row gap-3'>
    <Inputs nombre={"Contraseña"} type={"password"} id={"contraseña"} w={"w-full sm:w-96"} value={valorForm.contraseña} onChange={valorInput}/>
    <Inputs nombre={"Confirmar Contraseña"} type={"password"} id={"reContraseña"} w={"w-full sm:w-96"} value={valorForm.reContraseña} onChange={valorInput} />
    </div>
    </div>
    <Checkbox text='Quiero recibir correos electrónicos sobre eventos, actualizaciones de productos y anuncios de la empresa.'/>
    <p className='text-start text-gray-500'>Al crear una cuenta, usted acepta nuestros <a href='#' className='underline text-black hover:text-blue-500'>términos y condiciones</a> y nuestra <a href='#' className='underline text-black hover:text-blue-500'>política de privacidad</a>.</p>
    <div className='flex flex-col sm:flex-row gap-3 items-center'>
        <button className='bg-green-500 text-white px-36 py-2 rounded-lg hover:opacity-90 font-bold' onClick={clickBtn} >Crear cuenta</button>
        <p className='text-gray-500'>¿Ya tienes una cuenta? <NavLink to='/' className='underline text-black pl-3 hover:text-blue-500'>Inicia sesión</NavLink>.</p>
    </div>
    </form>
    <span  className='flex flex-wrap flex-col gap-2  overflow-auto w-full max-w-xs sm:max-w-full '>{mostrarTabla && info.map((el,i)=>{
      return(
        <TablaRegistro key={i} infoUser={el}/>
      )
    })}</span>
    </>
  )
}

export default Formulario
