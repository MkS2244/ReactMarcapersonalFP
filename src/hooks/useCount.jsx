// -----------------------
// IMPORTS
// ----------------------- 
import { useEffect, useState } from "react";
import { getCounts } from "../services/getCounts";

const useCount = () => {

    const [count, setCount] = useState({empresas: 0, 
                                        proyectos: 0, 
                                        alumnos: 0})

    const [buscando, setBuscando] = useState(true)

    function obtenerDatos() {
        setBuscando(true);

        getCounts().then(datos => {
            console.log("Los datos de getCount: ",datos)

            // Actualizo el estado con los datos obtenidos
            setCount({...count, 
                empresas: datos.empresasCount,
                proyectos: datos.proyectosCount,
                alumnos: datos.alumnosCount
            });

            setBuscando(false);
        })
    }

    // llamo a la funcion obtener datos para que se ejecute una vez 
    useEffect(obtenerDatos, []);
    
    //console.log(count)

    return {count}    
}
export default useCount;