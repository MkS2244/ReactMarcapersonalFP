//----------------
// IMPORTS
//----------------
import { useEffect, useState } from "react";
import { getAlumnos } from "../services/getAlumnos";

const useAlumnos = () => {

    const [alumnos, setAlumnos] = useState ([])

    const [buscando, setBuscando] = useState(true);

    function obtenerAlumnos () {
        setBuscando(true)

        getAlumnos().then(datos => {
            setAlumnos( datos )

            //console.log("Datos de Alumnos: ",datos)

            setBuscando(false)
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerAlumnos, [])

    return {alumnos, buscando}
}
export default useAlumnos