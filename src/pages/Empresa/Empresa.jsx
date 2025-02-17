
import { useContext } from 'react';
import IdiomaContext from '../../contexto/idiomaContext';

const Empresa = () => {

    const context = useContext(IdiomaContext);

    return(
        <nav>
            <ul>
                <li><span>{context.emp}</span></li>
                <li>{context.pro}</li>
                <li>{context.alu}</li>
            </ul>
        </nav>
    )
}
export default Empresa;