// ---------------------
// IMAGENES
// ---------------------
import empresas from '../../img/empresa.jpg';
import estudiantes from '../../img/student.jpg';
import centros from '../../img/school.jpg';

// ---------------------
// CSS
// ---------------------
import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div>
                <Link to="/empresa" >
                    <img src={empresas} className='imagenes col-12 col-sm-4 order-3' />
                </Link>
                <Link to="/alumno" >
                    <img src={estudiantes} className='imagenes col-12 col-sm-4 order-2' />
                </Link>
                <Link to="/centroeducativo">
                    <img src={centros} className='imagenes col-12 col-sm-4 order-1' />
                </Link>
            </div>

        </div>
    )
}
export default Home;