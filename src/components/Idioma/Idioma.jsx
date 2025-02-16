//----------------------
// IMPORTS
//----------------------
import es from '../../img/flag-for-flag-spain-svgrepo-com.svg';
import en from '../../img/united-kingdom-uk-svgrepo-com.svg';


const Idioma = ({asignarIdioma}) => {

    function selectIdioma(elegido){
        asignarIdioma(elegido);
    }

    return (
        <div className='ml-auto' >
            <img className='idioma' onClick={() => selectIdioma("es")} value="es" src={es} alt="Cambiar idioma español" />
            <img className='idioma' onClick={() => selectIdioma("eng")} value="eng" src={en} alt="Cambiar idioma inglés" />
        </div>
    )
}
export default Idioma;