/* eslint-disable react/prop-types */

const TablaRegistro = ({infoUser}) => {

    
  return (
    <>
    <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Apellido</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Correo</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Contraseña</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{infoUser.nombre}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{infoUser.apellido}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{infoUser.correo}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{infoUser.contraseña}</td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default TablaRegistro