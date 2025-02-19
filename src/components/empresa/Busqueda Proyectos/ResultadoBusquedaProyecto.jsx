// --------------------
// COMPONENTES
// --------------------
//import Proyectomincard from "../Card/Proyectomincard";

// -------------
// HOOK
// -------------
import useProyects from "../../../hooks/useProyects";

const ResultadoBusquedaPr = () => {

    const proyect = useProyects()

    function mostrarCard(proyecto) {
        return ""; //<Proyectomincard key={proyecto.id} nombre={proyecto.nombre} codigo={proyecto.id} />
    }

    return(
        <div className="row">
            
        </div>
    )
}
export default ResultadoBusquedaPr;