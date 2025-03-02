export function getProyects (){
    const apiUrl = 'http://marcapersonalfp.test/api/v1/proyectos'

    return fetch(apiUrl, {
        method: "GET"
    })
    .then(response => {
        const data = response.json()
        return data
    })
    .catch( er => {
        console.log("ERROR ", er)
        throw er
        // en caso de no poder acceder a los datos, lanzo el error 
    } );
}