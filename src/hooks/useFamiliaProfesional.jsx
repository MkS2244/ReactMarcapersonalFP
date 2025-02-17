import { useEffect, useState } from "react";
import { getFamiliaProfesional } from "../services/getFamiliaProfesional";

const useFamiliaProfesional = () => {

    const [fp, setFP] = useState({data: []});

    const [buscando, setBuscando] = useState(true);

    function obtenerFP () {
        setBuscando(true)

        getFamiliaProfesional().then(datos => {
          
            setFP({...fp,
                data: datos
            })
            console.log("Datos de FP: ",datos)

            setBuscando(false)
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerFP, []);

    return {fp}
}
export default useFamiliaProfesional;