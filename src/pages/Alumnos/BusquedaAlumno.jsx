import { useContext, useState } from "react";
import MenuEmpresa from "../../components/Menu Empresa/menuEmpresa"
import IdiomaContext from "../../contexto/idiomaContext";
import ListaFP from "../../components/empresa/ListarFP/ListaFP";
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import ListaCompetencias from "../../components/alumnos/lista competencias/ListaCompetencias";
import useCompetencias from "../../hooks/useCompetencias";
import ResultadoBusquedaAlu from "../../components/alumnos/resultados/ResultadoBusquedaAlu";

const BusquedaAlumno = () => {

    const idioma = useContext(IdiomaContext);
    const familias = useFamiliaProfesional();
    const competencias = useCompetencias();
    const [filtroFamilias, setFiltroFamilias] = useState([])
    const [filtroListaCompetencia, setFiltroListaCompetencia] = useState([])

    function filtroFP(nuevoFiltro) {
        setFiltroFamilias(nuevoFiltro)
    }

    function FiltroCompetencia(nuevoFiltro) {
        //console.log("Filtro Competencias: ", nuevoFiltro)
        setFiltroListaCompetencia( nuevoFiltro)
    }

    // console.log("Datos de Competencias: ",competencias)
    // console.log("Datos de familias:", familias)

    return(
        <>
            <MenuEmpresa />
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.busquedaAl}</h5>
                <div className="customCheckBoxHolder">
                    <details className='filter-section'>
                        <summary className='filter-title'>
                            Filtrar por Competencias
                        </summary>
                        <ListaCompetencias competencias={competencias} filtroChange={FiltroCompetencia} />
                    </details>
                </div>
            </div>
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.busquedaP}</h5>
                <div className="customCheckBoxHolder">
                    <details className='filter-section'>
                        <summary className='filter-title'>
                            {idioma.filtrarFP}
                        </summary>
                        <ListaFP familias={familias} filtroChange={filtroFP} />
                    </details>
                </div>
            </div>
            <ResultadoBusquedaAlu listaAumnosFiltrada={filtroListaCompetencia} />
        </>
    )
}
export default BusquedaAlumno