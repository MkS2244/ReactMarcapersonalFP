// --------------------
// IMPORTS
// --------------------
import { useState, useEffect } from 'react';
import idiomas from '../mocks/mock-idiomas';

const useIdioma = () =>{

    const [idioma, setIdioma] = useState(idiomas.es)

    function asignarIdioma(elegido) {
      //a traves de esta funcion que recibe el componente como prop, 
      //se devuelve el idioma seleccionado al componente padre
      //para que este se lo asigne a la variable de estado
  
      //prop.manejarSeleccion(evt.target.value);
      setIdioma(idiomas[elegido]);
    }
  
    useEffect(() =>{
      // console.log("Idioma cambiado a: ", idioma);
    }, [idioma]);

    return {idioma, asignarIdioma};
}
export default useIdioma;