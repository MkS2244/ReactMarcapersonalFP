// --------------
// IMPORTS
// --------------
import { useEffect, useState } from "react"
import { getProyects } from "../services/getProyects"

const useProyects = () => {

    const [proyects, setProyects] = useState ([])

    const [buscando, setBuscando] = useState(true);

    function obtenerFP () {
        setBuscando(true)

        getProyects().then(datos => {
            setProyects( datos )

            //console.log("Datos de Proyectos: ",datos)

            setBuscando(false)
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerFP, [])

    return {proyects, buscando}
}
export default useProyects;