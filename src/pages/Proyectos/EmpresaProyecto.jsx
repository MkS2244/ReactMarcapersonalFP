// --------------
// COMPONENTES
// --------------
import ListaFP from "../../components/empresa/ListarFP/ListaFP";
import MenuEmpresa from "../../components/Menu Empresa/menuEmpresa";
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './EmpresaProyecto.css'
import IdiomaContext from "../../contexto/idiomaContext";
import { useContext, useState } from "react";
import ResultadoBusquedaPr from "../../components/empresa/Busqueda Proyectos/ResultadoBusquedaProyecto";
import { useForm } from "react-hook-form";
import FiltroProyecto from "../../components/Filtros/FiltroProyecto";

const EmpresaProyecto = () => {

    const idioma = useContext(IdiomaContext);

    const proyectoFiltrado = FiltroProyecto()
    const familias = useFamiliaProfesional();
    const [filtroFamilias, setFiltroFamilias] = useState([])


    // para obtener la familia seleccionada

    // le paso por prop el register de useForm para que actualice el valor de la familia seleccionada
    function filtroFP(nuevoFiltro) {
        setFiltroFamilias([...filtroFamilias, nuevoFiltro])
    }

    return (
        <>
            <MenuEmpresa />
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
            <ResultadoBusquedaPr proyectosFiltrados={proyectoFiltrado.listaPFiltrada} />
        </>
    )
    
}
export default EmpresaProyecto;