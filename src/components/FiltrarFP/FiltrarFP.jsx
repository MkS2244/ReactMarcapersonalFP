// ----------------------
// IMPORTS
// ----------------------
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional"
import dropdown from '../../img/dropdown.svg'
import './FiltrarFP.css'

const FiltrarFP = () => {

    const fp = useFamiliaProfesional()

    return(
        <div className="card-body">
            <h5 className="card-header">Búsqueda de Proyectos</h5>
            <p className="card-title">
                Filtrar por familia profesional
                <img id="dropdown" src={dropdown} width="30" />
            </p>
            <div className="listVisible">
                <button className="button">
                    <span className="button_top">
                        {fp.nombre}
                    </span>
                </button>
            </div>
        </div>
    )
}
export default FiltrarFP;