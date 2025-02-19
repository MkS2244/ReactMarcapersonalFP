// --------------------
// COMPONENTES
// --------------------
//import './Empresa.css'
import { Route, Routes } from "react-router-dom";
import EmpresaProyecto from "../../components/empresa/Busqueda Proyectos/EmpresaProyecto";
import MenuEmpresa from "../../components/Menu Empresa/menuEmpresa";

const Empresa = () => {

    return(
        <div className="row">
            <div className="col-12">
              <MenuEmpresa>
                <Routes>
                    <Route path="/empresa/proyectos" element={<EmpresaProyecto />} />
                    
                </Routes>
              </MenuEmpresa>  
            </div>
        </div>
    )
}
export default Empresa;