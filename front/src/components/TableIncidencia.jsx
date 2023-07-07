import Cancel from '@mui/icons-material/Cancel';
import CheckCircle from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Table({payload, flag}) {

    return (
        
        
    <div className="container mx-auto my-10 relative overflow-x-auto">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:text-white">
                <tr>
                    
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estatus
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Descripción
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Comentario
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Fecha
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Verifacdor WA
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID Mecánico
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Editar
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Eliminar
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    payload.items.map(item => (
                        <tr key={item.idusuario}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.nombre}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.estatus}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.descripcion}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.comentario}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.fecha}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.ischeckwa ? <CheckCircle color='success'/> : <Cancel color='error'/>}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.idmecanico}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{<EditIcon color='disabled'/>}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{<DeleteIcon color='disabled'/>}</span>
                            </th>
                        </tr>
                        
                    ))
                }
                
                
            </tbody>
        </table>
    </div>


    )
}