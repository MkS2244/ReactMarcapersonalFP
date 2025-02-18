export function getFamiliaProfesional() {
    const apiUrl = 'http://marcapersonalfp.test/api/v1/familias_profesionales'

    return fetch(apiUrl, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        return data.map( familia => ({
            nombre: familia.nombre,
            codigo: familia.codigo
        }));
    })
    .catch( er => {
        console.log("ERROR ", er)
        throw er
        // en caso de no poder acceder a los datos, lanzo el error 
    } );
}