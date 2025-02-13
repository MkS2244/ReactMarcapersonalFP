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
                <img className='logo' src={logo} alt="Logo Marcapersona" />
            </a>
            <h1>Marca Personal FP</h1>
            <SelectorIdioma idioma='es' />
        </nav>
    )
}
export default MP;