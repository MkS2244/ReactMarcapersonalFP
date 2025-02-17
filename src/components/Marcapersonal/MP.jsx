// -----------------------
// IMAGEN DEL LOGO Y CSS
// -----------------------
import logo from '../../img/mp-logoNaranja100.png';
import './MP.css';
// -----------------------
// COMPONENTE
// -----------------------
import Idioma from '../Idioma/Idioma';

const MP = ({asignarIdioma}) => {

    return (
        <nav className='mp'>
            <a href="/">
                <img className='logo' src={logo} alt="Logo Marcapersona" />
            </a>
            <h1>Marca Personal FP</h1>
            <Idioma asignarIdioma={asignarIdioma}/>
        </nav>
    )
}
export default MP;