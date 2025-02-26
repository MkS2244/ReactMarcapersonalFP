// --------------------
// COMPONENTES
// --------------------
//import Proyectomincard from "../Card/Proyectomincard";

// -------------
// HOOK
// -------------
import { useContext, useEffect, useState } from "react";
import useProyects from "../../../hooks/useProyects";
import IdiomaContext from "../../../contexto/idiomaContext";
import Proyectomincard from "../Card/Proyectomincard";

const ResultadoBusquedaPr = ({filtroFamilia}) => {
    // filtroFamilia es el prop que recibe de EmpresaProyecto

    //console.log("Familia Seleccionada: ", filtroFamilia)
    const idioma = useContext(IdiomaContext)
    const proyect = useProyects()
    const [listaProyectos, setProyectos] = useState([])

    function obtenerProyectos(){
        if(!proyect.buscando){
            setProyectos(proyect.proyects)
        }
    }

    useEffect(obtenerProyectos, [proyect.proyects])

    //console.log("Resultado lista proyectos: ", listaProyectos)

    function obtenerProyectosFiltrados () {
        if (filtroFamilia && filtroFamilia.length > 0){
            return listaProyectos.filter( proyecto => 
                // verifico que proyecto.ciclo exista y que al menos un ciclo tenga una familia_id que coincida con el filtroFamilia
                proyecto.ciclos && proyecto.ciclos.some( ciclo => filtroFamilia.includes(ciclo.familia_id))     
            );
            // utilizo some() para verificar si al menos un elemento del array cumple con la condición
        }
        return listaProyectos
        // devuelvo todos los proyectos si no hay filtro
    }

    //console.log(" filtroFamilia ", filtroFamilia);

    const proyectosFiltrados = obtenerProyectosFiltrados();
    //console.log("Proyectos Filtrados: ", proyectosFiltrados)

    function mostrarCard(proyecto) {
        return <Proyectomincard 
                key={proyecto.id}
                nombre={proyecto.nombre}
                codigo={proyecto.id}
                tutor={proyecto.docente_id}
                alumnos={proyecto.participantes}
                ciclos={proyecto.ciclos} />
    }

    //console.log("Proyectos: ", proyect)

    return(
        <div className="row">
            <div className="card">
                <h5 className="card-header colorTexto">{idioma.resultados}</h5>
                <div>
                    {proyect.buscando ? (
                            <p>Cargando proyectos...</p>          // si está buscando muestra el mensaje (despues cambiarlo por un spinner)
                        ) : proyectosFiltrados.length > 0 ? (         // si no esta buscando y encuentra los proyectos hace un map y recorre el array para mostrar los proyectos
                            proyectosFiltrados.map(mostrarCard)
                        ) : (
                            <p>No hay proyectos disponibles.</p>  // si no encuentra proyectos muestra el mensaje
                        )}
                </div>
            </div>
        </div>
    )
}
export default ResultadoBusquedaPr;