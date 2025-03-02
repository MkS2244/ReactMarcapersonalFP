import imgProyecto from '../../../img/proyecto.jpg'
import './Proyectocard.css'

const Proyectomincard = (prop) => {

    function obtenerParticipantes(participante){
        return <>
                {participante.name} <br />
               </>
    }

    function obtenerCiclos(ciclo){
        return <>
                {ciclo.codCiclo} <br />
               </>
    }

    return (
        <>
            <div className="container mt-2 col-12 col-sm-4 col-md-4">
                <div className="card">
                    <div className="row ">
                        <div className="col-12">
                            <img src={imgProyecto} className="img-fluid rounded-start" alt="Imagen" />
                        </div>
                        <div className="ml-3 fondoCard">
                            <div className="card-body">
                                <h5 className="card-title">{prop.proyecto.nombre}</h5>
                                <p className="fw-bold mb-1"><strong>ALUMNOS</strong></p>
                                {prop.proyecto.participantes.map(obtenerParticipantes)}
                                <p className="mb-1"><strong>Tutor:</strong>{prop.proyecto.docente_id}</p>
                                <p className="mb-0"><strong>Ciclos:</strong>{prop.proyecto.ciclos.map(obtenerCiclos)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Proyectomincard;