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

// ---------------------
// COMPONENTES
// ---------------------
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='row'>
            <div className='col-12 space'>
                <Link to="/empresa" >
                    <img src={empresas} className='imagenes col-12 col-sm-4 ' />
                </Link>
                <Link to="/alumno" >
                    <img src={estudiantes} className='imagenes col-12 col-sm-4' />
                </Link>
                <Link to="/centroeducativo">
                    <img src={centros} className='imagenes col-12 col-sm-4' />
                </Link>
            </div>
            <Footer />
        </div>
    )
}
export default Home;