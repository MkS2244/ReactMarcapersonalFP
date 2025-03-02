import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './FiltroFP.css'

const FiltroFP = ({familias, filtro, filtroChange}) => {

    const fp = useFamiliaProfesional()
    //console.log("Familias Profesionales: ", fp)

    function familiaSeleccionada ( id ){
        let nuevoFiltro = [...filtro]

        // includes() devuelve true si el array contiene el valor que se le pasa, sino devuelve false
        if (filtro.includes(id)){
            // si la familia esta seleccionada, la elimino del array de familias seleccion
            nuevoFiltro = filtro.filter((ids) => ids !== id )

        } else{
            nuevoFiltro.push(id)
            // si la familia no esta seleccionada, la agrego al array de familias seleccionadas
        }
        filtroChange(nuevoFiltro)
    }
    

    return (
        familias.map((familia) => (
            // console.log(" ID FP: ",familia.id),
            <div className="checkbox-container" key={familia.id} >
                <input type="checkbox" id={familia.id} className="customCheckBoxInput" 
                    checked={filtro.includes(familia.id)}
                    onChange={() => familiaSeleccionada(familia.id)}
                />
                <label htmlFor={familia.id} className="customCheckBoxWrapper">
                    <div className="customCheckBox">
                        <div className='fpBtn'>{familia.nombre}</div>
                    </div>
                </label>
            </div>
        ))
    )

}
export default FiltroFP;