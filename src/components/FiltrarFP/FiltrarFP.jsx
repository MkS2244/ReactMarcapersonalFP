// ----------------------
// IMPORTS
// ----------------------
import useFamiliaProfesional from '../../hooks/useFamiliaProfesional'
//import dropdown from '../../img/dropdown.svg'
import './FiltrarFP.css'

const FiltrarFP = () => {

    const fp = useFamiliaProfesional()



    //console.log("Familia Profesional: ", fp)

    return (
        <div className="customCheckBoxHolder">{
            fp.buscando ? (
                <p>Cargando . . .</p>
            ) : (
                fp.map( familia => (

                    <div key={familia.codigo}>
                     
                        <input type="checkbox" id={`cCB${familia.codigo}`} className="customCheckBoxInput" />
                     
                        <label htmlFor={`cCB${familia.codigo}`} className="customCheckBoxWrapper">
                            <div className="customCheckBox">
                                <div className="inner">{familia.nombre}</div>
                            </div>
                        </label>
                        
                    </div>
                ))
            )
         } 
            {/* <input type="checkbox" id="cCB1" className="customCheckBoxInput" />
            <label htmlFor="cCB1" className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className="inner">{fp.fp.map( familia =><div key={familia.codigo}> {familia.nombre}</div>)}</div>
                </div>
            </label> */}
        </div>
    )
}
export default FiltrarFP;