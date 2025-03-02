export function getCompetencias() {
    const apiUrl = "http://marcapersonalfp.test/api/v1/competencias"

    return fetch(apiUrl, {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        return data.map(competencia => ({
            nombre: competencia.nombre,
            id: competencia.id
        }));
    })
    .catch( er => {
        console.log("ERROR ", er)
        throw er
        // en caso de no poder acceder a los datos, lanzo el error 
    } );
}