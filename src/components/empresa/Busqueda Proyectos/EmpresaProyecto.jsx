import ListaFP from "../FiltrarFP/ListaFP";
import MenuEmpresa from "../../Menu Empresa/menuEmpresa";
import useFamiliaProfesional from "../../../hooks/useFamiliaProfesional";
import './EmpresaProyecto.css'

const EmpresaProyecto = () => {

    const fp = useFamiliaProfesional();

    function listarFP(familia) {
        return <ListaFP key={familia.codigo} nombre={familia.nombre} />
    }

    return (
        <div className="row">
            <div className="col-12">
                <MenuEmpresa />
                <div className="card">
                    <h5 className="card-header colorTexto">Búsqueda de Proyectos</h5>
                    <div className="customCheckBoxHolder">
                        <details className='filter-section'>
                            <summary className='filter-title'>
                                Filtrar por familia profesional
                            </summary>
                            <div className="filter-content">
                                {fp.map(listarFP)}
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
        // <div className="row">
        //     <div className="col-12">
        //         <MenuEmpresa />
        //         <div className="card">
        //             <h5 className="card-header colorTexto">Búsqueda de Proyectos</h5>
        //             <summary className='filter-title'>Filtrar por familia profesional
        //                 <div className="customCheckBoxHolder">
        //                     {fp.map(listarFP)}
        //                 </div>
        //             </summary>
        //         </div>
        //     </div>
        // </div>
    )
}
export default EmpresaProyecto;