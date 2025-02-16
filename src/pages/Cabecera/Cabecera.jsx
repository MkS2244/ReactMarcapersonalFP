// ---------------------------
// COMPONENTES
// ---------------------------
import MP from "../../components/Marcapersonal/MP";
import './Cabecera.css'

const Cabecera = ({asignarIdioma}) => {

    return (
        <header>
            <MP asignarIdioma={asignarIdioma} />
        </header>
    )
}
export default Cabecera;