// --------------------
// COMPONENTES
// --------------------
//import Proyectomincard from "../Card/Proyectomincard";

// -------------
// HOOK
// -------------
import { useContext, useEffect, useState } from "react";
import useProyects from "../../../hooks/useProyects";
import IdiomaContext from "../../../contexto/idiomaContext";
import Proyectomincard from "../Card/Proyectomincard";

const ResultadoBusquedaPr = () => {

    const idioma = useContext(IdiomaContext)
    const proyect = useProyects()

    const [listaProyectos, setProyectos] = useState([])

    function obtenerProyectos(){
        if(!proyect.buscando){
            setProyectos(proyect.proyects)
        }
    }

    useEffect(obtenerProyectos, [proyect.proyects])

    //console.log("Resultado lista proyectos: ", listaProyectos)

    function mostrarCard(proyecto) {
        return <Proyectomincard key={proyecto.id} nombre={proyecto.nombre} codigo={proyecto.id} participantes={proyecto.participantes} />
    }

    //console.log("Proyectos: ", proyect)

    return(
        <div className="row">
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.resultados}</h5>
                <div>
                    {listaProyectos.map(mostrarCard)}
                </div>
            </div>
        </div>
    )
}
export default ResultadoBusquedaPr;