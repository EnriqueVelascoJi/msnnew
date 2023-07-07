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
                        Equipo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        No económico 
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Marca
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Modelo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        No serie
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tipo de combustible
                    </th>
                    <th scope="col" className="px-6 py-3">
                        En uso
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Motivo
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
                                <span>{item.equipo}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.noeconomico}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.marca}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.modelo}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.noserie}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.tipocombustible}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.enuso ? <CheckCircle color='success'/> : <Cancel color='error'/>}</span>
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                <span>{item.motivo}</span>
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