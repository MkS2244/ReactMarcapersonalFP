import { useState } from 'react';
import FiltroFP from '../../Filtros/FiltroFP';

const ListaFP = ({familias, filtroChange}) => {
    // recibo las familias profesionales y la función para cambiar el filtro de familias seleccionadas

    const [filtro, setFiltro] = useState([])

    function filtroFamilia (nuevoFiltro){
        setFiltro(nuevoFiltro)

        filtroChange(nuevoFiltro)
        // le paso el filtro al componente padre para que se actualice el filtro de familias seleccionadas
    }
    
    //console.log("Filtro Familias: ", filtro)

    return (
        <>
            <FiltroFP 
                familias={familias}
                filtro={filtro}
                filtroChange={filtroFamilia}
            />
        </>
    )
}
export default ListaFP;