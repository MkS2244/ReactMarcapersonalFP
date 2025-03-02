import { useEffect, useState } from "react";
import useProyects from "../../hooks/useProyects";

const FiltroProyecto = () => {

    const proyecto = useProyects()

    const [listaProyectos, setListaProyectos] = useState([])
    const [listaPFiltrada, setListaPFiltrada] = useState([])

    useEffect(() => {
        if (!proyecto.buscando) {
            setListaProyectos(proyecto.proyects);
            setListaPFiltrada(proyecto.proyects);
        }
    }, [proyecto.proyects])

    function filtrarListaProyectos(familiaid) {
        if (familiaid === 0) {
            setListaPFiltrada([...listaProyectos])
        } else {
            const proyFiltrados = []

            listaProyectos.forEach((proyecto) => {
                for (let i = 0; i < familiaid.length; i++) {
                    for (let n = 0; n < proyecto.ciclos.length; n++) {
                        if (proyecto.ciclos[n].familia_id == familiaid[i]) {

                            if (!proyFiltrados.includes(proyecto)) {
                                proyFiltrados.push(proyecto);
                            }
                        }
                    }
                }
            });

            setListaPFiltrada([...proyFiltrados])
        }

    }  

    return {listaPFiltrada, filtrarListaProyectos}
}
export default FiltroProyecto;