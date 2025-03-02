import fr from '../../../img/flag-wf-svgrepo-com.svg'
import es from '../../../img/flag-for-flag-spain-svgrepo-com.svg'
import en from '../../../img/united-kingdom-uk-svgrepo-com.svg'

const AlumnoMinCard = (prop) => {

    function listaCiclo(ciclo) {
        return <>
            {ciclo.codCiclo}
        </>
    }

    function listaIdioma(idiomas) {
        const alumnoCertificado = idiomas.certificado ? "C" : "SC"
        const banderasIdiomas = idiomas.native_name === "Español" ? es : idiomas.native_name === "Français" ? fr : en;

        return  <>
                    <img src={banderasIdiomas} />
                    {idiomas.native_name}
                    {alumnoCertificado}
                </>
    }

    return (
        <>
            <div className="container mt-2 col-12 col-sm-4 col-md-4">
                <div className="card">
                    <div className="row ">
                        <div className="col-12">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" className="img-fluid rounded-start" alt="Imagen" />
                        </div>
                        <div className="ml-3 fondoCard">
                            <div className="card-body ms-3">
                                <h5 className="mb-1">{prop.alumno.name}</h5>
                                <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                                    <div className="px-3">
                                        <small className="mb-0 text-muted">{prop.alumno.idiomas.map(listaIdioma)}</small>
                                    </div>
                                    <div>
                                        <small className="mb-1">Ciclos:</small>
                                        <small className="mb-0 text-muted">{prop.alumno.ciclos.map(listaCiclo)}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AlumnoMinCard