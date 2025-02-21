// -------------
// COMPONENTES
// -------------
import useProyects from "../../../hooks/useProyects";
import avatar from '../../../img/avatar.webp'

const Proyectomincard = (prop) => {

<<<<<<< HEAD
const Proyectomincard = (prop) => {

    //console.log( "CARD: ", prop)

    function mostrarParticipante (participante)
    {
        return <p className="mb-2 pb-1">{participante.nombre}</p>
    }

    return (
        <div>
            <section className="w-100 px-4 py-5 sectionCard">
                <div className="row d-flex justify-content-center">
                    <div className="col col-md-9 col-lg-7 col-xl-6">
                        <div className="card borde">

                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <img src="https://source.unsplash.com/random/200x200/?proyecto"
                                            alt="Generic placeholder image" className="img-fluid imgCard" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="mb-1">{prop.nombre}</h5>
                                        <p className="mb-2 pb-1">Alumnos</p>
                                        {prop.participantes.map(mostrarParticipante)}
                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                                            <div>
                                                <p className="small text-muted mb-1">Articles</p>
                                                <p className="mb-0">41</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Followers</p>
                                                <p className="mb-0">976</p>
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-1">Rating</p>
                                                <p className="mb-0">8.5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
=======
    

    return (
        <div>
            <div className="container mt-4">
                <div className="card" style={{maxwidth: "400px", borderRadius: "10px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://source.unsplash.com/random/200x200/?proyecto" className="img-fluid rounded-start" alt="Imagen"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{prop.nombre}</h5>
                                <p className="fw-bold mb-1"><strong>ALUMNOS</strong></p>
                                <p className="mb-1">{prop.alumno}</p>
                                <p className="mb-1"><strong>Tutor:</strong> </p>
                                <p className="mb-0"><strong>Ciclos:</strong><a href="#">{prop.ciclos.join(" | ")}</a></p>
>>>>>>> origin/main
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Proyectomincard;