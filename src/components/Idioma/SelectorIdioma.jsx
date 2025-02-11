//----------------------
// IMPORTS
//----------------------
import es from '../../img/flag-for-flag-spain-svgrepo-com.svg';
import en from '../../img/united-kingdom-uk-svgrepo-com.svg';
import { useState } from "react";

const SelectorIdioma = (prop) => {

    const [idioma, setIdioma] = useState(prop.idioma)

    function asignarIdioma(evt) {
        //a traves de esta funcion que recibe el componente como prop, 
        //se devuelve el idioma seleccionado al componente padre
        //para que este se lo asigne a la variable de estado

        prop.manejarSeleccion(evt.target.value);
        setIdioma(evt.target.value);
    }

    console.log(idioma);

    return (
        <div className='ml-auto' value={prop.idioma} onChange={asignarIdioma}>
            <img className='idioma' src={es} alt="Cambiar idioma español" />
            <img className='idioma' src={en} alt="Cambiar idioma inglés" />
        </div>
    )
}
export default SelectorIdioma;