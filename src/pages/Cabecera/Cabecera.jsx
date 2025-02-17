// ---------------------------
// COMPONENTES
// ---------------------------
import MP from "../../components/Marcapersonal/MP";
import './Cabecera.css'

const Cabecera = ({asignarIdioma}) => {

    return (
        <header className="header">
            <MP asignarIdioma={asignarIdioma} />
        </header>
    )
}
export default Cabecera;