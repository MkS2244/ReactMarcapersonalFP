export function getFamiliaProfesional(){
    const apiUrl = 'http://marcapersonalfp.test/api/v1/familias_profesionales'

    return fetch (apiUrl)
        .then(response => response.json())
        .then(response =>{
            const { data } = response;
            console.log("GetFP: ",data);
            return data; 
        })
        
}