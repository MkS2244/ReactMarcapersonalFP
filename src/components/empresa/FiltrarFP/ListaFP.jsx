import './ListaFP.css';

const ListaFP = (prop) => {

    const idFP = `CFP${prop.codigo}`

    return (
        <div>
            <input type="checkbox" id={idFP} className="customCheckBoxInput" />
            <label htmlFor={idFP} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className='fpBtn'>{prop.nombre}</div>
                </div>
            </label>
        </div>
    )
}
export default ListaFP;