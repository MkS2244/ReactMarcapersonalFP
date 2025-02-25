import './ListaFP.css';

const ListaFP = (prop) => {

    //le paso el idFP para cuando se haga click en el checkbox se active 
    // ya que si no se le pasa el id se activa siempre el mismo.
    const idFP = prop.codigo

    return (
        <>
            <input type="checkbox" id={idFP} className="customCheckBoxInput" 
                {...prop.register("familias", 
                        {
                            value: prop.codigo
                        }
                    )
                }
            />
            <label htmlFor={idFP} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className='fpBtn'>{prop.nombre}</div>
                </div>
            </label>
        </>
    )
}
export default ListaFP;