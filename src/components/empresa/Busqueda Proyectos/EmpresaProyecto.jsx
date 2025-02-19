import ListaFP from "../FiltrarFP/ListaFP";
import MenuEmpresa from "../../Menu Empresa/menuEmpresa";
import useFamiliaProfesional from "../../../hooks/useFamiliaProfesional";
import './EmpresaProyecto.css'
import IdiomaContext from "../../../contexto/idiomaContext";
import { useContext } from "react";

const EmpresaProyecto = () => {

    const idioma = useContext(IdiomaContext);

    const fp = useFamiliaProfesional();

    function listarFP(familia) {
        return <ListaFP key={familia.codigo} nombre={familia.nombre} codigo={familia.codigo}/>
    }

    return (
        <div className="row">
            <div className="col-12">
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
            </div>
        </div>
    )
}
export default EmpresaProyecto;