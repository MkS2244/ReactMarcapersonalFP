import { useContext } from "react"
import IdiomaContext from "../../../contexto/idiomaContext"
import  useAlumnos from '../../../hooks/useAlumnos'
import AlumnoMinCard from "../card/AlumnoMinCard"
import AjaxLoader from "../../AjaxLoader"

const ResultadoBusquedaAlu = (prop) => {
    const idioma = useContext(IdiomaContext)
    const alumnos = useAlumnos()

    function mostrarCard(alumno) {
        <AlumnoMinCard alumno={alumno} />
    }

    return(
        <div className="row">
        <div className="card">
            <h5 className="card-header colorTexto">{idioma.resultados}</h5>
            <div>
                {alumnos.buscando ? <AjaxLoader /> :""}
                {prop.listaAumnosFiltrada.length > 0 ? (
                    prop.listaAumnosFiltrada.map(mostrarCard)
                ) : (
                    <p> No hay proyectos disponibles.</p>
                )}
            </div>
        </div>
    </div>
    )
}
export default ResultadoBusquedaAlu