// -----------------------
// IMAGEN DEL LOGO Y CSS
// -----------------------
import logo from '../../img/mp-logoNaranja100.png'
import './MP.css'
// -----------------------
// COMPONENTE
// -----------------------
import SelectorIdioma from '../Idioma/SelectorIdioma'

const MP = () => {

    return (
        <nav>
            <a href="/">
                <img className='logo d-inline-block align-top' src={logo} alt="Logo Marcapersona" />
            </a>
            <h1 className='navbar-text font-weight-bold d-none d-sm-block user-select-none'>Marca Personal FP</h1>
            <SelectorIdioma idioma='es' />
        </nav>
    )
}
export default MP;