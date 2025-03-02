//----------------
// IMPORTS
//----------------
import { useEffect, useState } from "react";
import { getCompetencias } from "../services/getCompetencias";

const useCompetencias = () => {

    const [competencias, setCompetencias] = useState ([])

    const [buscando, setBuscando] = useState(true);

    function obtenerCompetencias () {
        setBuscando(true)

        getCompetencias().then(datos => {
            setCompetencias( datos )

            //console.log("Datos de Competencias: ", datos)

            setBuscando(false)
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerCompetencias, [])

    return competencias
}
export default useCompetencias