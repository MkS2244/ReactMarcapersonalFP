import FiltrarFP from "../FiltrarFP/FiltrarFP";
import MenuEmpresa from "../Menu Empresa/menuEmpresa";

const ProyectSearch = () => {

    return (
        <div className="row">
            <div className="col-12">
                <MenuEmpresa />
                <div>
                    <h5>Búsqueda de Proyectos</h5>
                    <FiltrarFP />
                </div>
            </div>
        </div>
    )
}
export default ProyectSearch;