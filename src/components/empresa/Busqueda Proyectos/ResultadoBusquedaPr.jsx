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
    const { proyects, buscando } = useProyects()

    // function mostrarCard(proyecto) {
    //     return <Proyectomincard key={proyecto.id} nombre={proyecto.nombre} codigo={proyecto.id} />
    // }

    return (
        <div className="row">
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.resultados}</h5>
                <div>
                    {buscando ? (
                        <p>Cargando proyectos...</p>
                    ) : proyects.length > 0 ? (
                        proyects.map(proyecto => (
                            <Proyectomincard
                                key={proyecto.id}
                                nombre={proyecto.nombre}
                                codigo={proyecto.id}
                                tutor={proyecto.docente_id}
                                alumnos={proyecto.participantes}
                                ciclos={proyecto.ciclos}
                            />
                        ))
                    ) : (
                        <p>No hay proyectos disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ResultadoBusquedaPr;