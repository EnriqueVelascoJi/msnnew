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
                        Costo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Fecha costo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Venta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Fecha venta
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Proveedor
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
                                <span>$ {item.costo}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.fechacosto}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>$ {item.venta}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.fechaventa}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.proveedor}</span>
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