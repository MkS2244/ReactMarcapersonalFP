import logo from '../../img/mp-logoNaranja100.png'
import es from '../../img/flag-for-flag-spain-svgrepo-com.svg'
import en from '../../img/united-kingdom-uk-svgrepo-com.svg'
import './MP.css'

const MP = () => {

    return (
        <nav>
            <a href="/">
                <img className='logo d-inline-block align-top' src={logo} alt="Logo Marcapersona" />
            </a>
            <h1 className='navbar-text font-weight-bold'>Marca Personal FP</h1>
            <div className='ml-auto'>
                <img className='idioma' src={es} alt="Cambiar idioma español" />
                <img className='idioma' src={en} alt="Cambiar idioma inglés" />
            </div>
        </nav>
    )
}
export default MP;