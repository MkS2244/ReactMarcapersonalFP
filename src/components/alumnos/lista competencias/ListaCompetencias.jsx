import { useState } from "react"
import FiltroCompetencia from "../../Filtros/FiltroCompetencia"

const ListaCompetencias = ({competencias, filtroChange}) => {

    const [filtro, setFiltro] = useState([])

    function filtroCompetencia (nuevoFiltro){
        setFiltro(nuevoFiltro)

        filtroChange(nuevoFiltro)
    }

    //console.log("Filtro Competencias: ", filtro)

    return(
        <>
            <FiltroCompetencia
                competencias={competencias}
                filtro={filtro}
                filtroChange={filtroCompetencia}
            />
        </>
    )
}
export default ListaCompetencias