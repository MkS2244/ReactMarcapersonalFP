// ---------------------
//  IMPORTS
// ---------------------
import './menuEmpresa.css';
import { useContext } from 'react';
import IdiomaContext from '../../contexto/idiomaContext';
import { Link } from 'react-router-dom';

const MenuEmpresa = () => {

    const context = useContext(IdiomaContext);

    return (
        <nav className='empresa navbar-collapse'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <ul className='ul'>
                <li className='li'>
                    <span className='spanEmp'>[{context.emp}]</span>
                </li>
                <li className='li'>
                    <Link to="/empresa/proyectos">
                        {context.pro}
                    </Link>
                </li>
                <li className='li'>
                    <Link to="/empresa/alumnos">
                        {context.alu}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default MenuEmpresa;