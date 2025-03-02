// --------------------
// COMPONENTES
// --------------------
//import Proyectomincard from "../Card/Proyectomincard";
import AjaxLoader from '../../AjaxLoader'

// -------------
// HOOK
// -------------
import { useContext } from "react";
import useProyects from "../../../hooks/useProyects";
import IdiomaContext from "../../../contexto/idiomaContext";
import Proyectomincard from "../Card/Proyectomincard";

const ResultadoBusquedaPr = (prop) => {

    const idioma = useContext(IdiomaContext)
    const proyect = useProyects()

    function mostrarCard(proyecto) {
        //console.log("Proyecto: ", proyecto)
        return <Proyectomincard proyecto={proyecto} />
    }

    //console.log("Proyectos: ", proyect)

    return (
        <div className="row">
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.resultados}</h5>
                <div>
                    {proyect.buscando ? <AjaxLoader /> :""}
                    {prop.proyectosFiltrados.length > 0 ? (
                        prop.proyectosFiltrados.map(mostrarCard)
                    ) : (
                        <p>No hay proyectos disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ResultadoBusquedaPr