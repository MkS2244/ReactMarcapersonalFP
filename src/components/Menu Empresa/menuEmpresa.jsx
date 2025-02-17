// ---------------------
//  IMPORTS
// ---------------------
import './menuEmpresa.css';
import { useContext } from 'react';
import IdiomaContext from '../../contexto/idiomaContext';

const MenuEmpresa = () => {

    const context = useContext(IdiomaContext);

    return(
        <nav className='empresa navbar-collapse'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <ul className='ul'>
                <li className='li'>
                    <span className='spanEmp'>[{context.emp}]</span>
                </li>
                <li className='li'>
                    <a href="/empresa/proyectos">{context.pro}</a> 
                </li>
                <li className='li'>
                    <a href="/empresa/alumnos">{context.alu}</a>
                </li>
            </ul>
        </nav>
    )
}
export default MenuEmpresa;