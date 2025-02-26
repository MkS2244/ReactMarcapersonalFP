export function getProyects (){
    const apiUrl = 'http://marcapersonalfp.test/api/v1/proyectos'

    return fetch(apiUrl, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        return data.map( proyecto => ({
            nombre: proyecto.nombre,         // nombre del proyecto
            id: proyecto.id,                 // id del proyecto
            docente_id: proyecto.docente_id, // id del docente
            ciclos: proyecto.ciclos.map( ciclo => ({    
            // hago el map de los ciclos para conseguir el codigo del ciclo y el nombre
              codCiclo: ciclo.codCiclo,      // codigo del ciclo  
              familia_id: ciclo.familia_id,  // codigo de la familia
              nombreCiclo: ciclo.nombre           // nombre del ciclo
            })),
            participantes: proyecto.participantes.map(participante => ({
            // map de los participantes y concateno el nombre y apellidos   
                name: `${participante.nombre} ${participante.apellidos}`
            }))
        }));
    })
    .catch( er => {
        console.log("ERROR ", er)
        throw er
        // en caso de no poder acceder a los datos, lanzo el error 
    } );
}