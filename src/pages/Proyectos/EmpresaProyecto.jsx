import ListaFP from "../../components/empresa/FiltrarFP/ListaFP";
import MenuEmpresa from "../../components/Menu Empresa/menuEmpresa";
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './EmpresaProyecto.css'
import IdiomaContext from "../../contexto/idiomaContext";
import { useContext } from "react";
import ResultadoBusquedaPr from "../../components/empresa/Busqueda Proyectos/ResultadoBusquedaProyecto";

const EmpresaProyecto = () => {

    const idioma = useContext(IdiomaContext);

    const fp = useFamiliaProfesional();

    function listarFP(familia) {
        return <ListaFP key={familia.codigo} nombre={familia.nombre} codigo={familia.codigo} />
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
                        <div className="checkbox-container">
                            {fp.map(listarFP)}
                        </div>
                    </details>
                </div>
            </div>
            <ResultadoBusquedaPr />
        </>
    )
}
export default EmpresaProyecto;