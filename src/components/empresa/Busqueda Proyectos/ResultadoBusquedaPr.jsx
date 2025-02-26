// // --------------------
// // COMPONENTES
// // --------------------
// //import Proyectomincard from "../Card/Proyectomincard";

// // -------------
// // HOOK
// // -------------
// import { useContext } from "react";
// import useProyects from "../../../hooks/useProyects";
// import IdiomaContext from "../../../contexto/idiomaContext";
// import Proyectomincard from "../Card/Proyectomincard";

// const ResultadoBusquedaPr = ({familiaSeleccionada}) => {

//     const idioma = useContext(IdiomaContext)
//     const { proyects, buscando } = useProyects()

//     // filtro los proyectos por los valores que recibe por familiaSeleccionada
//     // si no recibe nada o el array esta vacio, devuelve true
//     // si no, devuelve todos los proyectos que tengan un ciclo que coincida con la familia seleccionada
//     const proyectosFiltrados = proyects.filter((proyecto) =>{
//         if (!familiaSeleccionada || familiaSeleccionada.length === 0) return true;

//         // el metodo some() devuelve true si al menos un elemento del array cumple con la condición 
//         // includes() devuelve true si contiene el valor de la familia seleccionada ( ID )

//         return proyecto.ciclos.some((ciclo) => 
//             familiaSeleccionada.includes(ciclo.familiaProfesional_id))
//     })


//     return (
//         <div className="row">
//             <div className="card">
//                 <h5 className="card-header colorTexto">{idioma.resultados}</h5>
//                 <div>
//                     {buscando ? (
//                         <p>Cargando proyectos...</p>    // si está buscando muestra el mensaje (despues cambiarlo por un spinner)
//                     ) : proyectosFiltrados.length > 0 ? (         // si no esta buscando y encuentra los proyectos hace un map y recorre el array para mostrar los proyectos
//                         proyectosFiltrados.map(proyecto => (
//                             <Proyectomincard
//                                 key={proyecto.id}
//                                 nombre={proyecto.nombre}
//                                 codigo={proyecto.id}
//                                 tutor={proyecto.docente_id}
//                                 alumnos={proyecto.participantes}
//                                 ciclos={proyecto.ciclos}
//                             />
//                         ))
//                     ) : (
//                         <p>No hay proyectos disponibles.</p>    // si no encuentra proyectos muestra el mensaje
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default ResultadoBusquedaPr;