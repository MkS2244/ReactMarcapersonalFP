// --------------------
// COMPONENTES
// --------------------
//import Proyectomincard from "../Card/Proyectomincard";

// -------------
// HOOK
// -------------
import { useContext } from "react";
import useProyects from "../../../hooks/useProyects";
import IdiomaContext from "../../../contexto/idiomaContext";
import Proyectomincard from "../Card/Proyectomincard";

const ResultadoBusquedaPr = () => {

    const idioma = useContext(IdiomaContext)
    const proyect = useProyects()

    // function mostrarCard(proyecto) {
    //     return <Proyectomincard key={proyecto.id} nombre={proyecto.nombre} codigo={proyecto.id} />
    // }

    return(
        <div className="row">
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.resultados}</h5>
                <div>
                    <Proyectomincard />
                    {/* {proyect.map(mostrarCard)} */}
                </div>
            </div>
        </div>
    )
}
export default ResultadoBusquedaPr;