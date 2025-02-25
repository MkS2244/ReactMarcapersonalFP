
const Proyectomincard = (prop) => {


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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Proyectomincard;