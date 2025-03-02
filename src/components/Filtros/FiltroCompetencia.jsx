const FiltroCompetencia = ({ competencias, filtro, filtroChange }) => {

    function competenciaSeleccionada(id) {
        let nuevoFiltro = [...filtro]

        if (filtro.includes(id)) {
            nuevoFiltro = filtro.filter((ids) => ids !== id)

        } else {
            nuevoFiltro.push(id)
        }
        filtroChange(nuevoFiltro)
    }

    //console.log("Competencias: ", competencias )

    return(
        competencias.map((competencia) => (
            <div className="checkbox-container" key={competencia.id} >
                <input type="checkbox" id={competencia.id} className="customCheckBoxInput"
                    checked={filtro.includes(competencia.id)}
                    onChange={() => competenciaSeleccionada(competencia.id)}
                />
                <label htmlFor={competencia.id} className="customCheckBoxWrapper">
                    <div className="customCheckBox">
                        <div className='fpBtn'>{competencia.nombre}</div>
                    </div>
                </label>
            </div>
        ))
    )
}
export default FiltroCompetencia;